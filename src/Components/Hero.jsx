import React from 'react'
import data from './data'
import Projects from './Projects'

export default function Hero() {

    let project = data.map(pro =>
        <Projects
            key={pro.id}
            {...pro}
        />
    )

    return (
        <>
            {project}
        </>
    )



}