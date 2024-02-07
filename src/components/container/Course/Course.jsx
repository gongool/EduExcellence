import React from 'react'

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className='p-2 shadow-lg min-w-[15rem] bg-white rounded-md'>
      <img src={image} alt="Course's Images" />
      <div>{category}</div>
      <div>{title}</div>

    </div>
  )
}

export default Course