import React from 'react'

const List = ({data,index}) => {
  return (
    <div>
        {data.slice(index-5,index).map(({id,name,image,age,email})=>(
            <div key={id} className='card'>
                <img src={image} alt="" />
              <div className='info'>
              <h3>{name}</h3>
                <h4>{email}</h4>
                <h4>{age}</h4>
              </div>

            </div>
        ))}
    </div>
  )
}

export default List