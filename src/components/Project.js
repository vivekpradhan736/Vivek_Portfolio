import React from 'react'

const Project = ({ item }) => {
  return (
    <div className='bg-gray-900 rounded-2xl hover:bg-[#121431] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] duration-200'>
      <div key={item.id} className='flex flex-col p-4 items-center text-center'>
        <div className="text">
          <img className='rounded-2xl' src={item.image} alt="" />
        <p className='capitalize text-accent p-1 text-sm mb-3' >{item.category}</p>
        <h3 className='text-2xl font-extrabold capitalize mb-3 underline' >{item.name}</h3>
        <p className='pt-4 pl-3 md:pt-1 md:pb-4 max-w-[480px] text-lg text-center lg:text-left text-slate-300'>{item.desc}</p>
        <p className='pt-4 pl-3 md:pt-1 md:pb-4 max-w-[480px] md:block font-medium tracking-widest text-lg text-center lg:text-left text-teal-400'>{item.technology}</p>
        <div className='flex pl-4  text-accent'>
          <a title='code' className='text-3xl group-hover:opacity-50 grow h-14  cursor-pointer' alt="hello" href={item.gitHref}>
            {item.icon}
          </a>
          <a  className='text-2xl grow h-14 font-bold  cursor-pointer' href={item.figmaHref}>
            {item.figma}
          </a>
          <a title='Live' className='text-2xl grow h-14 font-bold  cursor-pointer' href={item.demoHref}>
            {item.demo}
          </a>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Project