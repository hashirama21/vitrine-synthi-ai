'use client';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const FilterBar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-6 py-3 rounded-full border transition-all duration-300 ${
          selectedCategory === null
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/25'
            : 'border-indigo-500/30 text-indigo-300 hover:border-indigo-400/50 hover:text-indigo-200'
        }`}
      >
        All Solutions
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full border transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/25'
              : 'border-indigo-500/30 text-indigo-300 hover:border-indigo-400/50 hover:text-indigo-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;