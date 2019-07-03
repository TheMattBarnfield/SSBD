import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as nodemailer from 'nodemailer'
import {password} from './secrets'

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
  subject: 'SSBD Contact',
  text: ''
}

const app = express()
const port = 8080; // default port to listen

app.use(bodyParser.json())

// define a route handler for the default home page
app.post( "/contact", ( req, res ) => {
  const mail = {
    ...template,
    text: req.body.message
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