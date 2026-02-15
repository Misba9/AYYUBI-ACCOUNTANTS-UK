export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-sm text-slate-500 dark:text-slate-400 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
