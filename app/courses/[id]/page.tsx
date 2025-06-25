import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Clock, Users, Star, Play, Download, MessageCircle, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch and learn industry best practices.",
    longDescription:
      "This comprehensive course takes you from beginner to advanced full-stack developer. You'll learn to build modern, scalable web applications using the latest technologies and frameworks. The course includes hands-on projects, real-world scenarios, and industry best practices that will prepare you for a successful career in web development.",
    instructor: "Sarah Johnson",
    instructorBio:
      "Senior Full Stack Developer with 8+ years of experience at top tech companies. Former lead developer at Google and startup founder.",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
    reviews: 342,
    price: "$299",
    level: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    syllabus: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+",
      "React.js & Hooks",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "Authentication & Security",
      "Deployment & DevOps",
    ],
    requirements: [
      "Basic understanding of HTML and CSS",
      "Familiarity with JavaScript basics",
      "Computer with internet connection",
      "Text editor (VS Code recommended)",
    ],
    whatYouLearn: [
      "Build full-stack web applications from scratch",
      "Master React.js and modern JavaScript",
      "Create RESTful APIs with Node.js",
      "Work with databases using MongoDB",
      "Implement user authentication and security",
      "Deploy applications to production",
      "Follow industry best practices and patterns",
    ],
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Learn data analysis, machine learning, and visualization using Python, pandas, and scikit-learn.",
    longDescription:
      "Dive deep into the world of data science with this comprehensive Python course. Learn to analyze complex datasets, build predictive models, and create stunning visualizations. Perfect for beginners looking to start a career in data science or professionals wanting to add data skills to their toolkit.",
    instructor: "Dr. Michael Chen",
    instructorBio:
      "PhD in Statistics, former Data Scientist at Netflix. Published researcher with 50+ papers in machine learning and statistics.",
    duration: "10 weeks",
    students: 890,
    rating: 4.9,
    reviews: 267,
    price: "$349",
    level: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    syllabus: [
      "Python Programming Basics",
      "NumPy & Pandas",
      "Data Visualization with Matplotlib",
      "Statistical Analysis",
      "Machine Learning Algorithms",
      "Deep Learning Introduction",
      "Real-world Projects",
    ],
    requirements: [
      "No prior programming experience required",
      "High school level mathematics",
      "Computer with Python installation capability",
      "Curiosity about data and statistics",
    ],
    whatYouLearn: [
      "Master Python for data analysis",
      "Clean and manipulate large datasets",
      "Create compelling data visualizations",
      "Build machine learning models",
      "Perform statistical analysis",
      "Work with real-world datasets",
      "Present findings effectively",
    ],
  },
]

interface CourseDetailPageProps {
  params: {
    id: string
  }
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const courseId = Number.parseInt(params.id)
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    notFound()
  }

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
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/auth" className="text-gray-600 hover:text-blue-600 transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Course Hero Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge className="bg-blue-100 text-blue-800 mb-2">{course.level}</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{course.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <span className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  {course.rating} ({course.reviews} reviews)
                </span>
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students} students
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Instructor</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-sm text-gray-600">{course.instructorBio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    size="sm"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-blue-600 hover:bg-white"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-4">{course.price}</div>
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                    <Button variant="outline" className="w-full">
                      Add to Wishlist
                    </Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificate:</span>
                      <span className="font-medium">Yes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Course */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{course.longDescription}</p>
                </CardContent>
              </Card>

              {/* What You'll Learn */}
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {course.whatYouLearn.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Course Syllabus */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Syllabus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.syllabus.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <span className="font-medium">{topic}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Play className="h-4 w-4" />
                          <span>Video</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Course Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">HD Video Lectures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Download className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Downloadable Resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Discussion Forum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Course Certificate</span>
                  </div>
                </CardContent>
              </Card>

              {/* Share Course */}
              <Card>
                <CardHeader>
                  <CardTitle>Share This Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Twitter
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Facebook
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
