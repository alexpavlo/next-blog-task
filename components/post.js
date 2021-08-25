import Link from 'next/link'
import styled from 'styled-components'
const Post = ({id, title, body}) => {
    return (
        <Posts>
            <Title>{title}</Title>
            <SubTitle>{body}</SubTitle>
            <Link href='/post/[id]' as={`/post/${id}`}>
                <Read>
                    Read
                </Read>
            </Link>
        </Posts>
    );
};

export default Post;

const Posts = styled.div`
background: white;
box-shadow: 0 3px 6 px rgba(0,0,0,.1);
border-radius: 10px;
padding: 16px;
margin: 15px;
flex-grow: 30;
`

const Title = styled.h5`
  margin: 0;
  margin-bottom: 10px;
  text-transform: capitalize;
  color: #333;
  font-size: 16px;
`

const SubTitle = styled.p`
color: #444;
font-size: 14px;
`

const Read = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
  background-color: #8FDDE7;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
`