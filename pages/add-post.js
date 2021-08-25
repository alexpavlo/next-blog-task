import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from "../components/navbar";
import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useRouter} from "next/router";

const AddPost = () => {
    const [title,setTitle]=useState('')
    const [body, setBody]=useState('')
    const router = useRouter()

    useEffect(()=>{
        const article = {}
    }, [])

    const newPost = async()=> {
        try {
            await axios.post('https://simple-blog-api.crew.red/posts', {title, body})
                .then(()=>router.push('/'))
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Head>
                <title>Create Some Post</title>
            </Head>
            <Navbar/>
            <div className="container">

            <Title>Create Some post </Title>
                <FormWrapper>
                    <Form onSubmit={e => e.preventDefault()}>
                        <InputField>
                            <LabelText>Name Post:
                                <InputName onChange={e => setTitle(e.target.value)}/>
                            </LabelText>
                        </InputField>

                        <InputField>
                            <LabelText>Text Post:
                                <InputText onChange={ e => setBody(e.target.value)}/>
                            </LabelText>
                        </InputField>

                        <SubmitBtn onClick={newPost}>Add post</SubmitBtn>
                    </Form>
                </FormWrapper>
            </div>
        </div>
    );
};

const Title = styled.h1`
text-align: center;
color: white;
`

const FormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: white;
`
const Form = styled.form`

`

const InputField = styled.div`

`

const LabelText = styled.label`
color: black;
margin-bottom: 10px;
`

const InputName = styled.input`

`

const InputText = styled.textarea`
// border-bottom: 1px solid black;
// outline: none;
// padding: 5px;
// border: none;
// resize: none;
// width: 200px;
// height: 150px;
`

const SubmitBtn = styled.button`
padding: 10px 17px;
background: #B6E2D3;
text-transform: uppercase;
font-size: 18px;
cursor: pointer;
border-radius: 10px;
border: none;
outline: none;
`

export default AddPost;