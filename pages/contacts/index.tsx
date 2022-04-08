import Heading from "../../components/Heading";
import Head from "next/head"
import Link from "next/link"
import { FC } from 'react'
import { GetStaticProps } from "next";
import { constactType } from "../../types/types";
// import { useEffect, useState } from 'react'

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  
  if (!data) { return { notFound: true } }
  return {  props: {contacts : data}  } 
}

type contactsTypeProps = {
  contacts: [constactType]
}

const Contacts:FC<contactsTypeProps> = ({contacts}) => {

  // const [contacts, setContacts] = useState(null)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await response.json()
  //     setContacts(data)
  //   }
  //   fetchData()
  // }, [])

  return (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    
    <Heading tag='h1' text="Contacts list:" />
    <ul>
      {contacts && contacts
                    .map(({id, name, email}) => <li key={id}>
                                                    <Link href={`/contacts/${id}`}>
                                                      <strong>{name}</strong>  
                                                    </Link>
                                                    ({email})
                                                </li> )}
    </ul>
  </>
);}

export default Contacts;