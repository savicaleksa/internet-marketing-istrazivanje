"use client";

import { SubscriptionPlans } from "@/features/plans/subscription-plans";
import { useUsers } from "@/hooks/use-users";

export default function SubscriptionPlansPage() {
  const { allUsers, setUserPlan } = useUsers();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-heading text-2xl font-bold">Subscription plans</h1>
        <p className="text-sm text-muted-foreground">
          UI simulacija upgrade i downgrade akcija bez backend integracije.
        </p>
      </div>

      <SubscriptionPlans users={allUsers} onPlanChange={setUserPlan} />
    </div>
  );
}
