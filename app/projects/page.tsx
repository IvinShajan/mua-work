import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, Users, Calendar, MessageSquare, FileText, CheckCircle, Clock, AlertCircle, Play } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Midnight in Tokyo",
      status: "In Production",
      progress: 65,
      budget: "$2.5M",
      genre: "Drama/Thriller",
      startDate: "Jan 15, 2024",
      endDate: "May 30, 2024",
      team: [
        { name: "Sarah Chen", role: "Producer", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Marcus Rodriguez", role: "Director", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Emma Thompson", role: "Casting Director", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "David Kim", role: "Cinematographer", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      tasks: {
        completed: 23,
        total: 35,
      },
      nextMilestone: "Principal Photography Wrap",
      description:
        "A psychological thriller set in modern Tokyo following a detective investigating mysterious disappearances.",
    },
    {
      id: 2,
      title: "Desert Dreams",
      status: "Pre-Production",
      progress: 30,
      budget: "$800K",
      genre: "Independent Drama",
      startDate: "Mar 1, 2024",
      endDate: "Aug 15, 2024",
      team: [
        { name: "John Doe", role: "Producer", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Lisa Chen", role: "Director", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Mike Johnson", role: "Writer", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      tasks: {
        completed: 8,
        total: 27,
      },
      nextMilestone: "Location Scouting Complete",
      description:
        "An intimate drama about family, loss, and redemption set against the backdrop of the American Southwest.",
    },
    {
      id: 3,
      title: "Urban Legends",
      status: "Post-Production",
      progress: 85,
      budget: "$1.2M",
      genre: "Horror",
      startDate: "Sep 1, 2023",
      endDate: "Feb 28, 2024",
      team: [
        { name: "Alex Johnson", role: "Producer", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Maria Santos", role: "Director", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Tom Wilson", role: "Editor", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      tasks: {
        completed: 31,
        total: 36,
      },
      nextMilestone: "Final Cut Approval",
      description: "A modern horror anthology exploring urban myths and legends in contemporary settings.",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Production":
        return "bg-blue-100 text-blue-800"
      case "Pre-Production":
        return "bg-yellow-100 text-yellow-800"
      case "Post-Production":
        return "bg-purple-100 text-purple-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Production":
        return <Clock className="w-4 h-4" />
      case "Pre-Production":
        return <AlertCircle className="w-4 h-4" />
      case "Post-Production":
        return <FileText className="w-4 h-4" />
      case "Completed":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Collaboration</h1>
            <p className="text-gray-600">Manage your film projects and collaborate with your team</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Team Members</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">8 Tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusIcon(project.status)}
                        <span className="ml-1">{project.status}</span>
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>
                        <strong>Genre:</strong> {project.genre}
                      </span>
                      <span>
                        <strong>Budget:</strong> {project.budget}
                      </span>
                      <span>
                        <strong>Timeline:</strong> {project.startDate} - {project.endDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-gray-500">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2 mb-3" />
                    <div className="text-sm text-gray-600">
                      <p>
                        <strong>Next Milestone:</strong> {project.nextMilestone}
                      </p>
                      <p>
                        <strong>Tasks:</strong> {project.tasks.completed}/{project.tasks.total} completed
                      </p>
                    </div>
                  </div>

                  {/* Team */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Team Members</h4>
                    <div className="space-y-2">
                      {project.team.slice(0, 3).map((member, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="text-xs">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.role}</p>
                          </div>
                        </div>
                      ))}
                      {project.team.length > 3 && (
                        <p className="text-xs text-gray-500">+{project.team.length - 3} more</p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Team Chat
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Templates */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Start a New Project</CardTitle>
            <CardDescription>Choose from our project templates to get started quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="cursor-pointer hover:bg-gray-50 border-dashed">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium mb-2">Feature Film</h4>
                  <p className="text-sm text-gray-500">Complete feature film production workflow</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-gray-50 border-dashed">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Play className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium mb-2">Short Film</h4>
                  <p className="text-sm text-gray-500">Streamlined workflow for short productions</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-gray-50 border-dashed">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-medium mb-2">Documentary</h4>
                  <p className="text-sm text-gray-500">Documentary production and post-production</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
