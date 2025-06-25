import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
    price: "$299",
    level: "Intermediate",
    image: "/placeholder.svg?height=200&width=300",
    syllabus: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+",
      "React.js & Hooks",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "Authentication & Security",
      "Deployment & DevOps",
    ],
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Learn data analysis, machine learning, and visualization using Python, pandas, and scikit-learn.",
    instructor: "Dr. Michael Chen",
    duration: "10 weeks",
    students: 890,
    rating: 4.9,
    price: "$349",
    level: "Beginner",
    image: "/placeholder.svg?height=200&width=300",
    syllabus: [
      "Python Programming Basics",
      "NumPy & Pandas",
      "Data Visualization with Matplotlib",
      "Statistical Analysis",
      "Machine Learning Algorithms",
      "Deep Learning Introduction",
      "Real-world Projects",
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Create native mobile applications for iOS and Android using React Native and modern development practices.",
    instructor: "Alex Rodriguez",
    duration: "8 weeks",
    students: 675,
    rating: 4.7,
    price: "$249",
    level: "Intermediate",
    image: "/placeholder.svg?height=200&width=300",
    syllabus: [
      "React Native Fundamentals",
      "Navigation & Routing",
      "State Management",
      "Native Device Features",
      "API Integration",
      "Testing & Debugging",
      "App Store Deployment",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Mastery",
    description: "Comprehensive digital marketing course covering SEO, social media, content marketing, and analytics.",
    instructor: "Emma Thompson",
    duration: "6 weeks",
    students: 1450,
    rating: 4.6,
    price: "$199",
    level: "Beginner",
    image: "/placeholder.svg?height=200&width=300",
    syllabus: [
      "Digital Marketing Strategy",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Paid Advertising",
    ],
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    description: "Master Amazon Web Services and cloud architecture. Prepare for AWS certification exams.",
    instructor: "James Wilson",
    duration: "14 weeks",
    students: 520,
    rating: 4.8,
    price: "$399",
    level: "Advanced",
    image: "/placeholder.svg?height=200&width=300",
    syllabus: [
      "AWS Fundamentals",
      "EC2 & VPC",
      "S3 & Storage Services",
      "Database Services",
      "Security & IAM",
      "Monitoring & Logging",
      "Certification Prep",
    ],
  },
  {
    id: 6,
    title: "UI/UX Design Principles",
    description:
      "Learn user interface and user experience design principles, tools, and best practices for modern applications.",
    instructor: "Lisa Park",
    duration: "9 weeks",
    students: 980,
    rating: 4.7,
    price: "$279",
    level: "Beginner",
    image: "/placeholder.svg?height=200&width=300",
    syllabus: [
      "Design Thinking Process",
      "User Research Methods",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Figma & Design Tools",
      "Usability Testing",
      "Portfolio Development",
    ],
  },
]

export default function CoursesPage() {
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
            <Link href="/courses" className="text-blue-600 font-medium">
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

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Explore Our Courses</h2>
          <p className="text-xl opacity-90">
            Discover a wide range of courses designed to advance your skills and career
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600">{course.level}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students} students
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {course.rating} rating
                      </span>
                      <span className="text-lg font-bold text-blue-600">{course.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                    <Link href={`/courses/${course.id}`} target="_blank">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">View Course Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
