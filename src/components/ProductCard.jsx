
import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="w-72 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

      {/* Image */}
      <div className="h-64 bg-gray-50 flex items-center justify-center p-6">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-5">

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {product.title}
        </h2>

        {/* Price */}
        <p className="mt-2 text-xl font-bold text-gray-900">
          ${product.price}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-5">

          {/* Quantity */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button className="w-9 h-9 text-lg hover:bg-gray-100">
              −
            </button>

            <span className="w-9 text-center font-medium">
              1
            </span>

            <button className="w-9 h-9 text-lg hover:bg-gray-100">
              +
            </button>
          </div>

          {/* Add To Cart */}
          <button className="bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  )
}

export default ProductCard

