import React from 'react'
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import { useProductApi } from '../hooks/productHooks';


const Shop = () => {

let {isPending , data , error} = useProductApi();

 

if (isPending) {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">

      {/* Page Heading Skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="h-8 w-40 bg-gray-200 rounded-lg"></div>
        <div className="h-4 w-64 bg-gray-200 rounded-md mt-3"></div>
      </div>

      {/* Product Skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="animate-[fadeIn_0.5s_ease-out]"
            style={{
              animationDelay: `${index * 80}ms`,
              animationFillMode: 'both'
            }}
          >
            <ProductSkeleton />
          </div>
        ))}

      </div>

    </div>
  )
}


  return (
    <div>
       <div className='grid grid-cols-5 gap-2'>
            {data.map((product) => {
                return <ProductCard product = {product} key={product.id}/>
            })}
       </div>
    </div>
  )
}

export default Shop