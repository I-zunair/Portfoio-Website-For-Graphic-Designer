import React from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <a href="/public/3.jpg" download="3.jpg" target='_blank'>
              <button type="button" class="btn btn-success btn-lg btn-block">Download Resume</button>
            </a>


            {/* <button className='primaryBtn' download="/public/3.jpg" data-aos='fade-up-right'>
              Download CV
            </button> */}
          </div>
        ))}
      </section>
    </>
  )
}
