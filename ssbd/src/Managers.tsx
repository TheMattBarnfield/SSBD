import Darren from './images/darren.jpg'
import Mike from './images/mike.jpg'
import Steve from './images/steve.jpg'
import Jenny from './images/jenny.jpg'

export interface Manager{
    name: string
    email: string
    image: string
    role: string
    phoneNumber: string
}

const managers: Manager[] = [{
    name: 'Darren Barnfield',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Darren,
    role: '[something]',
    phoneNumber: '12345678910'
}, {
    name: 'Mike Barnfield',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Mike,
    role: 'Executive Director',
    phoneNumber: '12345678910'
}, {
    name: 'Steve Perry',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Steve,
    role: 'Production Manager',
    phoneNumber: '12345678910'
}, {
    name: 'Jenny Barnfield',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Jenny,
    role: 'Office Administrator',
    phoneNumber: '12345678910'
}]

export default managers