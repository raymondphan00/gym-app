import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"Welcome to"} title={['THE', 'DANGER', 'ZONE']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i)=> {
                    return (
                        <ExerciseCard exercise={exercise} key={i} index={i} ></ExerciseCard>
                    )
                })}
            </div>
        </SectionWrapper>

    )
}
