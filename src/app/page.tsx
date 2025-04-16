import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Home, Plus, ShoppingBag, Utensils } from "lucide-react";
import { ActivityList } from "@/components/activity-list";

export default function ActivitiesPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Activities</h1>
          <p className="text-muted-foreground">
            View and manage your carbon-producing activities
          </p>
        </div>
        <Button asChild>
          <Link href="/activities/new">
            <Plus className="mr-2 h-4 w-4" /> Log New Activity
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
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
          <ActivityList category="all" />
        </TabsContent>
        <TabsContent value="transportation">
          <ActivityList category="transportation" />
        </TabsContent>
        <TabsContent value="energy">
          <ActivityList category="energy" />
        </TabsContent>
        <TabsContent value="food">
          <ActivityList category="food" />
        </TabsContent>
        <TabsContent value="shopping">
          <ActivityList category="shopping" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
