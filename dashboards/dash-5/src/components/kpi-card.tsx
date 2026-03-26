import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface KpiCardProps {
  title: string;
  value: string;
  helper: string;
}

export function KpiCard({ title, value, helper }: KpiCardProps) {
  return (
    <Card className="border-border/60 bg-card/80 backdrop-blur">
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{helper}</p>
      </CardContent>
    </Card>
  );
}
