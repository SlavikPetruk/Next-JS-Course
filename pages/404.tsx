import Heading from "../components/Heading"
import { useRouter } from 'next/router'
import styles from '../styles/404.module.scss'
import { useEffect } from "react"
import { Head } from "next/document"
 
const Error = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[]
    )

    return (
    <div className={styles.wrapper}>
            <Head>
                <title>Error</title>
            </Head>
        <div>
            <Heading tag='h1' text='404'/>
            <Heading tag='h2' text='Something is going wrong'/>
        </div>
    </div>
)}
export default Error