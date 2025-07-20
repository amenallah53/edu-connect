import React from 'react'
import {Copyright} from 'lucide-react'

export default function Footer() {
    return (
        <footer className="px-25 flex flex-col w-full h-min-[250px] bg-[var(--color-secondary)]">
            <div className="py-8 grid grid-cols-2 gap-8 items-center justify-center border-b border-[var(--color-muted)] 
            md:flex md:flex-row md:justify-start md:gap-25 lg:gap-60">
                <div className='flex flex-col gap-3'>
                    <h3 className='text-md font-bold text-[var(--color-secondary-foreground)]'>Platform</h3>
                    <ul className='text-[var(--color-secondary-foreground)]'>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>How it works</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>For Schools</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>For Students</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>For Teachers</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-md font-bold text-[var(--color-secondary-foreground)]'>Community</h3>
                    <ul className='text-[var(--color-secondary-foreground)]'>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Guidelines</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Safety</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Support</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Blog</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-md font-bold text-[var(--color-secondary-foreground)]'>Resources</h3>
                    <ul className='text-[var(--color-secondary-foreground)]'>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Help Center</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>API</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Developers</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Partners</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-md font-bold text-[var(--color-secondary-foreground)]'>Company</h3>
                    <ul className='text-[var(--color-secondary-foreground)]'>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>About</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Careers</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Press</li>
                        <li className='pb-1 hover:text-white hover:cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='py-8'>
                <p className='font-small text-center text-[var(--color-secondary-foreground)]'><span><Copyright className='inline-block w-3 text-[var(--color-secondary-foreground)]'/></span> 2024 EduConnect. All rights reserved.</p>
            </div>
        </footer>
    );
}
