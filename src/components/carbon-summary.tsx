"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { getCarbonSummary } from "@/lib/carbon-calculations";

export function CarbonSummary() {
  const [summary, setSummary] = useState({
    total: 0,
    goal: 1000,
    progress: 0,
    breakdown: {
      transportation: 0,
      energy: 0,
      food: 0,
      shopping: 0,
    },
  });

  useEffect(() => {
    const data = getCarbonSummary();
    setSummary(data);
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Carbon Footprint Summary</CardTitle>
        <CardDescription>Your current carbon impact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Monthly Carbon Footprint</div>
            <div className="text-sm text-muted-foreground">
              {summary.total} kg of {summary.goal} kg CO₂e
            </div>
          </div>
          <Progress value={summary.progress} className="h-2" />
        </div>

        <div className="space-y-4">
          {/* Transportation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Transportation</div>
              <div className="text-sm text-muted-foreground">
                {summary.breakdown.transportation} kg CO₂e
              </div>
            </div>
            <Progress
              value={(summary.breakdown.transportation / summary.goal) * 100}
              className="h-1.5 bg-blue-500"
            />
          </div>

          {/* Home Energy */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Home Energy</div>
              <div className="text-sm text-muted-foreground">
                {summary.breakdown.energy} kg CO₂e
              </div>
            </div>
            <Progress
              value={(summary.breakdown.energy / summary.goal) * 100}
              className="h-1.5 bg-yellow-500"
            />
          </div>

          {/* Food */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Food</div>
              <div className="text-sm text-muted-foreground">
                {summary.breakdown.food} kg CO₂e
              </div>
            </div>
            <Progress
              value={(summary.breakdown.food / summary.goal) * 100}
              className="h-1.5 bg-green-500"
            />
          </div>

          {/* Shopping */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Shopping</div>
              <div className="text-sm text-muted-foreground">
                {summary.breakdown.shopping} kg CO₂e
              </div>
            </div>
            <Progress
              value={(summary.breakdown.shopping / summary.goal) * 100}
              className="h-1.5 bg-purple-500"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
