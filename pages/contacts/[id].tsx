import { GetServerSideProps } from 'next'
import Head from "next/head"
import { FC } from 'react'
import { constactType } from '../../types/types'
import ContactInfo from "./ContactInfo"


export const getServerSideProps:GetServerSideProps = async (context) => {
  const {id} = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  
  if (!data) { return { notFound: true } }
  return {  props: {contact : data}  } 
}

type contactTypeProps = {
  contact: constactType
}

const Contact:FC<contactTypeProps> = ({contact}) => (
    <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contacts={contact}/>
    
    </>
  )
  export default Contact