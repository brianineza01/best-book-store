export default function BookListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-seasalt flex animate-pulse flex-col overflow-hidden rounded-lg shadow-md"
        >
          <div className="bg-platinum relative h-48 w-full"></div>
          <div className="flex flex-grow flex-col justify-between p-4">
            <div>
              <div className="bg-platinum mb-2 h-6 w-3/4 rounded"></div>
              <div className="bg-platinum mb-2 h-4 w-1/2 rounded"></div>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div className="bg-platinum h-4 w-1/3 rounded"></div>
              <div className="bg-platinum h-4 w-1/4 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
