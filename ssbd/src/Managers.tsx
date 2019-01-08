import Trees from './images/trees.jpg'

export interface Manager{
    name: string
    email: string
    image: string
    role: string
    phoneNumber: string
}

const managers: Manager[] = [{
    name: 'John Smith',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Trees,
    role: 'CEO',
    phoneNumber: '12345678910'
}, {
    name: 'John Smith',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Trees,
    role: 'CEO',
    phoneNumber: '12345678910'
}, {
    name: 'John Smith',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Trees,
    role: 'CEO',
    phoneNumber: '12345678910'
}, {
    name: 'John Smith',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Trees,
    role: 'CEO',
    phoneNumber: '12345678910'
}, {
    name: 'John Smith',
    email: 'j.s@ssbrightdrawers.co.uk',
    image: Trees,
    role: 'CEO',
    phoneNumber: '12345678910'
}]

export default managers