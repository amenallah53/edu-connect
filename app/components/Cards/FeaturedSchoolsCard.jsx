'use client'
import React, { useState } from 'react'
import {MapPin, Users, Star, Heart, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FeaturedSchoolsCard({schoolName,schoolImg,typeSchool,location,numberStudents,
    rating,specialities,isTrending}) {
    const [isLiked,setIsLiked] = useState(false)
    return (
        <div className='flex flex-col rounded-lg transition-all 0.5s ease-in
            hover:shadow-md hover:border-[var(--color-muted)] hover:scale-[1.02]'>
            <div
                className={`h-[175px] rounded-t-lg p-4 flex items-start bg-cover bg-center
                    ${schoolImg ? '' : 'my-gradient'}
                    ${isTrending ? 'justify-between' : 'justify-end'}`}
                style={schoolImg ? { backgroundImage: `url(${schoolImg})` } : {}}
            >
                {/* Trending Badge */}
                <div
                    className={`flex items-center gap-1 bg-[var(--orange-color)] text-white px-3 py-1 rounded-xl ${
                        isTrending ? '' : 'hidden'
                    }`}
                >
                    <TrendingUp className='w-4 h-4' />
                    <h3 className='text-xs font-semibold'>Trending</h3>
                </div>

                {/* Heart Icon */}
                <Heart
                    onClick={() => setIsLiked(!isLiked)}
                    className='text-white w-4 h-4 cursor-pointer'
                    style={isLiked ? { fill: 'white' } : {}}
                />
            </div>

            <div className='px-4 py-2 flex flex-col justify-center items-start gap-1'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <h1 className='text-md font-semibold text-[var(--color-foreground)]'>
                        {schoolName}
                    </h1>
                    <h3 className='text-xs font-medium text-[var(--color-foreground)] 
                        border-1 border-[var(--color-border)] rounded-xl px-3 py-1 rounded'>
                        {typeSchool}
                    </h3>
                </div>
                <small className="text-[var(--color-muted)] flex justify-start items-center gap-1">
                    <MapPin className='w-3 font-normal'/>
                    {location}
                </small>
                <div className='flex justify-start items-center gap-2'>
                    <small className="text-[var(--color-muted)] flex justify-start items-center gap-1">
                        <Users className='w-3 font-normal'/>
                        {numberStudents}
                    </small>
                    <small className="text-[var(--color-muted)] flex justify-start items-center gap-1">
                        <Star className='w-3 font-normal' style={{ fill: 'gold', stroke: 'gold' }} />
                        {rating}
                    </small>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {specialities.slice(0, 2).map((speciality, index) => (
                        <h3 key={index} className='text-xs font-medium text-[var(--color-foreground)] bg-white 
                            border-1 border-[var(--color-border)] rounded-xl px-3 py-1'>
                            {speciality}
                        </h3>
                    ))}
                    {specialities.length > 2 && (
                        <h3 className='text-xs font-medium text-[var(--color-foreground)] bg-white 
                            border-1 border-[var(--color-border)] rounded-xl px-3 py-1'>
                            +{specialities.length - 2}
                        </h3>
                    )}
                </div>
                <Button 
                    className='my-gradient w-full mt-2 transition-all duration-300 
                    hover:shadow-md hover:cursor-pointer hover:opacity-90
                    active:scale-[0.95]'>
                    Explore Community
                </Button>
            </div>        
        </div>
    )
}
