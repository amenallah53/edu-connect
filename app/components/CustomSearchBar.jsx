import React from 'react'
import {
  Command,
  CommandInput,
} from "@/components/ui/command"

export default function CustomSearchBar() {
    return (
        <Command
            className="border rounded-3xl hover:shadow-md w-full lg:w-[450px]
            focus-within:shadow-md focus-within:border-[var(--color-muted)] transition-all">
            <CommandInput
                className="hover:cursor-text h-11 px-4 text-sm"
                placeholder="Search schools, universities..."
            />
        </Command>
    )
}
