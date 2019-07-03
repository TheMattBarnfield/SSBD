import React from 'react'
import Trees from './images/trees.jpg'
import Processes from './Processes';
import Quality from './Quality';
import GDPR from './GDPR';
import Management from './Management';
import Contact from './Contact';
import WhoWeAre from './WhoWeAre';
import QualityImage from './images/quality.jpg'
import Factory from './images/factory.jpg'
import CentrelessBars from './images/centrelessbars.jpg'

export interface Page {
    path: string
    name: string
    page: React.ComponentClass<any,any> | React.FunctionComponent<any>
    image: string
  }

const pages: Page[] = [{
    path: '/who-we-are',
    name: 'Who Are We?',
    page: WhoWeAre,
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
  }, {
    path: '/gdpr',
    name: 'GDPR Statement',
    page: GDPR,
    image: Trees
  }, {
    path: '/management',
    name: 'Management',
    page: Management,
    image: Trees
  }, {
    path: '/contact-us',
    name: 'Contact Us',
    page: Contact,
    image: Trees
}]

export default pages