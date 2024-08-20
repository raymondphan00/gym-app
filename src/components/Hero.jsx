import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'></div>

        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl mid:text-6xlxl lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
        <p className='text-sm mid:text-base font-light'>I hereby acknowledgment that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosisty</span> afflicted with severe body dismorphia, unable to fit through doors.</p>
        <Button func={() => {
            window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}
