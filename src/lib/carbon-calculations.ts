const carbonFactors = {
  transportation: {
    car_petrol: 0.192, // per km
    car_diesel: 0.171, // per km
    car_electric: 0.053, // per km
    bus: 0.105, // per km
    train: 0.041, // per km
    plane: 0.255, // per km
    bicycle: 0, // per km
    walking: 0, // per km
  },
  energy: {
    electricity: 0.233, // per kWh
    natural_gas: 0.184, // per kWh
    heating_oil: 0.268, // per kWh
    propane: 0.215, // per kWh
    wood: 0.025, // per kg
  },
  food: {
    beef: 27, // per kg
    lamb: 39.2, // per kg
    pork: 12.1, // per kg
    chicken: 6.9, // per kg
    fish: 6.1, // per kg
    dairy: 1.9, // per kg
    vegetables: 2, // per kg
    fruits: 1.1, // per kg
    grains: 1.4, // per kg
  },
  shopping: {
    clothing: 15, // per item
    electronics: 125, // per item
    furniture: 90, // per item
    appliances: 100, // per item
    plastic_products: 6, // per kg
    paper_products: 3, // per kg
    glass_products: 0.85, // per kg
    metal_products: 5.93, // per kg
  },
}

// Calculate carbon footprint for an activity
export const calculateCarbonFootprint = (category: string, type: string, amount: number, unit: string): number => {
  // Convert units if necessary
  let convertedAmount = amount
  if (unit === "miles" && category === "transportation") {
    convertedAmount = amount * 1.60934 // Convert miles to km
  } else if (unit === "g" && category === "food") {
    convertedAmount = amount / 1000 // Convert g to kg
  }

  // Get the appropriate carbon factor
  const factor =
    carbonFactors[category as keyof typeof carbonFactors]?.[type as keyof typeof carbonFactors.transportation]

  if (!factor) {
    return 0
  }

  // Calculate and round to 1 decimal place
  return Math.round(convertedAmount * factor * 10) / 10
}

// Get carbon summary for dashboard
export const getCarbonSummary = () => {
  // In a real app, this would calculate based on actual user data
  return {
    total: 450,
    goal: 1000,
    progress: 45,
    breakdown: {
      transportation: 180,
      energy: 120,
      food: 100,
      shopping: 50,
    },
  }
}

// Get carbon data for charts
export const getCarbonData = (timeRange: string) => {
  // In a real app, this would filter and aggregate based on the time range
  let labels: string[] = []

  switch (timeRange) {
    case "week":
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      break
    case "month":
      labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)
      break
    case "year":
      labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      break
    default:
      labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"]
  }

  // Generate some random data for the demo
  const generateRandomData = () => {
    return labels.map(() => Math.floor(Math.random() * 20) + 5)
  }

  return {
    labels,
    transportation: generateRandomData(),
    energy: generateRandomData(),
    food: generateRandomData(),
    shopping: generateRandomData(),
  }
}

// Get carbon breakdown for pie chart
export const getCarbonBreakdown = (timeRange: string) => {
  // In a real app, this would calculate based on actual user data
  return {
    transportation: 180,
    energy: 120,
    food: 100,
    shopping: 50,
  }
}

// Get carbon comparison data
export const getCarbonComparison = (timeRange: string) => {
  // In a real app, this would calculate based on actual user data
  return {
    userFootprint: 450,
    countryAverage: 600,
    globalAverage: 500,
    sustainableTarget: 300,
  }
}
