import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h3>Dc</h3>
      <hr />
      <HeroesList publisher="DC Comics" />
    </div>
  )
}
