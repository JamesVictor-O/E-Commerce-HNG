import React from 'react'
import CategoryItems from './CategoryItems'

export default function Category(props) {
    const items = props.items
  return (
    <div className='mb-8 w-full px-4'>
          <h2 className='text-[30px] md:text-[40px] font-semibold md:ml-4 mb-6 underline font-serif'>{items.title }</h2>
          <main className='w-full grid  grid-cols-2 md:grid-cols-3 lg:gap-1 lg:grid-cols-4 gap-2 md:gap-0 '>
              {
                  items.items.map(product => (
                    <CategoryItems key={product.id} product={product} setDisplayitemId={props.setDisplayitemId } />
                  ))
              }
          </main>
    </div>
  )
}
