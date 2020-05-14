import express from 'express'
import validator from 'validator'
import xssFilters from 'xss-filters'
import nodemailer from 'nodemailer'
const app = express()

app.use(express.json())
const rejectFunctions = new Map([
    [ 'name', v => v.length < 4 ],
    [ 'email', v => !validator.isEmail(v) ],
    [ 'msg', v => v.length < 25 ]
])
const validateAndSanitize = (key, value) => {
    // If map has key and function returns false, return sanitized input. Else, return false
    return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}
const sendMail = (name, email, msg) => {
    const transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    })
    transporter.sendMail({
      from: email,
      to: 'support@developmint.de',
      subject: 'New contact form message',
      text: msg
    })
}
app.post('/', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})

export default function (req, res) {
}