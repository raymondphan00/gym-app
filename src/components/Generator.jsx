import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'


//Nested Component for the Header with styling
function Header(props) {
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

//Creates the Generator Component and maps out the WORKOUTS from the swoldier.js file and renders each button
export default function Generator(props) {
    const { plan, setplan, goal, setGoal, muscles, setMuscles, updateWorkout } = props
    const [showModal, setShowModal] = useState(false)

    // let showModal = false;

    function toggleModal() {
        setShowModal(!showModal)
    }


    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (plan !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }

    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>

            {/**
             * Creates the Pick your plan Section and maps out WORKOUTS from swoldier.js
             */}
            <Header index={"01"} title={"Pick your plan"} description={"Select the plan."} />  
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setplan(type)
                        }} className={'bg-slate-950 border py-3 px-4 rounded-lg duration-200 hover:border-blue-600 ' + (type === plan ? 'border-blue-600': 'border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_',' ')}</p>
                        </button>
                    )
                })}
            </div>

            {/**
             * Creates the Lock on targets section and selecting muscle groups
             */}
            <Header index={"02"} title={"Lock on targets"} description={"Select your focus."} />  
            <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>

                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(plan === 'individual' ? WORKOUTS[plan] : Object.keys(WORKOUTS[plan])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>


            <Header index={"03"} title={"Become Juggernaut"} description={"Select your objective."} />  
            <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={'bg-slate-950 border py-3 px-4 rounded-lg duration-200 hover:border-blue-600 ' + (scheme === goal ? 'border-blue-600': 'border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_',' ')}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>
    )
}
