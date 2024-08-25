import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciceCard from './ExerciceCard'

export default function Workout(props) {

  const {workout} = props

  return (
    <SectionWrapper id={'workout'} header={"Welcome to"} title={['The ', 'DANGER ','zone ']}>
      <div className='className flex flex-col gap-4'>
        {workout.map((exercice, i)=>{
          return (
            <ExerciceCard i={i} exercice={exercice} key={i}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
