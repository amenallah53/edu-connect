import React from 'react'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ExploreSection() {
  return (
    <section className="px-6 py-20 md:py-25 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-6 justify-center items-center">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold md:text-6xl text-[var(--color-foreground)] text-balance">
          Find Your
        </h1>
        <h1 className="my-gradient-text text-4xl font-bold md:text-6xl text-balance">
          School Universe
        </h1>
        <p className="pt-3 text-base md:text-lg text-[var(--muted-foreground)]">
          Connect with your school community, discover learning resources, and
          shop campus essentials all in one place
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-[var(--muted-foreground)]">
        <small>
          <b className="text-[var(--purple-color)]">1,247</b> Schools
        </small>
        <small>
          <b className="text-[var(--pinky-color)]">89k+</b> Students
        </small>
        <small>
          <b className="text-[var(--blue-color)]">15k+</b> Resources
        </small>
      </div>

      <Button
        className="my-gradient w-[175px] md:w-[200px] rounded-4xl transition-all duration-300 ease-in-out
        hover:cursor-pointer hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:opacity-95
        active:scale-[0.97] active:shadow-sm
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-border)]
        flex items-center justify-center group"
      >
        <span>Explore Schools</span>
        <ArrowRight
          className="ml-2 relative top-[1px] w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Button>

    </section>
  )
}
