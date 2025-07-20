import React from 'react'
import Image from 'next/image'

export default function CategoryCard({title,number,icon,color,alt}) {
  return (
    <div className={`flex flex-col gap-2 justify-center items-center px-8 py-5 bg-[var(--color-card)]
    border border-[var(--color-border)] rounded-lg transition-all 0.5s ease-in
    hover:shadow-md hover:border-[var(--color-muted)] hover:cursor-pointer hover:scale-[1.02]`}>
        <div className={`${color} rounded-lg p-3 flex justify-center items-center`}>
            <Image src={icon} width={25} alt={alt}/>
        </div>
        <h3 className='text-sm font-semibold text-[var(--color-card-foreground)]'>{title}</h3>
        <small className='text-[var(--muted-foreground)]'>{number} schools</small>
    </div>
  )
}
