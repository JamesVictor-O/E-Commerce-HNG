import React from 'react'
import CategoryItems from './CategoryItems'

export default function Category(props) {
    const items = props.items
  return (
    <div className='mb-8'>
          <h2 className='text-[30px] md:text-[40px] font-semibold md:ml-4 mb-6 underline font-serif'>{items.title }</h2>
          <main className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
              {
                  items.items.map(product => (
                      <CategoryItems key={product.id} product={ product} />
                  ))
              }
          </main>
    </div>
  )
}
