"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Car, Home, ShoppingBag, Utensils } from "lucide-react"
import { addActivity } from "@/lib/activities"

const transportationSchema = z.object({
  type: z.string().min(1, "Please select a transportation type"),
  distance: z.coerce.number().min(0.1, "Distance must be greater than 0"),
  unit: z.string().default("km"),
})

const energySchema = z.object({
  type: z.string().min(1, "Please select an energy type"),
  amount: z.coerce.number().min(0.1, "Amount must be greater than 0"),
  unit: z.string().default("kWh"),
})

const foodSchema = z.object({
  type: z.string().min(1, "Please select a food type"),
  amount: z.coerce.number().min(0.1, "Amount must be greater than 0"),
  unit: z.string().default("kg"),
})

const shoppingSchema = z.object({
  type: z.string().min(1, "Please select a product type"),
  amount: z.coerce.number().min(0.1, "Amount must be greater than 0"),
  unit: z.string().default("items"),
})

export default function NewActivityPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const initialCategory = searchParams.get("category") || "transportation"
  const [category, setCategory] = useState(initialCategory)

  const transportationForm = useForm({
    resolver: zodResolver(transportationSchema),
    defaultValues: {
      type: "",
      distance: 0,
      unit: "km",
    },
  })

  const energyForm = useForm({
    resolver: zodResolver(energySchema),
    defaultValues: {
      type: "",
      amount: 0,
      unit: "kWh",
    },
  })

  const foodForm = useForm({
    resolver: zodResolver(foodSchema),
    defaultValues: {
      type: "",
      amount: 0,
      unit: "kg",
    },
  })

  const shoppingForm = useForm({
    resolver: zodResolver(shoppingSchema),
    defaultValues: {
      type: "",
      amount: 0,
      unit: "items",
    },
  })

  const onSubmit = async (data: any) => {
    try {
      await addActivity({
        category,
        ...data,
        date: new Date().toISOString(),
      })

      toast({
        title: "Activity logged successfully",
        description: "Your carbon footprint has been updated.",
      })

      router.push("/activities")
    } catch (error) {
      toast({
        title: "Error logging activity",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Log New Activity</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Add Carbon Activity</CardTitle>
          <CardDescription>Log your daily activities to track your carbon footprint</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={category} onValueChange={setCategory}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="transportation">
                <Car className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Transportation</span>
              </TabsTrigger>
              <TabsTrigger value="energy">
                <Home className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Energy</span>
              </TabsTrigger>
              <TabsTrigger value="food">
                <Utensils className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Food</span>
              </TabsTrigger>
              <TabsTrigger value="shopping">
                <ShoppingBag className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Shopping</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transportation">
              <Form {...transportationForm}>
                <form onSubmit={transportationForm.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={transportationForm.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transportation Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select transportation type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="car_petrol">Car (Petrol)</SelectItem>
                            <SelectItem value="car_diesel">Car (Diesel)</SelectItem>
                            <SelectItem value="car_electric">Car (Electric)</SelectItem>
                            <SelectItem value="bus">Bus</SelectItem>
                            <SelectItem value="train">Train</SelectItem>
                            <SelectItem value="plane">Plane</SelectItem>
                            <SelectItem value="bicycle">Bicycle</SelectItem>
                            <SelectItem value="walking">Walking</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={transportationForm.control}
                      name="distance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Distance</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={transportationForm.control}
                      name="unit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="km">Kilometers</SelectItem>
                              <SelectItem value="miles">Miles</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Log Activity</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="energy">
              <Form {...energyForm}>
                <form onSubmit={energyForm.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={energyForm.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Energy Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select energy type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="electricity">Electricity</SelectItem>
                            <SelectItem value="natural_gas">Natural Gas</SelectItem>
                            <SelectItem value="heating_oil">Heating Oil</SelectItem>
                            <SelectItem value="propane">Propane</SelectItem>
                            <SelectItem value="wood">Wood</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={energyForm.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={energyForm.control}
                      name="unit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="kWh">kWh</SelectItem>
                              <SelectItem value="m3">m³</SelectItem>
                              <SelectItem value="liters">Liters</SelectItem>
                              <SelectItem value="kg">kg</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Log Activity</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="food">
              <Form {...foodForm}>
                <form onSubmit={foodForm.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={foodForm.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Food Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select food type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beef">Beef</SelectItem>
                            <SelectItem value="lamb">Lamb</SelectItem>
                            <SelectItem value="pork">Pork</SelectItem>
                            <SelectItem value="chicken">Chicken</SelectItem>
                            <SelectItem value="fish">Fish</SelectItem>
                            <SelectItem value="dairy">Dairy</SelectItem>
                            <SelectItem value="vegetables">Vegetables</SelectItem>
                            <SelectItem value="fruits">Fruits</SelectItem>
                            <SelectItem value="grains">Grains</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={foodForm.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={foodForm.control}
                      name="unit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="kg">kg</SelectItem>
                              <SelectItem value="g">g</SelectItem>
                              <SelectItem value="servings">Servings</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Log Activity</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="shopping">
              <Form {...shoppingForm}>
                <form onSubmit={shoppingForm.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={shoppingForm.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select product type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="furniture">Furniture</SelectItem>
                            <SelectItem value="appliances">Appliances</SelectItem>
                            <SelectItem value="plastic_products">Plastic Products</SelectItem>
                            <SelectItem value="paper_products">Paper Products</SelectItem>
                            <SelectItem value="glass_products">Glass Products</SelectItem>
                            <SelectItem value="metal_products">Metal Products</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={shoppingForm.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={shoppingForm.control}
                      name="unit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="items">Items</SelectItem>
                              <SelectItem value="kg">kg</SelectItem>
                              <SelectItem value="dollars">Dollars</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Log Activity</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <p className="text-xs text-muted-foreground">All data is stored locally on your device</p>
        </CardFooter>
      </Card>
    </div>
  )
}
