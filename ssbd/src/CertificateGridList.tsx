import React from 'react'
import BSI from './images/bsi logo.jpg'
import BSSA from './images/BSSA logo.jpg'
import ISO from './images/ISO logo.gif'
import CloudDownload from '@material-ui/icons/CloudDownload'
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

interface Certificate {
  name: string,
  logo: string,
  link: string,
  download?: boolean
}

const certificateLink = (file: string): string => `./certificates/${file}.pdf`

const certificates: Certificate[] = [{
  name: 'BSSA',
  logo: BSSA,
  link: 'https://www.bssa.org.uk/'
},{
  name: 'BSI',
  logo: BSI,
  link: certificateLink('BSI'),
  download: true
}, {
  name: 'ISO 9001:2015',
  logo: ISO,
  link: certificateLink('ISO'),
  download: true
}, ]

const columns = {
  'xl': 3,
  'lg': 2,
  'md': 2,
  'sm': 2,
  'xs': 1
}

const CertificateGridList: React.SFC<WithWidth> = (props: WithWidth) => {
  const makeGridListTile = (certificate: Certificate) => <GridListTile key={certificate.name} style={{maxWidth:'300px', height: 'auto'}}>
    <a href={certificate.link} download={certificate.download} target='_blank' rel="noopener noreferrer">
      <img src={certificate.logo} alt={certificate.name} style={{width:'100%', height: '100%'}}/>
      <GridListTileBar 
        title={certificate.name}
        actionIcon={
          <IconButton>
            <CloudDownload style={{color: 'rgba(255,255,255,0.54'}}/>
          </IconButton>
        }
      />
    </a>
  </GridListTile>
  
  return <GridList cols={columns[props.width]} spacing={20} style={{margin: 20, justifyContent: 'center'}}>
    {certificates.map(makeGridListTile)}
  </GridList>
}

export default withWidth()(CertificateGridList)