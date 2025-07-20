import React from 'react'
import { Button } from "@/components/ui/button";

export default function JoinSchool() {
  return (
    <section className="my-gradient px-6 py-20 md:py-25 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-6 justify-center items-center">
      <div className="text-center max-w-3xl text-[var(--color-primary-foreground)]">
        <h1 className="text-2xl font-bold md:text-4xl text-balance">
          Ready to Join Your School Community?
        </h1>
        <p className="pt-3 text-base md:text-lg">
          Connect with classmates, access learning resources, and discover everything your school has to
          offer
        </p>
      </div>

      <div className='flex flex-col gap-3 md:flex-row'>
        <Button
          className="bg-[var(--color-primary-foreground)] w-[175px] md:w-[200px] rounded-lg transition-all duration-300 ease-in-out
          hover:cursor-pointer hover:bg-white hover:bg-white"
        >
          <span className='my-gradient-text'>Find My School</span>
        </Button>
        <Button
          className="w-[175px] md:w-[200px] border-2 border-[var(--color-primary-foreground)] border-solid rounded-lg transition-all duration-300 ease-in-out
          hover:bg-[var(--color-primary-foreground)] hover:cursor-pointer hover:opacity-95 group">
          <span
            className="transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[oklch(0.65_0.28_325)] group-hover:to-[oklch(0.67_0.28_352)]
            group-hover:bg-clip-text group-hover:text-transparent">
            Request New School
          </span>
        </Button>
      </div>

    </section>
  )
}
