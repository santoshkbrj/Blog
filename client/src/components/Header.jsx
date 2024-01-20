import React from 'react'
import { Navbar, TextInput, Button } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
    const Path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>Blog</Link>
            <form>
                <TextInput type='text' placeholder='search..' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill><AiOutlineSearch /></Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to="/sign-in">
                    <Button gradientDuoTone='purpleToBlue' pill outline>SignIn</Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={Path === "/"} as={'div'}>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link active={Path === "/about"} as={'div'}>
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link active={Path === "/projects"} as={'div'}>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
