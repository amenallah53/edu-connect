import React from 'react'
import CategoryCard from '../components/CategoryCard'
/* icon images imports */
import BookImg from '../assets/images/book.png'
import GraduationHatImg from '../assets/images/graduation-hat.png'
import LaptopImg from '../assets/images/laptop.png'
import PaletteImg from '../assets/images/palette.png'
import ResearchImg from '../assets/images/research-and-development.png'
import SchoolImg from '../assets/images/school.png'

export default function CategorySchools() {
  return (
    <section className='bg-white py-10 px-10 flex flex-col justify-center items-center gap-8'>
      <h1 className='text-lg font-bold md:text-xl text-[var(--color-foreground)]'>
        Browse by Category
      </h1>
      <div className='grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6'>
        <CategoryCard 
          title="Universities" 
          number="1.2k" 
          icon={GraduationHatImg} 
          color="bg-[var(--purple-color)]"
          alt="university icon" />
        <CategoryCard 
          title="High Schools" 
          number="3.4k" 
          icon={SchoolImg} 
          color="bg-[var(--blue-color)]"
          alt="high school icon" />
        <CategoryCard 
          title="Colleges" 
          number="890" 
          icon={BookImg} 
          color="bg-[var(--green-color)]"
          alt="college icon" />
        <CategoryCard 
          title="Institutes" 
          number="567" 
          icon={ResearchImg} 
          color="bg-[var(--orange-color)]"
          alt="institutes icon" />
        <CategoryCard 
          title="Art Schools" 
          number="234" 
          icon={PaletteImg} 
          color="bg-[var(--pinky-color)]"
          alt="art schools icon" />
        <CategoryCard 
          title="Tech Schools" 
          number="445" 
          icon={LaptopImg} 
          color="bg-[var(--blue-violet-color)]"
          alt="tech schools icon" />
      </div>
    </section>
  )
}
