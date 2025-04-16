import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Home, Leaf, ShoppingBag, ThumbsUp, Utensils } from "lucide-react"

export default function TipsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Eco Tips</h1>
          <p className="text-muted-foreground">Practical ways to reduce your carbon footprint</p>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Tips</TabsTrigger>
          <TabsTrigger value="transportation">
            <Car className="mr-2 h-4 w-4" />
            Transportation
          </TabsTrigger>
          <TabsTrigger value="energy">
            <Home className="mr-2 h-4 w-4" />
            Energy
          </TabsTrigger>
          <TabsTrigger value="food">
            <Utensils className="mr-2 h-4 w-4" />
            Food
          </TabsTrigger>
          <TabsTrigger value="shopping">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Shopping
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Transportation Tips */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50">
                    Transportation
                  </Badge>
                  <Car className="h-4 w-4 text-blue-500" />
                </div>
                <CardTitle className="mt-2">Use Public Transportation</CardTitle>
                <CardDescription>Reduce emissions by sharing your ride</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Taking public transportation can reduce your carbon footprint by up to 30% compared to driving alone.
                  Buses and trains are more efficient per passenger mile.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~2.5kg CO₂ per 10km
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50">
                    Transportation
                  </Badge>
                  <Car className="h-4 w-4 text-blue-500" />
                </div>
                <CardTitle className="mt-2">Carpool When Possible</CardTitle>
                <CardDescription>Share rides with friends or colleagues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Carpooling with just one other person cuts your per-person emissions in half. It also reduces traffic
                  congestion and can save on fuel costs.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~1.2kg CO₂ per 10km
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            {/* Energy Tips */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-yellow-50">
                    Energy
                  </Badge>
                  <Home className="h-4 w-4 text-yellow-500" />
                </div>
                <CardTitle className="mt-2">Switch to LED Bulbs</CardTitle>
                <CardDescription>More efficient lighting for your home</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  LED bulbs use up to 90% less energy than incandescent bulbs and last up to 25 times longer. Replacing
                  just 5 frequently used lights can save significant energy.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~300kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-yellow-50">
                    Energy
                  </Badge>
                  <Home className="h-4 w-4 text-yellow-500" />
                </div>
                <CardTitle className="mt-2">Unplug Electronics</CardTitle>
                <CardDescription>Reduce phantom energy usage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Many devices continue to draw power even when turned off. Unplugging electronics or using power strips
                  can eliminate this "phantom" energy use.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~165kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            {/* Food Tips */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-green-50">
                    Food
                  </Badge>
                  <Utensils className="h-4 w-4 text-green-500" />
                </div>
                <CardTitle className="mt-2">Eat Less Red Meat</CardTitle>
                <CardDescription>Reduce high-impact food consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Beef production has one of the highest carbon footprints of any food. Reducing red meat consumption
                  even one day per week can significantly lower your footprint.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~700kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-green-50">
                    Food
                  </Badge>
                  <Utensils className="h-4 w-4 text-green-500" />
                </div>
                <CardTitle className="mt-2">Buy Local Produce</CardTitle>
                <CardDescription>Reduce food transportation emissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Food that travels long distances requires more energy for transportation and refrigeration. Buying
                  locally grown food reduces these emissions.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~200kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transportation">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50">
                    Transportation
                  </Badge>
                  <Car className="h-4 w-4 text-blue-500" />
                </div>
                <CardTitle className="mt-2">Use Public Transportation</CardTitle>
                <CardDescription>Reduce emissions by sharing your ride</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Taking public transportation can reduce your carbon footprint by up to 30% compared to driving alone.
                  Buses and trains are more efficient per passenger mile.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~2.5kg CO₂ per 10km
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50">
                    Transportation
                  </Badge>
                  <Car className="h-4 w-4 text-blue-500" />
                </div>
                <CardTitle className="mt-2">Carpool When Possible</CardTitle>
                <CardDescription>Share rides with friends or colleagues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Carpooling with just one other person cuts your per-person emissions in half. It also reduces traffic
                  congestion and can save on fuel costs.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~1.2kg CO₂ per 10km
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50">
                    Transportation
                  </Badge>
                  <Car className="h-4 w-4 text-blue-500" />
                </div>
                <CardTitle className="mt-2">Consider Electric Vehicles</CardTitle>
                <CardDescription>Zero tailpipe emissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Electric vehicles produce zero tailpipe emissions. Even when accounting for electricity generation,
                  EVs typically have a lower carbon footprint than gas vehicles.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~1,500kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="energy">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-yellow-50">
                    Energy
                  </Badge>
                  <Home className="h-4 w-4 text-yellow-500" />
                </div>
                <CardTitle className="mt-2">Switch to LED Bulbs</CardTitle>
                <CardDescription>More efficient lighting for your home</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  LED bulbs use up to 90% less energy than incandescent bulbs and last up to 25 times longer. Replacing
                  just 5 frequently used lights can save significant energy.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~300kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-yellow-50">
                    Energy
                  </Badge>
                  <Home className="h-4 w-4 text-yellow-500" />
                </div>
                <CardTitle className="mt-2">Unplug Electronics</CardTitle>
                <CardDescription>Reduce phantom energy usage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Many devices continue to draw power even when turned off. Unplugging electronics or using power strips
                  can eliminate this "phantom" energy use.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~165kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="food">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-green-50">
                    Food
                  </Badge>
                  <Utensils className="h-4 w-4 text-green-500" />
                </div>
                <CardTitle className="mt-2">Eat Less Red Meat</CardTitle>
                <CardDescription>Reduce high-impact food consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Beef production has one of the highest carbon footprints of any food. Reducing red meat consumption
                  even one day per week can significantly lower your footprint.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~700kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-green-50">
                    Food
                  </Badge>
                  <Utensils className="h-4 w-4 text-green-500" />
                </div>
                <CardTitle className="mt-2">Buy Local Produce</CardTitle>
                <CardDescription>Reduce food transportation emissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Food that travels long distances requires more energy for transportation and refrigeration. Buying
                  locally grown food reduces these emissions.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~200kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="shopping">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-purple-50">
                    Shopping
                  </Badge>
                  <ShoppingBag className="h-4 w-4 text-purple-500" />
                </div>
                <CardTitle className="mt-2">Buy Second-Hand</CardTitle>
                <CardDescription>Reduce manufacturing emissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manufacturing new products requires significant resources and energy. Buying second-hand items extends
                  product life and prevents additional emissions.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Varies by product
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-purple-50">
                    Shopping
                  </Badge>
                  <ShoppingBag className="h-4 w-4 text-purple-500" />
                </div>
                <CardTitle className="mt-2">Reduce Single-Use Plastics</CardTitle>
                <CardDescription>Choose reusable alternatives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Single-use plastics require fossil fuels to produce and often end up in landfills or oceans. Using
                  reusable bags, bottles, and containers reduces this impact.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Leaf className="mr-1 h-4 w-4 text-green-500" />
                  Saves ~40kg CO₂ per year
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
