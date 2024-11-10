import React from 'react'
import { useParams } from 'react-router'

const MovieDetail = () => {
    const {id} = useParams()
  return (
    <div>movieDetail with the params = {id}</div>
  )
}

export default MovieDetail
