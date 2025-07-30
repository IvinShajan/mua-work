import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Star, Award, Film, Clock, Edit, Play, Video, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const projects = [
    {
      title: "Midnight in Tokyo",
      role: "Executive Producer",
      year: "2023",
      status: "In Production",
      genre: "Drama/Thriller",
      budget: "$2.5M",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Desert Dreams",
      role: "Producer",
      year: "2022",
      status: "Completed",
      genre: "Independent Drama",
      budget: "$800K",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Urban Legends",
      role: "Co-Producer",
      year: "2022",
      status: "Post-Production",
      genre: "Horror",
      budget: "$1.2M",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const reviews = [
    {
      author: "Sarah Chen",
      role: "Director",
      rating: 5,
      comment:
        "John is an exceptional producer who brings both creative vision and practical expertise to every project. His attention to detail and ability to manage complex productions is outstanding.",
      project: "Midnight in Tokyo",
      date: "2 weeks ago",
    },
    {
      author: "Marcus Rodriguez",
      role: "Cinematographer",
      rating: 5,
      comment:
        "Working with John was a fantastic experience. He creates a collaborative environment and always ensures the creative team has what they need to succeed.",
      project: "Desert Dreams",
      date: "3 months ago",
    },
    {
      author: "Emma Thompson",
      role: "Casting Director",
      rating: 4,
      comment:
        "Professional, organized, and great at problem-solving. John's communication skills make him a pleasure to work with on any production.",
      project: "Urban Legends",
      date: "6 months ago",
    },
  ]

  const skills = [
    { name: "Project Management", level: 95 },
    { name: "Budget Planning", level: 90 },
    { name: "Team Leadership", level: 88 },
    { name: "Script Development", level: 85 },
    { name: "Post-Production", level: 80 },
    { name: "Distribution Strategy", level: 75 },
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
              <Link href="/search">
                <Button variant="ghost">Discover</Button>
              </Link>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <Badge className="bg-green-100 text-green-800 mb-2">Available</Badge>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                    <p className="text-xl text-gray-600 mb-2">Independent Film Producer</p>
                    <div className="flex items-center space-x-4 text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Los Angeles, CA
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        4.9 (47 reviews)
                      </div>
                      <div className="flex items-center">
                        <Film className="w-4 h-4 mr-1" />
                        23 projects
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button variant="outline">
                      <Video className="w-4 h-4 mr-2" />
                      Video Call
                    </Button>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Passionate independent film producer with over 10 years of experience bringing compelling stories to
                  life. Specialized in drama and thriller genres with a track record of successful festival runs and
                  distribution deals. I believe in collaborative filmmaking and supporting emerging talent while
                  maintaining the highest production standards.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">23</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$12M</div>
                    <div className="text-sm text-gray-500">Total Budget</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-gray-500">Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-gray-500">Connections</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        project.status === "Completed"
                          ? "bg-green-500"
                          : project.status === "In Production"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>
                      {project.role} • {project.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Genre:</span>
                        <span>{project.genre}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Budget:</span>
                        <span>{project.budget}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Professional Skills</CardTitle>
                <CardDescription>Skills and expertise developed over years of film production</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40&query=${review.author.toLowerCase().replace(" ", "-")}`}
                          />
                          <AvatarFallback>
                            {review.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{review.author}</h4>
                          <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{review.comment}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Project: {review.project}</span>
                      <span>{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="availability">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Current Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Status</span>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Next Available</span>
                      <span>Immediately</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Preferred Project Length</span>
                      <span>3-6 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Remote Work</span>
                      <span>Yes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Travel Willing</span>
                      <span>Yes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Rates & Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Hourly Rate</span>
                      <span className="font-semibold">$150/hr</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Day Rate</span>
                      <span className="font-semibold">$1,200/day</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Project Rate</span>
                      <span className="font-semibold">Negotiable</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Minimum Project</span>
                      <span>$50K budget</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Terms</span>
                      <span>Net 30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Independent Film Producer</h4>
                      <p className="text-sm text-gray-500">2014 - Present</p>
                      <p className="text-sm mt-1">
                        Producing independent films across multiple genres with focus on emerging talent and compelling
                        narratives.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Associate Producer</h4>
                      <p className="text-sm text-gray-500">Paramount Pictures • 2012 - 2014</p>
                      <p className="text-sm mt-1">
                        Worked on studio productions, managing budgets and coordinating between departments.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Production Assistant</h4>
                      <p className="text-sm text-gray-500">Various Productions • 2010 - 2012</p>
                      <p className="text-sm mt-1">
                        Started career supporting various film and TV productions in Los Angeles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education & Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">MFA Film Production</h4>
                      <p className="text-sm text-gray-500">USC School of Cinematic Arts • 2010</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">BA Communications</h4>
                      <p className="text-sm text-gray-500">UCLA • 2008</p>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-2">Recent Awards</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-yellow-500" />
                          <span className="text-sm">Best Producer - Sundance Film Festival 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-yellow-500" />
                          <span className="text-sm">Outstanding Achievement - Independent Spirit Awards 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
