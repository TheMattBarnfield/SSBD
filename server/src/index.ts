import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as nodemailer from 'nodemailer'
import {password} from './secrets'

interface Enquiry {
  message: string,
  replyMethod: 'email' | 'phone',
  replyDetails: string
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ssbdcontact@gmail.com',
    pass: password
  }
})

const template = {
  from: 'ssbdcontact@gmail.com',
  to: 'matt.barnfield4@gmail.com',
  subject: '',
  text: ''
}

const app = express()
const port = 8080

app.use(bodyParser.text())

// define a route handler for the default home page
app.post( "/contact", ( req, res ) => {
  const body: Enquiry = JSON.parse(req.body)
  const mail = {
    ...template,
    subject: `Website Enquiry - ${body.replyDetails}`,
    text: `
    You have received an enquiry on the website:
    ${body.message}
    Please reply via ${body.replyMethod} to ${body.replyDetails}`
  }
  transporter.sendMail(mail, (error) => {
    if (error) {
      res.sendStatus(400)
    } else {
      res.sendStatus(200)
    }
  })
})

// start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${ port }`)
})