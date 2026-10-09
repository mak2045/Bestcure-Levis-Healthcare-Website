export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-forest-800 border-t-lime-500" />
        <p className="text-sm font-medium text-forest-800">Loading...</p>
      </div>
    </div>
  );
}
