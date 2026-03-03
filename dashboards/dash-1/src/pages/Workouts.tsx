import { workouts } from "../data/mock";

const Workouts = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Workouts</h1>

      <div className="space-y-4">
        {workouts.map((w) => (
          <div key={w.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{w.user}</div>
                <div className="text-sm text-slate-500">
                  {w.type} • {w.duration} min • {w.calories} kcal
                </div>
              </div>
              <div className="text-sm text-slate-500">
                {w.date} • {w.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
