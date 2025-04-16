"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CarbonChart } from "@/components/carbon-chart"
import { CarbonBreakdown } from "@/components/carbon-breakdown"
import { CarbonComparison } from "@/components/carbon-comparison"
import { Download, Share } from "lucide-react"

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Carbon Reports</h1>
          <p className="text-muted-foreground">Analyze your carbon footprint over time</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last 7 days</SelectItem>
              <SelectItem value="month">Last 30 days</SelectItem>
              <SelectItem value="year">Last 12 months</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Carbon Footprint</CardTitle>
            <CardDescription>CO₂ equivalent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248 kg</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↓ 12%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
            <CardDescription>CO₂ equivalent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.2 kg</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↓ 8%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Carbon Intensity</CardTitle>
            <CardDescription>Per activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">High</div>
            <p className="text-xs text-muted-foreground">Transportation is your highest impact category</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint Over Time</CardTitle>
              <CardDescription>Track how your carbon emissions have changed</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <CarbonChart timeRange={timeRange} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="breakdown">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint Breakdown</CardTitle>
              <CardDescription>See which activities contribute most to your footprint</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <CarbonBreakdown timeRange={timeRange} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Comparison</CardTitle>
              <CardDescription>See how your footprint compares to averages</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <CarbonComparison timeRange={timeRange} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
