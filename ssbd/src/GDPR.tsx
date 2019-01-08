import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import Logo from './images/Logo.jpg'

const GDPR: React.SFC = () => <Card style={{margin: 24, padding: 24}}>
    <CardHeader title='Privacy Notice'/>
    <CardMedia style={{height:0, paddingTop: '30%'}} image={Logo} title='SS Bright Drawers Ltd.'/>
    <CardContent>
        <Typography>
        <ul>
            <li>Purpose of this notice
<p>This notice describes how SS Bright Drawers (Sheffield) Ltd collect and use personal data about our customers and suppliers, in accordance with the General Data Protection Regulation (GDPR), the Data Protection Act 1998 and any other national implementing laws, regulations and secondary regulation, as amended or updated from time to time, in the UK (Data Protection Legislation).</p></li>

            
	<li>Company Details
SS Bright Drawers (Sheffield) Ltd is a limited company registered in England and Wales under number 1851422. Our registered office is: <br/>
<p>SS Bright Drawers (Sheffield) Ltd, <br></br>
Worthing Road, <br></br>
Sheffield. <br></br>
S9 3JB.</p></li>

	<li>What information do we hold about you?
<p>We may obtain personal data about you when you contact us by email, telephone, post or social media. We may also be in receipt of information from third parties such as Companies House or your employer. We hold supplier and customer bank details so in the rare event that a sole trader uses a personal bank account to deal with us those details would be held on file to ensure the proper financial running of the business.</p>
<p>We will have details of contacts we have made with you in relation to the provision, or the proposed provision of our services. This includes our correspondences, information from research, surveys and marketing activities.</p></li>

	<li>How we use your personal data
<p>We may process your personal data for the purposes of our own legitimate interests provided that those interests do not override any of your own interests, rights and freedoms which require the protection of personal data.</p>
<p>We may process your personal data for certain additional purposes with your consent, and where your consent is required then you have the right to withdraw your consent to processing for such specific purposes.</p></li>
<li>The situations where we will use your personal data include but are not necessarily limited to:
	<p><ul><li>To enable us to carry out our obligations arising from agreements entered into between you and us.</li>
	<li>Provide you with information relating to our services, events and activities</li>
	<li>Seek your thoughts and opinions on the services we provide</li>
	<li>Notify you of any changes to our services or company structure</li></ul></p>
<p>We may process your personal data without your knowledge or consent, in accordance with this notice, where we are legally required or permitted to do so.</p></li>
											
	<li>Data Retention
<p>We will only retain data for as long as is necessary to fulfil the purposes for which it was collected. Where we need to use your personal data for another reason, other than for the purpose for which we collected it, we will only use your personal data where that reason is compatible with the original purpose.</p></li>

	<li>Data Sharing
<p>We will share your data with third parties where we are required by law, where it is necessary to administer the relationship between us or where we have another legitimate interest in doing so. We will not transfer the personal data we collect about you outside the European Economic Area (EEA).</p></li>

	<li>Data Security
<p>We have put in place appropriate security measures to prevent your data from being accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a legitimate need for access. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
<p>We have put in place procedures to deal with any suspected data security breach and will notify you and any applicable regulator of a suspected breach where we are legally obliged to do so.</p></li>

	<li>Your rights
<p>Under certain circumstances you have the right by law to:</p>
	<ul><li>request access to your personal data</li>
	<li>request correction of the personal data we hold about you</li>
	<li>request erasure of personal data</li>
	<li>object to processing of your personal data</li>
	<li>request the transfer of your personal data to you or another controller</li>
	<li>withdraw consent for specific processing assuming this is not required by law</li></ul>
<p>If you wish to exercise any of the above rights, please email our appointed data manager on mike.barnfield@ssbrightdrawers.co.uk.</p></li>

	<li>Changes to this notice
<p>Any changes to this notice will be updated on our website. This notice was last updated 29 August 2018.</p></li>

	<li>If you have any questions regarding this notice or would like to speak to us about how we process your personal data, please contact our data manager.
 Email mike.barnfield@ssbrightdrawers.co.uk or telephone 0114 270 0695.</li>
</ul>
<p>You also have the right to make a complaint to the Information Commissioner’s Office (ICO), the UK supervisory authority for data protection issues, at any time. The ICO’s contact details are as follows:</p>
<p>Information Commissioner’s Office<br></br>
Wycliffe House<br></br>
Water Lane<br></br>
Wilmslow<br></br>
Cheshire<br></br>
SK9 5AF<br></br>
Tel: 0303 123 1113<br></br>
Website: <a href='https://ico.org.uk/concerns'>https://ico.org.uk/concerns</a></p>
        </Typography>
    </CardContent>
</Card>

export default GDPR