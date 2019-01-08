import React from 'react'
import {Manager} from './Managers'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const ManagerDetailsCard: React.SFC<Manager> = manager => <Card>
    <CardHeader title={manager.name} subheader={manager.role}/>
    <CardMedia style={{height:0, paddingTop: '56.25%'}} image={manager.image} title={manager.name}/>
    <CardContent>
        <Typography>Email: {manager.email}</Typography>
        <Typography>Phone: {manager.phoneNumber}</Typography>
    </CardContent>
</Card>

export default ManagerDetailsCard