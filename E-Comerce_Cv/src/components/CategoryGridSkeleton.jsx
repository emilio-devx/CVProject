export function CategoryGridSkeleton() {
  return (
    <div className="bg-white grid grid-cols-2 p-8 gap-3 w-full lg:w-1/3 animate-pulse">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="overflow-hidden">
          <div className="h-32 sm:h-45 bg-gray-300"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
        </div>
      ))}

      <div className="h-4 bg-gray-300 rounded w-16"></div>
    </div>
  )
}