import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/* left side */}
                <div className='flex-1'>
                    <Link to="/" className='text-4xl font-bold dark:text-white'>Blog</Link>
                    <p className='text-sm mt-5'>This is a demo project. You can sign in with your email and password or with Google.</p>
                </div>
                {/* right side */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <Label value='Your username' />
                            <TextInput type='text' placeholder='username' id='username' />
                        </div>
                        <div>
                            <Label value='Your email' />
                            <TextInput type='email' placeholder='email' id='email' />
                        </div>
                        <div>
                            <Label value='Your password' />
                            <TextInput type='password' placeholder='password' id='password' />
                        </div>
                        <Button type="submit" gradientDuoTone='purpleToPink'>SignUp</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account</span>
                        <Link to="/sign-in" className='text-blue-500'>SignIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
