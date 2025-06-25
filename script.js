// Global JavaScript functionality

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navMenu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (header) {
      if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.95)"
        header.style.backdropFilter = "blur(10px)"
      } else {
        header.style.background = "white"
        header.style.backdropFilter = "none"
      }
    }
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".feature-card, .course-card, .team-card, .mission-item")
  animateElements.forEach((el) => observer.observe(el))
})

// Utility Functions
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === "success" ? "background: #10b981;" : ""}
        ${type === "error" ? "background: #ef4444;" : ""}
        ${type === "info" ? "background: #3b82f6;" : ""}
    `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Form validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^[+]?[1-9][\d]{0,15}$/
  return re.test(phone.replace(/\s/g, ""))
}

// Local Storage helpers
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (error) {
    console.error("Error saving to localStorage:", error)
    return false
  }
}

function getFromStorage(key) {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error("Error reading from localStorage:", error)
    return null
  }
}

// Course data (would typically come from an API)
const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
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
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Create native mobile applications for iOS and Android using React Native and modern development practices.",
    instructor: "Alex Rodriguez",
    duration: "8 weeks",
    students: 675,
    rating: 4.7,
    reviews: 189,
    price: "$249",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
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
    reviews: 423,
    price: "$199",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
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
    reviews: 156,
    price: "$399",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
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
    reviews: 298,
    price: "$279",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
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

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { coursesData, showNotification, validateEmail, validatePhone, saveToStorage, getFromStorage }
}
