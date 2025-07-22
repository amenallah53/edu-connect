import React from 'react'
import TrendingSchoolsCard from '../components/TrendingSchoolsCard';

export default function TrendingSchools() {
  // List of schools
const trendingSchoolsList = [
  {
    schoolName: 'Berkeley',
    location: 'Berkeley, CA',
    numberStudents: '45057',
    rating: '4.7',
    trendingStatus: 'Most active',
  },
  {
    schoolName: 'NYU',
    location: 'New York, NY',
    numberStudents: '51848',
    rating: '4.6',
    trendingStatus: 'Top rated',
  },
  {
    schoolName: 'UCLA',
    location: 'Los Angeles, CA',
    numberStudents: '47518',
    rating: '4.8',
    trendingStatus: 'Rising Star',
  },
];
  return (
    <section className='bg-white py-10 px-10 md:px-20 lg:px-25 flex flex-col gap-10 items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-lg font-bold md:text-xl text-[var(--color-foreground)]'>
          Trending This Week
        </h1>
        <small className='text-[var(--muted-foreground)]'>
          Most active school communities
        </small>
      </div>
      <div className='w-full grid gap-4 md:gap-6 lg:gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        {trendingSchoolsList.map((school, index) => (
                  <TrendingSchoolsCard
                    key={index}
                    schoolName={school.schoolName}
                    location={school.location}
                    numberStudents={school.numberStudents}
                    rating={school.rating}
                    trendingStatus={school.trendingStatus}
                  />
                ))}
      </div>

    </section>
  )
}
