"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SubscriptionPlan, User } from "@/types";

interface SubscriptionPlansProps {
  users: User[];
  onPlanChange: (userId: string, plan: SubscriptionPlan) => void;
}

export function SubscriptionPlans({
  users,
  onPlanChange,
}: SubscriptionPlansProps) {
  const freeUsers = users.filter((user) => user.plan === "Free");
  const proUsers = users.filter((user) => user.plan === "Pro");

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="border-border/60 bg-card/80">
        <CardHeader>
          <CardTitle>Free plan</CardTitle>
          <CardDescription>
            Osnovne funkcionalnosti i limitirani analiticki uvidi.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Badge variant="outline">Korisnika: {freeUsers.length}</Badge>
          <div className="space-y-2">
            {freeUsers.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2 text-sm"
              >
                <span>{user.name}</span>
                <Button size="sm" onClick={() => onPlanChange(user.id, "Pro")}>
                  Upgrade
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 bg-card/80">
        <CardHeader>
          <CardTitle>Pro plan</CardTitle>
          <CardDescription>
            Napredna analitika, prioritetna podrška i dodatni izveštaji.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Badge variant="outline">Korisnika: {proUsers.length}</Badge>
          <div className="space-y-2">
            {proUsers.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2 text-sm"
              >
                <span>{user.name}</span>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => onPlanChange(user.id, "Free")}
                >
                  Downgrade
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
