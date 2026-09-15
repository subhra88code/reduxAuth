import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className="w-72 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm animate-pulse">

      {/* Image Skeleton */}
      <div className="h-64 bg-gray-200"></div>

      {/* Details */}
      <div className="p-5">

        {/* Product Name */}
        <div className="h-5 bg-gray-200 rounded-md w-4/5"></div>

        {/* Price */}
        <div className="h-6 bg-gray-200 rounded-md w-20 mt-3"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-5">

          {/* Quantity */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <div className="w-9 h-9 bg-gray-200"></div>
            <div className="w-9 h-9 bg-gray-100"></div>
            <div className="w-9 h-9 bg-gray-200"></div>
          </div>

          {/* Add To Cart */}
          <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>

        </div>

      </div>

    </div>
  )
}

export default ProductSkeleton

