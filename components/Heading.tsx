import { FC } from "react"

type headingTypeProps = {
    tag?: keyof JSX.IntrinsicElements,
    text: string,
}

const Heading:FC<headingTypeProps> = ({tag, text}) => {
    const Tag = tag || 'h1'
    return <Tag>{text}</Tag>
}
export default Heading