import React from 'react'

// import components
import Projects from '../components/Projects'
import ClientProjects from './ClientProjects'

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>My personal work</h2>
                <p className='subtitle text-sky-300'>I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please <a href="#contact" className='text-orange-500'>contact me!</a> </p>
            </div>
            <Projects />
        </div>
        {/* <div className="container mx-auto pt-20">
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>Clients work</h2>
                <p className='subtitle text-sky-300'>I also work various different clients projects to fit different aspects of the client's business. If you want to see more examples of my clients work than the ones showcased in this site, please <a href="#contact" className='text-orange-500'>contact me!</a> </p>
            </div>
            <ClientProjects />
        </div> */}
    </section>
  )
}

export default Portfolio