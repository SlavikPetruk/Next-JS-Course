import Head from "next/head"
import Image from 'next/image'
// import imgTest from '../public/mountain.webp'
import Heading from "../components/Heading"
import styles from '../styles/Home.module.scss'
import Socials from "../components/Socials"

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`)
  const data = await response.json();
  
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
}

const Home = ({socials}) => (
  <div className={styles.wrapper} >
    <div style={{display:'block'}}>
    <Head>
      <title>Home</title>
    </Head>
  <Heading tag='h1' text='Home'/>
  <p>Hello</p>
  <p>Slavik</p>
    {/* < Image 
          src={imgTest} 
          alt="img1"
          width={970}
          height={546}
          placeholder='blur'
          /> */}
    < Socials socials={socials} />
    </div>
  </div>
)
export default Home