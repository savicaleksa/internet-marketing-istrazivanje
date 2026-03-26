import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Select } from "../components/Select";
import { mockPlans } from "../features/data/mockData";

export function SubscriptionPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<"Free" | "Pro">("Free");

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold">Subscription Plans</h2>
        <p className="theme-text-muted text-sm">
          UI simulation for plan distribution and upgrade flow.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {mockPlans.map((plan) => (
          <Card
            key={plan.id}
            title={`${plan.id} plan`}
            subtitle={`${plan.userCount} users`}
            className={plan.id === selectedPlan ? "ring-2 ring-sky-500" : ""}
          >
            <p className="mb-4 text-3xl font-bold">
              {plan.monthlyPrice === 0 ? "Free" : `${plan.monthlyPrice} USD/mo`}
            </p>
            <ul className="theme-text-secondary space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card title="Upgrade / Downgrade Simulation">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <Select
            id="plan-select"
            label="Select target plan"
            value={selectedPlan}
            onChange={(event) =>
              setSelectedPlan(event.target.value as "Free" | "Pro")
            }
            options={[
              { value: "Free", label: "Free" },
              { value: "Pro", label: "Pro" },
            ]}
          />
          <Button variant="secondary">Apply Plan Change</Button>
        </div>
      </Card>
    </div>
  );
}
