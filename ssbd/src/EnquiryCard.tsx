import React, { Component } from 'react'
import { Card, CardHeader, CardContent, Typography, MenuItem, Grid, Button, Snackbar, TextField } from '@material-ui/core';

const cardMessage = 'Have a question about our services? Call us on [phone number] or send us a message using the form below and we\'ll be happy to help you out.'

interface State {
  message: string
  replyMethod: 'email' | 'phone'
  replyDetails: string
  submissionSuccess: boolean
  submissionError: boolean
}

class EnquiryCard extends Component<{}, State> {

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

    const submitButton = <Button
      type='submit'
      variant='contained'
      color='primary'
    >
        Send Message
    </Button>

    return <Card>
      <CardHeader title='Make an enquiry' titleTypographyProps={{color:'primary'}}/>
      <CardContent>
        <form onSubmit={this.submitForm}>
          <Grid container spacing={24} justify='center'>
            <Grid item xs={12}><Typography>{cardMessage}</Typography></Grid>
            <Grid item xs={12}>{messageField}</Grid>
            <Grid item xs={12} sm={6} lg={4}>{replyMethod}</Grid>
            <Grid item xs={12} sm={6} lg={4}>{replyDetails}</Grid>
            <Grid item container xs={12} md={4} justify='center' alignItems='center'>{submitButton}</Grid>
          </Grid>
        </form>
        <Snackbar
          open={this.state.submissionSuccess}
          autoHideDuration={5000}
          onClose={() => this.setState({submissionSuccess: false})}
          message={'Thank you for your enquiry! We\'ll get back to you as soon as possible.'}
        />
        <Snackbar
          open={this.state.submissionError}
          autoHideDuration={5000}
          onClose={() => this.setState({submissionError: false})}
          message='Something went wrong with the request, please try again.'
        />
      </CardContent>
    </Card>
  }

  private submitForm = (event: any) => {
    event.preventDefault()
    const data = {
      message: this.state.message,
      replyMethod: this.state.replyMethod,
      replyDetails: this.state.replyDetails
    }
    console.log(data)
    fetch('http://localhost:8080/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors'
    }).then(response => {
      this.setState({
        message: '',
        replyMethod: 'email',
        replyDetails: '',
        submissionSuccess: true,
        submissionError: false
      })
    }).catch(() => this.setState({submissionError: true}))
  }
}

export default EnquiryCard