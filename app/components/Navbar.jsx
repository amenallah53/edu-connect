import React from 'react'
import { BookOpen,Funnel } from 'lucide-react';
import CustomSearchBar from './CustomSearchBar';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='py-3 bg-white shadow-[0_1px_2px_0_var(--color-border)]'>
        <nav className='flex flex-row justify-evenly items-center'>
            <Link href="#">
                <div className='flex items-center gap-3 hover:cursor-pointer'>
                    <div className='my-gradient w-10 h-10 rounded-lg flex justify-center items-center'>
                        <BookOpen className="h-6 w-6 text-[var(--color-primary-foreground)]" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='my-gradient-text text-xl font-bold'>EduConnect</h1>
                        <small className='text-[var(--muted-foreground)]'>Discover Your School Community</small>
                    </div>
                </div>
            </Link>
            <div className='flex flex-row gap-3 items-center'>
                <CustomSearchBar/>
                <div className='w-10 h-10 border border-[var(--color-border)] rounded-full 
                flex justify-center items-center hover:cursor-pointer hover:border-[var(--color-muted)]'>
                    <Funnel className="h-4 w-4 text-[var(--color-foreground)]"/>
                </div>
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button className="w-[100px] text-[var(--color-foreground)] 
                    hover:cursor-pointer hover:shadow-[0_1px_2px_0_var(--color-border)]" variant="secondary">Sign In</Button>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button className="my-gradient w-[100px] transform 0.5s ease-in
                    hover:cursor-pointer hover:shadow-[0_1px_2px_0_var(--color-border)] hover:translate-y-[-2px]">Join Free</Button>
                </div>
            </div>
        </nav>
    </header>
  )
}
