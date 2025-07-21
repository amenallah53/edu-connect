import React from 'react'
import { Button } from '@/components/ui/button'
import FeaturedSchoolsCard from '../components/FeaturedSchoolsCard'

// List of schools
const featuredSchoolsList = [
  {
    schoolName: 'Riverside High',
    typeSchool: 'High School',
    location: 'Riverside, CA',
    numberStudents: '2,340',
    rating: '4.6',
    specialities: ['Sports', 'Drama Club', 'Science Lab'],
    isTrending: false,
  },
  {
    schoolName: 'MIT',
    typeSchool: 'Institute',
    location: 'Cambridge, MA',
    numberStudents: '11,934',
    rating: '4.9',
    specialities: ['Tech Innovation', 'Research', 'AI'],
    isTrending: true,
  },
  {
    schoolName: 'Art Institute of Chicago',
    typeSchool: 'Art School',
    location: 'Chicago, IL',
    numberStudents: '3,456',
    rating: '4.8',
    specialities: ['Digital Art', 'Exhibitions', 'Design'],
    isTrending: false,
  },
  {
    schoolName: 'Stanford University',
    typeSchool: 'University',
    location: 'Stanford, CA',
    numberStudents: '17,249',
    rating: '4.9',
    specialities: ['AI Research', 'Startup Hub', 'Entrepreneurship'],
    isTrending: true,
  },
];

export default function FeaturedSchools() {
  return (
    <section className='py-10 px-10 md:px-20 lg:px-25 flex flex-col gap-10 items-center justify-center'>
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold md:text-xl text-[var(--color-foreground)]'>
            Featured Schools
          </h1>
          <small className='text-[var(--muted-foreground)]'>Discover amazing school communities</small>
        </div>
        <Button variant="outline" 
          className='text-[var(--color-foreground)] transition-all duration-0.5s ease-in
          hover:cursor-pointer hover:shadow-md hover:bg-white hover:-translate-y-[2px]
          active:translate-y-[2px] active:bg-transparent'>
          View All
        </Button>
      </div>
      <div className='w-full grid gap-4 md:gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {featuredSchoolsList.map((school, index) => (
          <FeaturedSchoolsCard
            key={index}
            schoolName={school.schoolName}
            typeSchool={school.typeSchool}
            location={school.location}
            numberStudents={school.numberStudents}
            rating={school.rating}
            specialities={school.specialities}
            isTrending={school.isTrending}
          />
        ))}
      </div>
    </section>
  )
}
