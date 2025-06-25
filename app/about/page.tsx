import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Mail, Phone } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Shreshta Brijesh",
    role: "Team Leader",
    email: "shreshta.brijesh@gmail.com",
    phone: "9961270451",
  },
  {
    name: "Gaurav Bharat Deore",
    role: "Developer",
    email: "bharatdeore7813@gmail.com",
    phone: "9373446328",
  },
  {
    name: "HARIPRIYA PL",
    role: "Developer",
    email: "2023is_haripriyapl_b@nie.ac.in",
    phone: "8088565324",
  },
  {
    name: "Shreya Claris Justin",
    role: "Developer",
    email: "shreya.claris@gmail.com",
    phone: "9048621505",
  },
  {
    name: "Abhyuday Sinha",
    role: "Developer",
    email: "sinhaabhyuday25@gmail.com",
    phone: "7704803589",
  },
]

export default function AboutPage() {
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
            <Link href="/about" className="text-blue-600 font-medium">
              About
            </Link>
            <Link href="/auth" className="text-gray-600 hover:text-blue-600 transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About EduPlatform</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're passionate about making quality education accessible to everyone, everywhere. Our platform combines
            cutting-edge technology with expert instruction to deliver an unparalleled learning experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              EduPlatform is designed to deliver flexible and interactive online education that adapts to your learning
              style and schedule. We believe that education should be accessible, engaging, and effective for learners
              of all backgrounds and skill levels.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Quality Education</h4>
                <p className="text-gray-600">
                  Expert-designed courses with industry-relevant content and practical applications.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Flexible Learning</h4>
                <p className="text-gray-600">Learn at your own pace with 24/7 access across all your devices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Community Support</h4>
                <p className="text-gray-600">
                  Connect with instructors and peers through our interactive discussion channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Secure Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced security measures to protect your personal information and learning progress.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intuitive tools for organizing, tracking, and managing your learning journey.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Live Virtual Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interactive live sessions with real-time collaboration and Q&A opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed analytics and insights to monitor your learning progress and achievements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multi-Device Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamless learning experience across desktop, tablet, and mobile devices.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Safe and secure payment gateways for enrolling in premium courses and content.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Development Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Built with Modern Technology</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our platform is built using cutting-edge technologies to ensure scalability, security, and an exceptional
            user experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Development Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-left">
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>VS Code - Primary development environment</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Next.js - React framework for production</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>TypeScript - Type-safe development</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Tailwind CSS - Utility-first styling</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Database & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-left">
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>MongoDB - NoSQL database solution</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>MongoDB Compass - Database management</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Cloud hosting - Scalable infrastructure</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>CDN integration - Fast content delivery</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join our community of learners and start your educational journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Browse Courses
              </Button>
            </Link>
            <Link href="/auth">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
