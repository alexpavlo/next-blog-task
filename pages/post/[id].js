import Navbar from "../../components/navbar";
import styled from 'styled-components'
import Head from 'next/head'

const SinglePost = ({post}) => {
    return(
        <div>
            <Head>
                <title>Post</title>
            </Head>

        <Navbar/>
        <div className='container'>
        <Wrapper>
            <Title>{post.title}</Title>
            <SubTitle>{post.body}</SubTitle>
        </Wrapper>
        </div>
        </div>
    )
    }


const Wrapper = styled.div`
background: #FFF;
border-radius: 10px;
padding: 20px 25px;
margin: 50px;
`

const Title = styled.h1`
color: black;
text-align: center;
`

const SubTitle = styled.p`
color: black;
text-align: center;
`

export const getServerSideProps = async({query}) => {

    const data = await fetch(`https://simple-blog-api.crew.red/posts/${query.id}`)
    const post = await data.json()

    return  {
        props: {post},
    }
}
export default SinglePost