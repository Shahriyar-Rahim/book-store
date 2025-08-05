import React from 'react'

const CategoryNav = ({ categories, activeCategory, onCategoryChange  }) => {
  return (
    <div className=' p-4'>
        <nav className=' flex items-center flex-wrap space-x-8 overflow-x-auto'>
            {categories.map((cat) => (
                <button
                className={`whitespace-nowrap cursor-pointer py-2 px-1 border-b-2 text-sm font-medium transition-colors ${cat === activeCategory ? 'border-amber-500 text-amber-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                key={cat}
                onClick={() => onCategoryChange(cat)}
                >
                 {cat}
                </button>
            ))}
        </nav>
    </div>
  )
}

export default CategoryNav