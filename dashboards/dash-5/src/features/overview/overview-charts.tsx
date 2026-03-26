"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DailyActivityPoint, PlanPoint, WorkoutTypePoint } from "@/types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface OverviewChartsProps {
  dailyActivity: DailyActivityPoint[];
  workoutTypes: WorkoutTypePoint[];
  plans: PlanPoint[];
}

const pieColors = ["var(--color-chart-1)", "var(--color-chart-3)"];

export function OverviewCharts({
  dailyActivity,
  workoutTypes,
  plans,
}: OverviewChartsProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="border-border/60 bg-card/80 lg:col-span-2">
        <CardHeader>
          <CardTitle>Aktivnosti po danima</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%" minHeight={240}>
            <LineChart data={dailyActivity}>
              <CartesianGrid
                stroke="var(--color-border)"
                strokeDasharray="3 3"
              />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  background: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                  color: "var(--color-popover-foreground)",
                }}
              />
              <Line
                type="monotone"
                dataKey="workouts"
                stroke="var(--color-primary)"
                strokeWidth={3}
                dot={{ r: 4, fill: "var(--color-primary)" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-border/60 bg-card/80">
        <CardHeader>
          <CardTitle>Tipovi treninga</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%" minHeight={240}>
            <BarChart data={workoutTypes}>
              <CartesianGrid
                stroke="var(--color-border)"
                strokeDasharray="3 3"
              />
              <XAxis dataKey="type" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  background: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                }}
              />
              <Bar
                dataKey="total"
                fill="var(--color-chart-2)"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-border/60 bg-card/80">
        <CardHeader>
          <CardTitle>Distribucija planova</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%" minHeight={240}>
            <PieChart>
              <Tooltip
                contentStyle={{
                  background: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                }}
              />
              <Pie
                data={plans}
                dataKey="users"
                nameKey="plan"
                innerRadius={55}
                outerRadius={95}
                paddingAngle={4}
              >
                {plans.map((entry, index) => (
                  <Cell
                    key={entry.plan}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
