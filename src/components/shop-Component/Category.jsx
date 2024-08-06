import React from 'react'
import CategoryItems from './CategoryItems'

export default function Category(props) {
    const items = props.items
    console.log(items)
  return (
    <div className='mb-8'>
          <h2 className='text-[20px] font-semibold'>{items.title }</h2>
          <main className='grid grid-cols-2 md:grid-cols-4'>
              {
                  items.items.map(product => (
                      <CategoryItems key={product.id} product={ product} />
                  ))
              }
          </main>
    </div>
  )
}
