export default function Overview({ counts }: any) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
          <div className="text-sm text-slate-500">Total Users</div>
          <div className="text-2xl font-bold">{counts.totalUsers}</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
          <div className="text-sm text-slate-500">Total Workouts</div>
          <div className="text-2xl font-bold">{counts.totalWorkouts}</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
          <div className="text-sm text-slate-500">Active Plans (sample)</div>
          <div className="text-2xl font-bold">Pro / Free</div>
        </div>
      </div>
    </div>
  );
}
