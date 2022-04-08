
import Head from "next/head"
import { GetStaticPaths, GetServerSideProps } from 'next'
import ContactInfo from "./PostInfo"
import { FC } from "react"
import { postType } from "../../types/types"

export const getStaticPath:GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response.json()
  
 const paths = data.map( ({ id }) => ({ 
   params: { id: id.toString() }
  }))

 return {
   paths,
   fallback: false
  }
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  
  if (!data) { return { notFound: true } }
  return {  props: {post : data}  } 
}

type postTypeProps = {
  post: postType
}

const Post:FC<postTypeProps> = ({post}) => (
    <>
    <Head>
      <title>{`Post: ${post.title}`}</title>
    </Head>
    <ContactInfo post={post}/>
    
    </>
  )
  export default Post