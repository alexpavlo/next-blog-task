import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Post from "../components/post";
import styled from 'styled-components'


export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Simple Blog</title>
      </Head>

        <Navbar />
        <div className="container">
            <Name>
                Latest Post
            </Name>
            <Blog>
                {posts.map(post=> <Post key={post.id} title={post.title} body={post.body} id={post.id}/>)}
            </Blog>
        </div>
    </div>
  )
}

const Name = styled.h1`
text-align: center;
color: #FFF;
`

const Blog = styled.div`
display: flex;
flex-wrap:wrap;
flex-grow: 30;
`

export const getServerSideProps = async() => {

    const data = await fetch(`https://simple-blog-api.crew.red/posts`)
    const posts = await data.json()

    return  {
        props: {posts},
    }
}
