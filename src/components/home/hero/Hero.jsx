import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title="Don't let your electronics harm the planet" subtitle='Join us in protecting the environment by properly disposing of your e-waste.' />
        </div>
      </section>
    </>
  )
}

export default Hero
