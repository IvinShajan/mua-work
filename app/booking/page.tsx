import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Video, MapPin, Star, Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BookingPage() {
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const availableDates = [
    { date: "2024-02-15", day: "Thu", available: true },
    { date: "2024-02-16", day: "Fri", available: true },
    { date: "2024-02-17", day: "Sat", available: false },
    { date: "2024-02-18", day: "Sun", available: false },
    { date: "2024-02-19", day: "Mon", available: true },
    { date: "2024-02-20", day: "Tue", available: true },
    { date: "2024-02-21", day: "Wed", available: true },
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/search" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Search
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <CardTitle>Sarah Chen</CardTitle>
                <CardDescription>Executive Producer</CardDescription>
                <Badge className="bg-green-100 text-green-800 w-fit mx-auto">Available</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    Los Angeles, CA
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    4.9 rating (23 reviews)
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    Usually responds in 2 hours
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Drama</Badge>
                    <Badge variant="outline">Thriller</Badge>
                    <Badge variant="outline">Independent</Badge>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Rates</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Consultation</span>
                      <span className="font-medium">$150/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Rate</span>
                      <span className="font-medium">Negotiable</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Meeting</CardTitle>
                <CardDescription>Book a consultation, pitch session, or project discussion with Sarah</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Meeting Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Meeting Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Initial Consultation (30 min)</SelectItem>
                      <SelectItem value="pitch">Script Pitch (60 min)</SelectItem>
                      <SelectItem value="project">Project Discussion (45 min)</SelectItem>
                      <SelectItem value="collaboration">Collaboration Meeting (30 min)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Meeting Format */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Meeting Format</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="cursor-pointer hover:bg-gray-50 border-2 border-purple-500">
                      <CardContent className="p-4 text-center">
                        <Video className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                        <h4 className="font-medium">Video Call</h4>
                        <p className="text-xs text-gray-500">Zoom/Google Meet</p>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:bg-gray-50">
                      <CardContent className="p-4 text-center">
                        <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <h4 className="font-medium">In Person</h4>
                        <p className="text-xs text-gray-500">Los Angeles area</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Date</label>
                  <div className="grid grid-cols-7 gap-2">
                    {availableDates.map((dateInfo, index) => (
                      <Card
                        key={index}
                        className={`cursor-pointer text-center ${
                          dateInfo.available ? "hover:bg-purple-50 border-purple-200" : "bg-gray-100 cursor-not-allowed"
                        } ${index === 1 ? "border-2 border-purple-500 bg-purple-50" : ""}`}
                      >
                        <CardContent className="p-3">
                          <div className="text-xs text-gray-500">{dateInfo.day}</div>
                          <div
                            className={`text-sm font-medium ${dateInfo.available ? "text-gray-900" : "text-gray-400"}`}
                          >
                            {new Date(dateInfo.date).getDate()}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Available Times (PST)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time, index) => (
                      <Button key={index} variant={index === 2 ? "default" : "outline"} size="sm" className="text-sm">
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Project Title</label>
                  <Input placeholder="Enter your project title" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Meeting Agenda</label>
                  <Textarea
                    placeholder="Briefly describe what you'd like to discuss, your project goals, or any specific questions you have..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Budget Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Project Budget Range (Optional)</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100k">Under $100K</SelectItem>
                      <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="over-5m">Over $5M</SelectItem>
                      <SelectItem value="tbd">To be discussed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Phone (Optional)</label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>

                {/* Meeting Summary */}
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Meeting Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span>Script Pitch (60 min)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>Friday, Feb 16, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>11:00 AM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span>Video Call</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t border-purple-300">
                        <span>Total Cost:</span>
                        <span>$150</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button className="flex-1">Confirm Booking</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Save as Draft
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By booking this meeting, you agree to our terms of service and cancellation policy. You can reschedule
                  or cancel up to 24 hours before the meeting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
