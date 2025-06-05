'use client';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Edit, Home, Plus, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ListingCard, {
  DashboardPropertyCard,
} from '@/components/Property/dashboardCard';
import properties from '@/data/properties';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your properties and account
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Property
            </Button>
          </div>
          <Tabs defaultValue="saved-prop">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="saved-prop">Saved Properties</TabsTrigger>
              <TabsTrigger value="listed-prop">Listed Properties</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <TabsContent value="saved-prop">
              <div className="grid grid-cols-3 gap-3">
                {properties.map((property) => (
                  <DashboardPropertyCard
                    key={property.id}
                    property={property}
                    onDelete={(id) => {
                      // Your delete logic here
                      alert(`Delete property with id: ${id}`);
                    }}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="listed-prop" className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {properties.slice(0, 3).map((property) => (
                  <ListingCard
                    key={property.id}
                    property={property}
                    onDelete={(id) => {
                      // Your delete logic here
                      alert(`Delete property with id: ${id}`);
                    }}
                    onEdit={(id) => {
                      // Your delete logic here
                      alert(`Edited property with id: ${id}`);
                    }}
                  />
                ))}
              </div>
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Add New Property</CardTitle>
                  <CardDescription>
                    Fill in the details to list a new property
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Property Title</Label>
                      <Input
                        id="title"
                        placeholder="Modern 3-Bedroom House with Garden"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="Enter a price"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Address</Label>
                      <Input id="title" placeholder="Cadastral Street, 123" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">City</Label>
                      <Input id="title" placeholder="Port Harcourt" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">State</Label>
                      <Input id="title" placeholder="Rivers" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="97201" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Input id="bedrooms" type="number" placeholder="3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Input id="bathrooms" type="number" placeholder="2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sqft">Square Feet</Label>
                      <Input id="sqft" type="number" placeholder="1800" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year Built</Label>
                      <Input id="year" type="number" placeholder="2018" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="property-type">Property Type</Label>
                      <Select>
                        <SelectTrigger id="property-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Label htmlFor="property-description">
                    Property Description
                  </Label>
                  <Textarea />

                  <div className="space-y-2">
                    <Label>Property Images</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div
                          key={index}
                          className="border-2 border-dashed rounded-lg p-4 text-center"
                        >
                          <div className="flex flex-col items-center justify-center gap-1">
                            <Plus className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Upload Image
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Amenities</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        'Air Conditioning',
                        'Garage',
                        'Pool',
                        'Fireplace',
                        'Garden',
                        'Balcony',
                        'Gym',
                        'Security System',
                        'Washer/Dryer',
                      ].map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`amenity-${amenity.toLowerCase().replace(/\s+/g, '-')}`}
                          />
                          <label
                            htmlFor={`amenity-${amenity.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {amenity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                  <Button>Save Property</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <Button
                        size="sm"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Change avatar</span>
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="full-name">Full Name</Label>
                          <Input id="full-name" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="john.doe@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            defaultValue="(555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select defaultValue="buyer">
                            <SelectTrigger id="role">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="buyer">Buyer</SelectItem>
                              <SelectItem value="seller">Seller</SelectItem>
                              <SelectItem value="agent">Agent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell us about yourself"
                          defaultValue="I'm looking for a new home in the Portland area. Interested in modern houses with gardens."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Confirm New Password
                    </Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <div className="space-y-2 pt-4">
                    <h4 className="font-medium">Notification Preferences</h4>
                    <div className="space-y-2">
                      {[
                        'Email notifications for new listings',
                        'SMS alerts for property updates',
                        'Newsletter subscription',
                        'Marketing communications',
                      ].map((pref) => (
                        <div key={pref} className="flex items-center space-x-2">
                          <Checkbox
                            id={`pref-${pref.toLowerCase().replace(/\s+/g, '-')}`}
                            defaultChecked={pref.includes('new listings')}
                          />
                          <label
                            htmlFor={`pref-${pref.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {pref}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          <footer className="border-t bg-background">
            <div className="container px-4 md:px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2">
                  <Home className="h-6 w-6" />
                  <span className="text-xl font-bold">EstateEase</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                  © {new Date().getFullYear()} EstateEase. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
