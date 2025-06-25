"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Award, Bell, Play, Calendar, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">EduPlatform</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Continue your learning journey and track your progress.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-600">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5</div>
              <p className="text-xs text-gray-600">+2.1 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-gray-600">Web Development</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Streak</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-gray-600">Keep it up!</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Full Stack Web Development</h4>
                    <p className="text-sm text-gray-600">Lesson 5: React Hooks</p>
                    <Progress value={65} className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">65% complete</p>
                  </div>
                  <Button>Continue</Button>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Data Science with Python</h4>
                    <p className="text-sm text-gray-600">Lesson 3: Data Visualization</p>
                    <Progress value={30} className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">30% complete</p>
                  </div>
                  <Button variant="outline">Continue</Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning progress this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Completed "JavaScript ES6+" lesson</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Started "React Hooks" module</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Earned "Web Development Basics" certificate</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Certificate</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Joined discussion: "Best React Practices"</p>
                      <p className="text-xs text-gray-500">5 days ago</p>
                    </div>
                    <Badge variant="outline">Discussion</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">Live Q&A Session</p>
                    <Badge variant="secondary">Live</Badge>
                  </div>
                  <p className="text-xs text-gray-600">Full Stack Development</p>
                  <p className="text-xs text-gray-500">Today, 3:00 PM</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">Assignment Due</p>
                    <Badge variant="outline">Due Soon</Badge>
                  </div>
                  <p className="text-xs text-gray-600">React Project</p>
                  <p className="text-xs text-gray-500">Tomorrow, 11:59 PM</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">New Course Release</p>
                    <Badge className="bg-green-100 text-green-800">New</Badge>
                  </div>
                  <p className="text-xs text-gray-600">Advanced React Patterns</p>
                  <p className="text-xs text-gray-500">Next Monday</p>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <p className="text-sm font-medium">Course Update</p>
                  <p className="text-xs text-gray-600">New materials added to Full Stack Development</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <p className="text-sm font-medium">Achievement Unlocked</p>
                  <p className="text-xs text-gray-600">You've maintained a 7-day learning streak!</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <p className="text-sm font-medium">Reminder</p>
                  <p className="text-xs text-gray-600">Don't forget to submit your React project</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </CardContent>
            </Card>

            {/* Study Groups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Study Groups</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    FS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Full Stack Developers</p>
                    <p className="text-xs text-gray-500">24 members</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    DS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Data Science Hub</p>
                    <p className="text-xs text-gray-500">18 members</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    RN
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">React Native Devs</p>
                    <p className="text-xs text-gray-500">12 members</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
