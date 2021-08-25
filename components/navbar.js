import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'


const Navbar = () => {
    return (
        <Nav>
            <div className="container">
                <NavbarItems>
                    <Link href='/'>
                        <Logo>
                            <Image src='/logo.svg' alt='Logo' width={50} height={35}/>
                            Simple blog
                        </Logo>
                    </Link>

                    <Link href='/add-post'>
                        <AddPost>
                            Create post
                        </AddPost>
                    </Link>

                    <Link href='/'>
                        <Home>
                            Home
                        </Home>
                    </Link>
                </NavbarItems>
            </div>

        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
padding: 17px 0;
background: #FAE8E0;
`

const NavbarItems = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.a`
text-decoration:none;
color: black;
text-transform: uppercase;
cursor: pointer;
display: flex;
align-items: center;
`

const AddPost = styled.a`
padding: 10px 17px;
background: #B6E2D3;
text-transform: uppercase;
font-size: 18px;
cursor: pointer;
border-radius: 10px;
border: none;
outline: none;
`

const Home = styled.a`
text-decoration:none;
color: black;
text-transform: uppercase;
cursor: pointer;
`