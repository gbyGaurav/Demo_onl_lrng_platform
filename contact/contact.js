// Contact page functionality
document.addEventListener("DOMContentLoaded", () => {
  initializeContactForm()
})

function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")
  if (!contactForm) return

  contactForm.addEventListener("submit", handleContactSubmit)

  // Add real-time validation
  const inputs = contactForm.querySelectorAll("input, select, textarea")
  inputs.forEach((input) => {
    input.addEventListener("blur", validateField)
    input.addEventListener("input", clearFieldError)
  })
}

function handleContactSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  // Validate form
  if (!validateContactForm(data)) {
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    // Reset form
    e.target.reset()

    // Reset button
    submitBtn.textContent = originalText
    submitBtn.disabled = false

    // Show success message
    alert("Thank you for your message! We'll get back to you soon.") // Temporary solution for showNotification

    // Save to localStorage for demo purposes
    saveContactSubmission(data)
  }, 2000)
}

function validateContactForm(data) {
  let isValid = true

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    showFieldError("name", "Please enter a valid name (at least 2 characters)")
    isValid = false
  }

  // Email validation
  if (!data.email || !validateEmail(data.email)) {
    showFieldError("email", "Please enter a valid email address")
    isValid = false
  }

  // Phone validation (optional but if provided, should be valid)
  if (data.phone && !validatePhone(data.phone)) {
    showFieldError("phone", "Please enter a valid phone number")
    isValid = false
  }

  // Subject validation
  if (!data.subject) {
    showFieldError("subject", "Please select a subject")
    isValid = false
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    showFieldError("message", "Please enter a message (at least 10 characters)")
    isValid = false
  }

  return isValid
}

function validateField(e) {
  const field = e.target
  const value = field.value.trim()

  clearFieldError(field.name)

  switch (field.name) {
    case "name":
      if (value.length < 2) {
        showFieldError("name", "Name must be at least 2 characters")
      }
      break
    case "email":
      if (value && !validateEmail(value)) {
        showFieldError("email", "Please enter a valid email address")
      }
      break
    case "phone":
      if (value && !validatePhone(value)) {
        showFieldError("phone", "Please enter a valid phone number")
      }
      break
    case "message":
      if (value.length < 10) {
        showFieldError("message", "Message must be at least 10 characters")
      }
      break
  }
}

function showFieldError(fieldName, message) {
  const field = document.querySelector(`[name="${fieldName}"]`)
  if (!field) return

  // Remove existing error
  clearFieldError(fieldName)

  // Add error class
  field.classList.add("error")

  // Create error message
  const errorDiv = document.createElement("div")
  errorDiv.className = "field-error"
  errorDiv.textContent = message
  errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `

  // Insert error message
  field.parentNode.appendChild(errorDiv)
}

function clearFieldError(fieldName) {
  const field = document.querySelector(`[name="${fieldName}"]`)
  if (!field) return

  field.classList.remove("error")

  const errorDiv = field.parentNode.querySelector(".field-error")
  if (errorDiv) {
    errorDiv.remove()
  }
}

function saveContactSubmission(data) {
  const submissions = getFromStorage("contactSubmissions") || []
  submissions.push({
    ...data,
    timestamp: new Date().toISOString(),
    id: Date.now(),
  })
  saveToStorage("contactSubmissions", submissions)
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^\d{10}$/ // Example regex for a 10-digit phone number
  return re.test(phone)
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// Add CSS for error states
const style = document.createElement("style")
style.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .field-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
`
document.head.appendChild(style)
