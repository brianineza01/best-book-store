export default function Loading() {
  return (
    <div className="container px-4 py-8">
      <div className="mb-8 h-9 w-48 animate-pulse rounded-md bg-gray-200" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex animate-pulse flex-col overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="relative h-48 w-full bg-gray-300" />
            <div className="flex flex-grow flex-col justify-between p-4">
              <div>
                <div className="mb-2 h-6 w-3/4 rounded bg-gray-300" />
                <div className="mb-2 h-4 w-1/2 rounded bg-gray-300" />
              </div>
              <div className="mt-2 flex items-end justify-between">
                <div className="h-4 w-1/3 rounded bg-gray-300" />
                <div className="h-4 w-1/4 rounded bg-gray-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
