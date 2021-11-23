import React from 'react'

type IHeroProps = {
  title: string
  description: string
}

const Hero = (props: IHeroProps) => (
  <header className='max-w-screen-xl text-center pt-8 pb-16 px-3 mx-auto'>
    <h1 className='text-4xl text-gray-800 font-semibold'>{props.title}</h1>
    <div className='text-2xl text-gray-600 mt-1'>{props.description}</div>
  </header>
)

export { Hero }
