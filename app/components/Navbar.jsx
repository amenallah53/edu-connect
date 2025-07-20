import React from 'react'
import { BookOpen, Funnel } from 'lucide-react'
import CustomSearchBar from './CustomSearchBar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="py-3 px-4 bg-white shadow-[0_1px_2px_0_var(--color-border)] sticky top-0 z-50">
            <nav className="flex flex-wrap items-center gap-4 justify-between lg:justify-evenly">
                
                {/* Logo & Brand */}
                <Link href="#" className="flex items-center gap-3 shrink-0">
                    <div className="my-gradient w-9 h-9 md:w-10 md:h-10 rounded-lg flex justify-center items-center">
                        <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-primary-foreground)]" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="my-gradient-text text-base font-semibold md:text-xl md:font-bold leading-tight">
                            EduConnect
                        </h1>
                        <small className="text-xs text-[var(--muted-foreground)]">
                            Discover Your School Community
                        </small>
                    </div>
                </Link>

                {/* Search + Filter */}
                <div className="flex items-center gap-3 max-md:flex-1 min-w-0 justify-center">
                    <div className="w-full max-w-[450px]">
                        <CustomSearchBar />
                    </div>
                    <div className="hidden sm:flex w-10 h-10 border border-[var(--color-border)] rounded-full 
                        justify-center items-center hover:border-[var(--color-muted)] cursor-pointer">
                        <Funnel className="w-4 h-4 text-[var(--color-foreground)]" />
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex gap-2 items-center shrink-0">
                    <Button
                        className="w-[80px] md:w-[100px] text-[var(--color-foreground)] 
                        hover:shadow-[0_1px_2px_0_var(--color-border)] hover:cursor-pointer"
                        variant="ghost">
                        Sign In
                    </Button>
                    <Button
                        className="my-gradient w-[80px] md:w-[100px] transition-transform duration-300 
                        hover:-translate-y-1 hover:shadow-[0_1px_2px_0_var(--color-border)] hover:cursor-pointer
                        active:translate-y-1">
                        Join Free
                    </Button>
                </div>
            </nav>
        </header>
    )
}
