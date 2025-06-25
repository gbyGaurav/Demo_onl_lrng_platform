// Authentication page functionality
document.addEventListener("DOMContentLoaded", () => {
  initializeAuthPage()
})

function initializeAuthPage() {
  // Initialize form switching
  const tabButtons = document.querySelectorAll(".tab-btn")
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tab = this.textContent.toLowerCase().replace(" ", "")
      switchTab(tab === "signup" ? "signup" : "login")
    })
  })

  // Initialize forms
  const loginForm = document.querySelector("#loginForm form")
  const signupForm = document.querySelector("#signupForm form")

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }

  if (signupForm) {
    signupForm.addEventListener("submit", handleSignup)
  }

  // Initialize password toggles
  const passwordToggles = document.querySelectorAll(".password-toggle")
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const input = this.parentNode.querySelector("input")
      togglePassword(input.id)
    })
  })
}

function switchTab(tab) {
  // Update tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn")
  tabButtons.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.textContent.toLowerCase().includes(tab)) {
      btn.classList.add("active")
    }
  })

  // Update forms
  const forms = document.querySelectorAll(".auth-form")
  forms.forEach((form) => {
    form.classList.remove("active")
  })

  const targetForm = document.getElementById(tab + "Form")
  if (targetForm) {
    targetForm.classList.add("active")
  }
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId)
  const toggle = input.parentNode.querySelector(".password-toggle i")

  if (input.type === "password") {
    input.type = "text"
    toggle.className = "fas fa-eye-slash"
  } else {
    input.type = "password"
    toggle.className = "fas fa-eye"
  }
}

function handleLogin(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = {
    email: formData.get("email") || document.getElementById("loginEmail").value,
    password: formData.get("password") || document.getElementById("loginPassword").value,
    remember: document.getElementById("remember")?.checked || false,
  }

  // Validate login form
  if (!validateLoginForm(data)) {
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Signing In..."
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitBtn.textContent = originalText
    submitBtn.disabled = false

    // Save user session
    const user = {
      email: data.email,
      name: "John Doe", // Would come from API
      loginTime: new Date().toISOString(),
    }

    saveToStorage("currentUser", user)

    if (data.remember) {
      saveToStorage("rememberUser", true)
    }

    showNotification("Login successful! Redirecting...", "success")

    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html"
    }, 1500)
  }, 2000)
}

function handleSignup(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = {
    firstName: formData.get("firstName") || document.getElementById("firstName").value,
    lastName: formData.get("lastName") || document.getElementById("lastName").value,
    email: formData.get("email") || document.getElementById("signupEmail").value,
    password: formData.get("password") || document.getElementById("signupPassword").value,
    confirmPassword: document.getElementById("confirmPassword").value,
    terms: document.getElementById("terms")?.checked || false,
  }

  // Validate signup form
  if (!validateSignupForm(data)) {
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Creating Account..."
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitBtn.textContent = originalText
    submitBtn.disabled = false

    // Save user data
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      signupTime: new Date().toISOString(),
    }

    saveToStorage("currentUser", user)

    showNotification("Account created successfully! Welcome to EduPlatform!", "success")

    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html"
    }, 1500)
  }, 2000)
}

function validateLoginForm(data) {
  let isValid = true

  if (!data.email || !validateEmail(data.email)) {
    showNotification("Please enter a valid email address", "error")
    isValid = false
  }

  if (!data.password || data.password.length < 6) {
    showNotification("Password must be at least 6 characters", "error")
    isValid = false
  }

  return isValid
}

function validateSignupForm(data) {
  let isValid = true

  if (!data.firstName || data.firstName.trim().length < 2) {
    showNotification("First name must be at least 2 characters", "error")
    isValid = false
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    showNotification("Last name must be at least 2 characters", "error")
    isValid = false
  }

  if (!data.email || !validateEmail(data.email)) {
    showNotification("Please enter a valid email address", "error")
    isValid = false
  }

  if (!data.password || data.password.length < 8) {
    showNotification("Password must be at least 8 characters", "error")
    isValid = false
  }

  if (data.password !== data.confirmPassword) {
    showNotification("Passwords do not match", "error")
    isValid = false
  }

  if (!data.terms) {
    showNotification("Please accept the Terms of Service and Privacy Policy", "error")
    isValid = false
  }

  return isValid
}

// Social login handlers
function handleGoogleLogin() {
  showNotification("Google login would be implemented here", "info")
}

function handleGithubLogin() {
  showNotification("GitHub login would be implemented here", "info")
}

// Add event listeners for social buttons
document.addEventListener("DOMContentLoaded", () => {
  const googleBtns = document.querySelectorAll(".btn-social")
  const githubBtns = document.querySelectorAll(".btn-social")

  googleBtns.forEach((btn) => btn.addEventListener("click", handleGoogleLogin))
  githubBtns.forEach((btn) => btn.addEventListener("click", handleGithubLogin))
})

// Declare functions used in the code
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function showNotification(message, type) {
  console.log(`Notification (${type}): ${message}`)
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
