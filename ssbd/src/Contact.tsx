import React, { Component, FormEvent } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField'
import { Card, CardHeader, CardContent, Typography, MenuItem, Grid, Button, Snackbar } from '@material-ui/core';

interface State {
  message: string
  replyMethod: 'email' | 'phone'
  replyDetails: string
  submissionSuccess: boolean
  submissionError: boolean
}

const cardMessage = 'Have a question about our services? Call us on [phone number] or send us a message using the form below and we\'ll be happy to help you out.'


class Contact extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
        message: '',
        replyMethod: 'email',
        replyDetails: '',
        submissionSuccess: false,
        submissionError: false
    }
  }
  render() {
    const messageField = <TextField
      fullWidth
      multiline
      required
      label='What would you like to ask us?'
      name='message'
      rows={4}
      rowsMax={20}
      onChange={(event) => this.setState({message: event.currentTarget.value})}
      value={this.state.message}
    />

    const replyMethod = <TextField
      value={this.state.replyMethod}
      fullWidth
      label='How should we get back to you?'
      select
      name='replyMethod'
      onChange={(event) => this.setState({
        replyMethod: event.target.value as 'email'|'phone',
        replyDetails: ''
      })}
    >
      <MenuItem key='email' value='email'>Email</MenuItem>
      <MenuItem key='phone' value='phone'>Phone</MenuItem>
    </TextField>

    if(this.state.replyMethod === 'email') {
      
    }
    
    const replyDetailsProps = {
      email: {
        label:'Email address'
      },
      phone: {
        label: 'Phone number'
      }
    }
    const replyDetails = <TextField
      value={this.state.replyDetails}
      fullWidth
      required
      name='replyDetails'
      onChange={event => this.setState({replyDetails: event.currentTarget.value})}
      {...replyDetailsProps[this.state.replyMethod]}
    />

    const submitButton = <Button type='submit'>Send Message</Button>

    const card = <Card>
      <CardHeader title='Make an enquiry' />
      <CardContent>
        <form id='gform' onSubmit={this.submitForm}>
          <Grid container spacing={24}>
            <Grid item xs={12}><Typography>{cardMessage}</Typography></Grid>
            <Grid item xs={12}>{messageField}</Grid>
            <Grid item xs={12} sm={6} md={4}>{replyMethod}</Grid>
            <Grid item xs={12} sm={6} md={4}>{replyDetails}</Grid>
            <Grid item xs={12} md={4}>{submitButton}</Grid>
          </Grid>
        </form>
        <Snackbar
          open={this.state.submissionSuccess}
          autoHideDuration={5000}
          onClose={() => this.setState({submissionSuccess: false})}
          color='primary'
          message={'Thank you for your enquiry! We\'ll get back to you as soon as possible.'}
        />
        <Snackbar
          open={this.state.submissionError}
          autoHideDuration={5000}
          onClose={() => this.setState({submissionError: false})}
          color='error'
          message='Something went wrong with the request, please try again.'
        />
      </CardContent>
    </Card>

    return card
  }

  private submitForm = (event: any) => {
    event.preventDefault()
    const data = new FormData(event.target)
    
    fetch('https://script.google.com/macros/s/AKfycbx5MZOkXHYqP-Ay22jLlPnRsMOVT-25tp_N0I06uqQNF8fVQBM/exec', {
      method: 'POST',
      body: data
    }).then(response => {
      if(response.status==200) {
        this.setState({
          message: '',
          replyMethod: 'email',
          replyDetails: '',
          submissionSuccess: true,
          submissionError: false
        })
      } else {
        this.setState({submissionError: true})
      }
    })
  }

}

export default Contact
