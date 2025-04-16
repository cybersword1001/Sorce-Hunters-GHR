import { v4 as uuidv4 } from "uuid"
import { calculateCarbonFootprint } from "./carbon-calculations"

// Type definitions
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

// Mock storage
let activities: Activity[] = []

// Initialize with some sample data
const initializeData = () => {
  if (typeof window !== "undefined") {
    const storedActivities = localStorage.getItem("carbon-activities")

    if (storedActivities) {
      activities = JSON.parse(storedActivities)
    } else {
      // Sample data
      const sampleActivities = [
        {
          id: uuidv4(),
          category: "transportation",
          type: "car_petrol",
          distance: 15,
          unit: "km",
          date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          carbonFootprint: 3.5,
        },
        {
          id: uuidv4(),
          category: "energy",
          type: "electricity",
          amount: 10,
          unit: "kWh",
          date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          carbonFootprint: 4.2,
        },
        {
          id: uuidv4(),
          category: "food",
          type: "beef",
          amount: 0.3,
          unit: "kg",
          date: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
          carbonFootprint: 7.5,
        },
      ]

      activities = sampleActivities
      localStorage.setItem("carbon-activities", JSON.stringify(activities))
    }
  }
}

// Get all activities or filtered by category
export const getActivities = (category = "all"): Activity[] => {
  if (activities.length === 0) {
    initializeData()
  }

  if (category === "all") {
    return [...activities].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  return [...activities]
    .filter((activity) => activity.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get recent activities (last 5)
export const getRecentActivities = (): Activity[] => {
  if (activities.length === 0) {
    initializeData()
  }

  return [...activities].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)
}

// Add a new activity
export const addActivity = async (activityData: Omit<Activity, "id" | "carbonFootprint">): Promise<Activity> => {
  if (activities.length === 0) {
    initializeData()
  }

  const carbonFootprint = calculateCarbonFootprint(
    activityData.category,
    activityData.type,
    activityData.amount || activityData.distance || 0,
    activityData.unit,
  )

  const newActivity: Activity = {
    id: uuidv4(),
    ...activityData,
    carbonFootprint,
  }

  activities.push(newActivity)

  if (typeof window !== "undefined") {
    localStorage.setItem("carbon-activities", JSON.stringify(activities))
  }

  return newActivity
}

// Delete an activity
export const deleteActivity = async (id: string): Promise<boolean> => {
  if (activities.length === 0) {
    initializeData()
  }

  const initialLength = activities.length
  activities = activities.filter((activity) => activity.id !== id)

  if (typeof window !== "undefined") {
    localStorage.setItem("carbon-activities", JSON.stringify(activities))
  }

  return activities.length < initialLength
}
