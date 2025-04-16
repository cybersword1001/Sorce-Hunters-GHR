"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Home, ShoppingBag, Trash2, Utensils } from "lucide-react"
import { getActivities, deleteActivity } from "@/lib/activities"
import { format } from "date-fns"
import { useToast } from "@/hooks/use-toast"

type Activity = {
  id: string
  category: string
  type: string
  amount?: number
  distance?: number
  unit: string
  date: string
  carbonFootprint: number
}

interface ActivityListProps {
  category: string
}

export function ActivityList({ category }: ActivityListProps) {
  const [activities, setActivities] = useState<Activity[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const data = getActivities(category)
    setActivities(data)
  }, [category])

  const handleDelete = async (id: string) => {
    try {
      await deleteActivity(id)
      setActivities(activities.filter((activity) => activity.id !== id))
      toast({
        title: "Activity deleted",
        description: "The activity has been removed from your records.",
      })
    } catch (error) {
      toast({
        title: "Error deleting activity",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "transportation":
        return "bg-blue-50"
      case "energy":
        return "bg-yellow-50"
      case "food":
        return "bg-green-50"
      case "shopping":
        return "bg-purple-50"
      default:
        return "bg-gray-50"
    }
  }

  const formatActivityDescription = (activity: Activity) => {
    switch (activity.category) {
      case "transportation":
        return `${activity.distance} ${activity.unit} by ${activity.type.replace("_", " ")}`
      case "energy":
        return `${activity.amount} ${activity.unit} of ${activity.type.replace("_", " ")}`
      case "food":
        return `${activity.amount} ${activity.unit} of ${activity.type.replace("_", " ")}`
      case "shopping":
        return `${activity.amount} ${activity.unit} of ${activity.type.replace("_", " ")}`
      default:
        return ""
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        {activities.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            No activities found. Start tracking to see your impact!
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                <div className="mt-1">{getCategoryIcon(activity.category)}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{activity.type.replace("_", " ")}</div>
                    <Badge variant="outline" className={getCategoryColor(activity.category)}>
                      {activity.carbonFootprint} kg CO₂e
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{formatActivityDescription(activity)}</div>
                  <div className="text-xs text-muted-foreground">{format(new Date(activity.date), "PPP")}</div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(activity.id)}>
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
