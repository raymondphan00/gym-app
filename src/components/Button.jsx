import React from 'react'

//Custom Button and styling for Begin and Formulate buttons
export default function Button(props) {
    const { text, func } = props

  return (
    <button onClick={func} className='px-6 mx-auto py-2 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'><p>{text}</p></button>
)
}
