import React from 'react'

const List = ({data,index}) => {
  return (
    <div className='cards'>
        {data.slice(index,index+5).map(({id,name,image,age,email})=>(
            <div key={id} className='card'>
                <img src={image} alt="" />
              <div className='info'>
              <h3>{name}</h3>
                <h5>{email}</h5>
                <h5>{age}</h5>
              </div>

            </div>
        ))}
    </div>
  )
}

export default List