import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#79A6CB',
            main: '#316b9b',
            dark: '#0C416D',
            contrastText: 'white'
        },
        secondary: {
            light: '#FFD090',
            main: '#F0A640',
            dark: '#AA6608',
            contrastText: 'white'
        },
        background: {
            default: '#fafafa',
            paper: '#fafafa'
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)'
        }
    }
})

const app = <MuiThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
    </BrowserRouter>
</MuiThemeProvider>

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
