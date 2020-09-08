import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h3>Marvel</h3>
      <hr />
      <HeroesList publisher="Marvel Comics" />
    </div>
  )
}
