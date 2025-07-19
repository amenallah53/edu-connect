import React from 'react'
import {
  Command,
  CommandInput,
} from "@/components/ui/command"

export default function CustomSearchBar() {
  return (
    <Command className="border rounded-3xl hover:shadow-md md:w-[450px] 
    focus-within:shadow-md focus-within:border-[var(--color-muted)]">
        <CommandInput
            className="hover:cursor-text h-12 px-4"
            placeholder="Search schools, universities..."
        />
    </Command>

  )
}
