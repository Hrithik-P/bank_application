import React from 'react'

const Button = ({content}) => {
  return (
    <div>
        <button type='submit' className='btn btn-primary w-100 my-3 rounded'>{content}</button>
    </div>
  )
}

export default Button