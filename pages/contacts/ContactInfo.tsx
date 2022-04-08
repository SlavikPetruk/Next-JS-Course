import { FC } from "react"
import Heading from "../../components/Heading";
import { constactType } from '../../types/types'

type contactsInfoType = {
    contacts: constactType
}

const ContactInfo:FC<contactsInfoType> = ({ contacts }) => {
    const {name,email, address} = contacts || {}
    const {street, suite, city , zipcode} = address || {}

    if (!contacts) {
        return <Heading tag='h3' text='Empty Contact'/>
    }

    return (
        <>
    <Heading tag='h3' text={name} />
    <div>
        <strong>Email :</strong>
        {email}
    </div>
        <div>
        <strong>Address :</strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
    </div>
    </>
        )
}
export default ContactInfo