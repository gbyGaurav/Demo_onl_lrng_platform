// Courses page functionality
const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
    level: "Intermediate",
    students: 1250,
    duration: "12 weeks",
    rating: 4.8,
    reviews: 342,
    price: "$299",
    instructor: "Sarah Johnson",
    poster: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Learn data analysis, machine learning, and visualization using Python, pandas, and scikit-learn.",
    level: "Beginner",
    students: 890,
    duration: "10 weeks",
    rating: 4.9,
    reviews: 267,
    price: "$349",
    instructor: "Dr. Michael Chen",
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Create native mobile applications for iOS and Android using React Native and modern development practices.",
    level: "Intermediate",
    students: 675,
    duration: "8 weeks",
    rating: 4.7,
    reviews: 189,
    price: "$249",
    instructor: "Alex Rodriguez",
    poster: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "Digital Marketing Mastery",
    description: "Comprehensive digital marketing course covering SEO, social media, content marketing, and analytics.",
    level: "Beginner",
    students: 1450,
    duration: "6 weeks",
    rating: 4.6,
    reviews: 423,
    price: "$199",
    instructor: "Emma Thompson",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    description: "Master Amazon Web Services and cloud architecture. Prepare for AWS certification exams.",
    level: "Advanced",
    students: 520,
    duration: "14 weeks",
    rating: 4.8,
    reviews: 156,
    price: "$399",
    instructor: "James Wilson",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "UI/UX Design Principles",
    description:
      "Learn user interface and user experience design principles, tools, and best practices for modern applications.",
    level: "Beginner",
    students: 980,
    duration: "9 weeks",
    rating: 4.7,
    reviews: 298,
    price: "$279",
    instructor: "Lisa Park",
    poster: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&crop=center",
  },
]

document.addEventListener("DOMContentLoaded", () => {
  loadCourses()
  initializeFilters()
})

function loadCourses() {
  const coursesGrid = document.getElementById("coursesGrid")
  if (!coursesGrid) return

  coursesGrid.innerHTML = ""

  coursesData.forEach((course) => {
    const courseCard = createCourseCard(course)
    coursesGrid.appendChild(courseCard)
  })
}

function createCourseCard(course) {
  const card = document.createElement("div")
  card.className = "course-card"

  card.innerHTML = `
        <div class="course-image">
            <img src="${course.poster}" alt="${course.title}" loading="lazy">
            <div class="course-level">${course.level}</div>
            <div class="course-overlay">
                <button class="preview-btn" onclick="previewCourse(${course.id})">
                    <i class="fas fa-play"></i>
                    Preview
                </button>
            </div>
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span><i class="fas fa-users"></i> ${course.students} students</span>
                <span><i class="fas fa-clock"></i> ${course.duration}</span>
            </div>
            <div class="course-stats">
                <div class="course-rating">
                    <i class="fas fa-star"></i>
                    <span>${course.rating} (${course.reviews || 0} reviews)</span>
                </div>
                <div class="course-price">${course.price}</div>
            </div>
            <p class="course-instructor">Instructor: ${course.instructor}</p>
            <button class="btn btn-primary btn-full" onclick="viewCourseDetails(${course.id})">
                View Course Details
            </button>
        </div>
    `

  return card
}

function previewCourse(courseId) {
  const course = coursesData.find((c) => c.id === courseId)
  if (course) {
    alert(`Preview for "${course.title}" would play here. This would show a sample video or course overview.`)
  }
}

function viewCourseDetails(courseId) {
  // Open course details in new tab
  window.open(`course-detail.html?id=${courseId}`, "_blank")
}

// Search and filter functionality
function initializeFilters() {
  const searchInput = document.getElementById("searchInput")
  const levelFilter = document.getElementById("levelFilter")
  const priceFilter = document.getElementById("priceFilter")

  if (searchInput) {
    searchInput.addEventListener("input", filterCourses)
  }

  if (levelFilter) {
    levelFilter.addEventListener("change", filterCourses)
  }

  if (priceFilter) {
    priceFilter.addEventListener("change", filterCourses)
  }
}

function filterCourses() {
  const searchTerm = document.getElementById("searchInput")?.value.toLowerCase() || ""
  const levelFilter = document.getElementById("levelFilter")?.value || ""
  const priceFilter = document.getElementById("priceFilter")?.value || ""

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.instructor.toLowerCase().includes(searchTerm)

    const matchesLevel = !levelFilter || course.level === levelFilter

    let matchesPrice = true
    if (priceFilter) {
      const price = Number.parseInt(course.price.replace("$", ""))
      switch (priceFilter) {
        case "under200":
          matchesPrice = price < 200
          break
        case "200to300":
          matchesPrice = price >= 200 && price <= 300
          break
        case "over300":
          matchesPrice = price > 300
          break
      }
    }

    return matchesSearch && matchesLevel && matchesPrice
  })

  displayFilteredCourses(filteredCourses)
}

function displayFilteredCourses(courses) {
  const coursesGrid = document.getElementById("coursesGrid")
  if (!coursesGrid) return

  coursesGrid.innerHTML = ""

  if (courses.length === 0) {
    coursesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No courses found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `
    return
  }

  courses.forEach((course) => {
    const courseCard = createCourseCard(course)
    coursesGrid.appendChild(courseCard)
  })
}
