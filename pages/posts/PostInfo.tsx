import { FC } from "react"
import Heading from "../../components/Heading"
import { postType } from "../../types/types"

type postInfoProps = {
    post: postType,
}

const PostInfo:FC<postInfoProps> = ({post}) => {
    const {title,body} = post || {}

    if (!post) {
        return <Heading tag='h3' text='Empty Contact'/>
    }

    return (
        <>
          <Heading tag="h3" text={title} />
          <p>{body}</p>
       </>
        )
}
export default PostInfo