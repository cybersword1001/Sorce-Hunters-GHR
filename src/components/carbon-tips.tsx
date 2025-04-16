import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Home, Leaf, ShoppingBag, Utensils } from "lucide-react"

export function CarbonTips() {
  const tips = [
    {
      id: 1,
      category: "transportation",
      title: "Use Public Transportation",
      description:
        "Taking public transportation can reduce your carbon footprint by up to 30% compared to driving alone.",
      impact: "High",
    },
    {
      id: 2,
      category: "energy",
      title: "Switch to LED Bulbs",
      description: "LED bulbs use up to 90% less energy than incandescent bulbs and last up to 25 times longer.",
      impact: "Medium",
    },
    {
      id: 3,
      category: "food",
      title: "Eat Less Red Meat",
      description: "Reducing red meat consumption even one day per week can significantly lower your footprint.",
      impact: "High",
    },
    {
      id: 4,
      category: "shopping",
      title: "Buy Second-Hand",
      description: "Buying second-hand items extends product life and prevents additional manufacturing emissions.",
      impact: "Medium",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "transportation":
        return <Car className="h-4 w-4 text-blue-500" />
      case "energy":
        return <Home className="h-4 w-4 text-yellow-500" />
      case "food":
        return <Utensils className="h-4 w-4 text-green-500" />
      case "shopping":
        return <ShoppingBag className="h-4 w-4 text-purple-500" />
      default:
        return null
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {tips.map((tip) => (
            <div key={tip.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
              <div className="mt-1">{getCategoryIcon(tip.category)}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{tip.title}</div>
                  <Badge variant="secondary" className={getImpactColor(tip.impact)}>
                    {tip.impact} Impact
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">{tip.description}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Leaf className="mr-1 h-3 w-3 text-green-500" />
                  Try this to reduce your footprint
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
