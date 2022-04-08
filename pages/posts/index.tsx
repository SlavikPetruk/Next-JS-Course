import Heading from "../../components/Heading";
import Head from "next/head"
import { GetStaticProps } from "next";
import Link from "next/link"
import { postType } from "../../types/types";
import { FC } from "react";
// import { useEffect, useState } from 'react'

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  
  if (!data) { return { notFound: true } }
  return {  props: {posts : data}  } 
}

type postsTypeProps = {
  posts: [postType]
}

const Posts:FC<postsTypeProps> = ({posts}) => {
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
      <title>Posts</title>
    </Head>
    
    <Heading tag='h1' text="Posts list:" />
    <ul>
      {posts && posts.map(({id, title}) => <li key={id}>
                                                    <Link href={`/posts/${id}`}>
                                                      <strong>{title}</strong>  
                                                    </Link>
                                                     </li> )}
    </ul>
  </>
);}

export default Posts;