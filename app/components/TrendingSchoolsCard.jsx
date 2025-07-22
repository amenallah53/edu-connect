import React from 'react'
import {MapPin, Users, Star, TrendingUp } from 'lucide-react'

export default function TrendingSchoolsCard({schoolName,location,numberStudents,
    rating,trendingStatus}) {
    return (
        <div className='flex flex-col rounded-lg transition-all 0.5s ease-in group
            hover:shadow-md hover:border-[var(--color-muted)] hover:cursor-pointer hover:scale-[1.02]'>
            <div className='bg-[var(--color-muted)] h-[100px] rounded-t-lg p-4 flex items-start justify-between'>
                <div className={` ${trendingStatus === 'Most active' ? 'bg-[var(--purple-color)]' : trendingStatus === 'Top rated' ? 'bg-[var(--blue-color)]' : 'bg-[var(--green-color)]'} 
                flex items-center gap-1 text-white px-3 py-1 rounded-xl`}>
                    <TrendingUp className='w-4 h-4' />
                    <h3 className='text-xs font-semibold'>{trendingStatus}</h3>
                </div>
            </div>
            <div className='border-1 border-[var(--color-border)] rounded-b-lg px-4 py-2 flex flex-col justify-center items-start gap-1
            group-hover:border-[var(--color-muted)]'>
                <div className='w-full flex flex-row justify-start items-center'>
                    <h1 className='text-md font-semibold text-[var(--color-foreground)]'>
                        {schoolName}
                    </h1>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <small className="text-[var(--color-muted)] flex justify-start items-center gap-1">
                        <Users className='w-3 font-normal'/>
                        {numberStudents}
                    </small>
                    <small className="text-[var(--color-muted)] flex justify-start items-center gap-1">
                        <Star className='w-3 font-normal' style={{ fill: 'gold', stroke: 'gold' }} />
                        {rating}
                    </small>
                </div>
                <small className="text-[var(--color-muted)] flex justify-start items-center gap-1">
                    <MapPin className='w-3 font-normal'/>
                    {location}
                </small>
            </div>        
        </div>
    )
}
