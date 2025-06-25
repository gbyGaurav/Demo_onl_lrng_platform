// Course detail page functionality
const coursesData = [
  // Example course data
  {
    id: 1,
    title: "JavaScript Basics",
    level: "Beginner",
    description: "Learn the basics of JavaScript.",
    longDescription: "This course covers the fundamentals of JavaScript programming.",
    rating: 4.5,
    reviews: 100,
    students: 500,
    duration: "2 hours",
    instructor: "John Doe",
    instructorBio: "Experienced JavaScript developer.",
    whatYouLearn: ["Basic syntax", "Variables", "Functions"],
    syllabus: ["Introduction", "Variables and Data Types", "Control Structures"],
    requirements: ["Basic computer knowledge"],
  },
  // Add more courses as needed
]

function showNotification(message, type) {
  // Example implementation of showNotification
  console.log(`Notification (${type}): ${message}`)
}

function getFromStorage(key) {
  // Example implementation of getFromStorage
  return JSON.parse(localStorage.getItem(key))
}

function saveToStorage(key, value) {
  // Example implementation of saveToStorage
  localStorage.setItem(key, JSON.stringify(value))
}

document.addEventListener("DOMContentLoaded", () => {
  loadCourseDetail()
})

function loadCourseDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const courseId = Number.parseInt(urlParams.get("id"))

  if (!courseId) {
    showNotFound()
    return
  }

  const course = coursesData.find((c) => c.id === courseId)

  if (!course) {
    showNotFound()
    return
  }

  displayCourseDetail(course)
}

function displayCourseDetail(course) {
  const container = document.getElementById("courseDetailContent")
  if (!container) return

  // Update page title
  document.title = `${course.title} - EduPlatform`

  container.innerHTML = `
        <div class="course-detail-main">
            <div class="course-level-badge">
                <span class="badge badge-${course.level.toLowerCase()}">${course.level}</span>
            </div>
            <h1>${course.title}</h1>
            <p class="course-description-long">${course.longDescription || course.description}</p>
            
            <div class="course-meta">
                <div class="meta-item">
                    <i class="fas fa-star"></i>
                    <span>${course.rating} (${course.reviews || 0} reviews)</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <span>${course.students} students</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${course.duration}</span>
                </div>
            </div>
            
            <div class="instructor-info">
                <div class="instructor-avatar">${course.instructor
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}</div>
                <div class="instructor-details">
                    <h4>${course.instructor}</h4>
                    <p>${course.instructorBio || "Experienced instructor with years of industry expertise."}</p>
                </div>
            </div>
        </div>
        
        <div class="course-sidebar">
            <div class="course-card-sidebar">
                <div class="course-video-preview" onclick="playPreview()">
                    <i class="fas fa-play"></i>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="course-sidebar-content">
                    <div class="course-price-large">${course.price}</div>
                    <div class="course-actions">
                        <button class="btn btn-primary btn-full" onclick="enrollCourse(${course.id})">
                            Enroll Now
                        </button>
                        <button class="btn btn-outline btn-full" onclick="addToWishlist(${course.id})">
                            Add to Wishlist
                        </button>
                    </div>
                    <div class="course-includes">
                        <h4>This course includes:</h4>
                        <ul>
                            <li><i class="fas fa-video"></i> HD Video Lectures</li>
                            <li><i class="fas fa-download"></i> Downloadable Resources</li>
                            <li><i class="fas fa-comments"></i> Discussion Forum</li>
                            <li><i class="fas fa-certificate"></i> Certificate of Completion</li>
                            <li><i class="fas fa-mobile-alt"></i> Mobile Access</li>
                            <li><i class="fas fa-infinity"></i> Lifetime Access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `

  // Add course sections below
  addCourseSections(course)
}

function addCourseSections(course) {
  const container = document.getElementById("courseDetailContent")

  const sectionsHTML = `
        <div class="course-sections">
            <div class="course-section">
                <h3>About This Course</h3>
                <p>${course.longDescription || course.description}</p>
            </div>
            
            ${
              course.whatYouLearn
                ? `
            <div class="course-section">
                <h3>What You'll Learn</h3>
                <ul class="learning-list">
                    ${course.whatYouLearn.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </div>
            `
                : ""
            }
            
            <div class="course-section">
                <h3>Course Syllabus</h3>
                <ul class="syllabus-list">
                    ${course.syllabus
                      .map(
                        (topic, index) => `
                        <li class="syllabus-item">
                            <div class="syllabus-number">${index + 1}</div>
                            <div class="syllabus-content">
                                <span>${topic}</span>
                                <div class="syllabus-meta">
                                    <i class="fas fa-play"></i>
                                    <span>Video Lesson</span>
                                </div>
                            </div>
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
            
            ${
              course.requirements
                ? `
            <div class="course-section">
                <h3>Requirements</h3>
                <ul class="requirements-list">
                    ${course.requirements.map((req) => `<li>${req}</li>`).join("")}
                </ul>
            </div>
            `
                : ""
            }
            
            <div class="course-section">
                <h3>Share This Course</h3>
                <div class="share-buttons">
                    <button class="btn btn-social" onclick="shareOnTwitter('${course.title}')">
                        <i class="fab fa-twitter"></i> Twitter
                    </button>
                    <button class="btn btn-social" onclick="shareOnFacebook('${course.title}')">
                        <i class="fab fa-facebook"></i> Facebook
                    </button>
                    <button class="btn btn-social" onclick="shareOnLinkedIn('${course.title}')">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </button>
                </div>
            </div>
        </div>
    `

  container.insertAdjacentHTML("beforeend", sectionsHTML)
}

function showNotFound() {
  const container = document.getElementById("courseDetailContent")
  if (!container) return

  container.innerHTML = `
        <div class="not-found">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>Course Not Found</h2>
            <p>The course you're looking for doesn't exist or has been removed.</p>
            <a href="courses.html" class="btn btn-primary">Browse All Courses</a>
        </div>
    `
}

function playPreview() {
  showNotification("Video preview would play here", "info")
}

function enrollCourse(courseId) {
  // In a real application, this would handle the enrollment process
  showNotification("Enrollment process would start here. Please sign up or log in to continue.", "info")
}

function addToWishlist(courseId) {
  // Save to wishlist in localStorage
  const wishlist = getFromStorage("wishlist") || []
  if (!wishlist.includes(courseId)) {
    wishlist.push(courseId)
    saveToStorage("wishlist", wishlist)
    showNotification("Course added to wishlist!", "success")
  } else {
    showNotification("Course is already in your wishlist", "info")
  }
}

function shareOnTwitter(courseTitle) {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`Check out this course: ${courseTitle}`)
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank")
}

function shareOnFacebook(courseTitle) {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
}

function shareOnLinkedIn(courseTitle) {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(courseTitle)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, "_blank")
}
