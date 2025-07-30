import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2, Calendar, Video, Plus, Search, Bell, Play } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      role: "Producer",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2 hours ago",
      content:
        "🎬 Excited to announce we're officially in pre-production for 'Midnight in Tokyo'! Looking for talented cinematographers with experience in urban night scenes. #CastingCall #Cinematography",
      tags: ["#CastingCall", "#Cinematography", "#Tokyo"],
      likes: 24,
      comments: 8,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      role: "Director",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "4 hours ago",
      content:
        "Just wrapped an incredible 14-hour shoot day! The dedication of this cast and crew is unmatched. Can't wait to share what we've been working on. #OnSet #FilmLife",
      tags: ["#OnSet", "#FilmLife"],
      likes: 45,
      comments: 12,
    },
    {
      id: 3,
      author: "Emma Thompson",
      role: "Casting Director",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "6 hours ago",
      content:
        "Open casting call for lead female role (25-35) in upcoming indie drama. Must be comfortable with emotional scenes. Auditions next week in LA. DM for details! #CastingCall #IndieFilm",
      tags: ["#CastingCall", "#IndieFilm", "#LA"],
      likes: 67,
      comments: 23,
    },
  ]

  const upcomingMeetings = [
    {
      title: "Script Pitch - 'Desert Dreams'",
      time: "Today, 2:00 PM",
      with: "Alex Johnson (Producer)",
      type: "Video Call",
    },
    {
      title: "Casting Discussion",
      time: "Tomorrow, 10:00 AM",
      with: "Maria Santos (Director)",
      type: "In Person",
    },
    {
      title: "Location Scouting Review",
      time: "Friday, 3:30 PM",
      with: "David Kim (Location Manager)",
      type: "Video Call",
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search professionals, projects..." className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Independent Filmmaker</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto">
                  Available
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📍 Los Angeles, CA</p>
                  <p>🎬 15 projects completed</p>
                  <p>⭐ 4.9 rating</p>
                </div>
                <Link href="/profile">
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/search">
                  <Button variant="ghost" className="w-full justify-start">
                    <Search className="w-4 h-4 mr-2" />
                    Find Talent
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Project
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Create Post */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Share an update, casting call, or project milestone..."
                      className="min-h-[100px] resize-none"
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex space-x-2">
                        <Badge variant="outline">#CastingCall</Badge>
                        <Badge variant="outline">#OnSet</Badge>
                        <Badge variant="outline">#WrapParty</Badge>
                      </div>
                      <Button>Post Update</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{post.author}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {post.role}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500">{post.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{post.content}</p>
                    {post.image && (
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post content"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Meetings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Meetings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting, index) => (
                    <div key={index} className="border-l-2 border-purple-500 pl-4">
                      <h4 className="font-medium text-sm">{meeting.title}</h4>
                      <p className="text-xs text-gray-500">{meeting.time}</p>
                      <p className="text-xs text-gray-600">{meeting.with}</p>
                      <div className="flex items-center mt-2">
                        <Video className="w-3 h-3 mr-1" />
                        <span className="text-xs text-purple-600">{meeting.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Meetings
                </Button>
              </CardContent>
            </Card>

            {/* Trending Tags */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Trending Now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">#CastingCall</span>
                    <span className="text-xs text-gray-500">142 posts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">#IndieFilm</span>
                    <span className="text-xs text-gray-500">89 posts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">#OnSet</span>
                    <span className="text-xs text-gray-500">76 posts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">#WrapParty</span>
                    <span className="text-xs text-gray-500">54 posts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">#SciFi</span>
                    <span className="text-xs text-gray-500">43 posts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Connections */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Suggested Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>LC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Lisa Chen</h4>
                      <p className="text-xs text-gray-500">Executive Producer</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Mike Johnson</h4>
                      <p className="text-xs text-gray-500">Cinematographer</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
