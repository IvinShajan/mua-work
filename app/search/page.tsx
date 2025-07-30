import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, MapPin, Star, Calendar, Video, Play, Filter } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const professionals = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Producer",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      projects: 23,
      specialties: ["Drama", "Thriller", "Independent"],
      availability: "Available",
      hourlyRate: "$150/hr",
      bio: "Award-winning producer with 10+ years experience in independent and studio films. Specialized in drama and thriller genres.",
      recentWork: "The Last Stand (2023), Midnight Dreams (2022)",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Director",
      location: "New York, NY",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      projects: 18,
      specialties: ["Action", "Drama", "Commercial"],
      availability: "Busy until March",
      hourlyRate: "$200/hr",
      bio: "Visionary director known for dynamic action sequences and compelling character development.",
      recentWork: "Urban Legends (2023), Fast Track (2022)",
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Casting Director",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      projects: 45,
      specialties: ["Drama", "Comedy", "Independent"],
      availability: "Available",
      hourlyRate: "$120/hr",
      bio: "Experienced casting director with an eye for emerging talent and established stars.",
      recentWork: "Summer Nights (2023), The Perfect Match (2022)",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Cinematographer",
      location: "Atlanta, GA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.7,
      projects: 31,
      specialties: ["Horror", "Sci-Fi", "Music Video"],
      availability: "Available",
      hourlyRate: "$180/hr",
      bio: "Creative cinematographer specializing in atmospheric horror and sci-fi visuals.",
      recentWork: "Dark Waters (2023), Neon Dreams (2022)",
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Actor",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      projects: 12,
      specialties: ["Drama", "Comedy", "Theater"],
      availability: "Accepting Auditions",
      hourlyRate: "$500/day",
      bio: "Versatile actor with strong theater background and growing film presence.",
      recentWork: "City Lights (2023), The Journey Home (2022)",
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "Sound Designer",
      location: "Nashville, TN",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4.6,
      projects: 28,
      specialties: ["Post-Production", "Music", "Documentary"],
      availability: "Available",
      hourlyRate: "$100/hr",
      bio: "Award-winning sound designer with expertise in both narrative and documentary films.",
      recentWork: "Echoes (2023), Silent Stories (2022)",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FilmConnect</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/profile">
                <Avatar className="w-8 h-8 cursor-pointer">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Talent</h1>
          <p className="text-gray-600">Find the perfect professionals for your next project</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Name, skills, projects..." className="pl-10" />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Role</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="producer">Producer</SelectItem>
                      <SelectItem value="director">Director</SelectItem>
                      <SelectItem value="actor">Actor</SelectItem>
                      <SelectItem value="cinematographer">Cinematographer</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="sound">Sound Designer</SelectItem>
                      <SelectItem value="casting">Casting Director</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                      <SelectItem value="new-york">New York, NY</SelectItem>
                      <SelectItem value="atlanta">Atlanta, GA</SelectItem>
                      <SelectItem value="chicago">Chicago, IL</SelectItem>
                      <SelectItem value="austin">Austin, TX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Availability</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="available" />
                      <label htmlFor="available" className="text-sm">
                        Available Now
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="accepting" />
                      <label htmlFor="accepting" className="text-sm">
                        Accepting Pitches
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote" />
                      <label htmlFor="remote" className="text-sm">
                        Remote Work
                      </label>
                    </div>
                  </div>
                </div>

                {/* Genre */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Genre Experience</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="drama" />
                      <label htmlFor="drama" className="text-sm">
                        Drama
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="comedy" />
                      <label htmlFor="comedy" className="text-sm">
                        Comedy
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="action" />
                      <label htmlFor="action" className="text-sm">
                        Action
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="horror" />
                      <label htmlFor="horror" className="text-sm">
                        Horror
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="scifi" />
                      <label htmlFor="scifi" className="text-sm">
                        Sci-Fi
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{professionals.length} professionals found</p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="projects">Most Projects</SelectItem>
                  <SelectItem value="recent">Recently Active</SelectItem>
                  <SelectItem value="rate-low">Lowest Rate</SelectItem>
                  <SelectItem value="rate-high">Highest Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {professionals.map((professional) => (
                <Card key={professional.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={professional.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {professional.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{professional.name}</h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <Badge variant="secondary">{professional.role}</Badge>
                              <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="w-4 h-4 mr-1" />
                                {professional.location}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="flex items-center mb-1">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="font-medium">{professional.rating}</span>
                              <span className="text-sm text-gray-500 ml-1">({professional.projects} projects)</span>
                            </div>
                            <Badge
                              variant={professional.availability === "Available" ? "default" : "secondary"}
                              className={professional.availability === "Available" ? "bg-green-100 text-green-800" : ""}
                            >
                              {professional.availability}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 mt-3 mb-3">{professional.bio}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {professional.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <p>
                              <strong>Recent Work:</strong> {professional.recentWork}
                            </p>
                            <p className="mt-1">
                              <strong>Rate:</strong> {professional.hourlyRate}
                            </p>
                          </div>

                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              Schedule
                            </Button>
                            <Button variant="outline" size="sm">
                              <Video className="w-4 h-4 mr-1" />
                              Video Call
                            </Button>
                            <Button size="sm">Connect</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
