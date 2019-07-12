import React from 'react'
import GDPRImage from './images/gdpr.jpg'
import ContactImage from './images/contact.jpg'
import Processes from './Processes';
import Quality from './Quality';
import GDPR from './GDPR';
import Management from './Management';
import Contact from './Contact';
import Home from './Home';
import QualityImage from './images/quality.jpg'
import Factory from './images/factory.jpg'
import CentrelessBars from './images/centrelessbars.jpg'
import Trees from './images/trees.jpg'

export interface Page {
    path: string
    name: string
    page: React.ComponentClass<any,any> | React.FunctionComponent<any>
    image: string
  }

const pages: Page[] = [{
    path: '/',
    name: 'Home',
    page: Home,
    image: Factory
  },{
    path: '/processes',
    name: 'Processes',
    page: Processes,
    image: CentrelessBars
  }, {
    path: '/quality',
    name: 'Quality',
    page: Quality,
    image: QualityImage
  },  {
    path: '/management',
    name: 'Management',
    page: Management,
    image: Trees
  }, {
    path: '/gdpr',
    name: 'GDPR Statement',
    page: GDPR,
    image: GDPRImage
  },{
    path: '/contact-us',
    name: 'Contact Us',
    page: Contact,
    image: ContactImage
}]

export default pages