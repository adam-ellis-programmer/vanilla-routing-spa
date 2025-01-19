export function ContactPage() {
  const page = document.createElement('div')
  // page -> display none
  page.classList.add('page', 'active')
  page.innerHTML = `
    <div class='page-container'>
      <h1>Contact Us</h1>
      <form class='contact-form'>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button class="submit-btn" type="submit">Send</button>
      </form>
    </div>
  `

  const form = page.querySelector('.contact-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Create FormData object from the form
    const formData = new FormData(form)

    // Add the ID to the formValues object
    formData.append('id', crypto.randomUUID())

    // Convert FormData to a regular object
    const formValues = Object.fromEntries(formData)
    // Add the ID to the formValues object after
    // formValues.id = crypto.randomUUID()

    // Now you can access individual values
    console.log('Name:', formValues.name)
    console.log('Email:', formValues.email)
    console.log('Message:', formValues.message)
    console.log('ID:', formValues.id)

    // Or use the whole object
    console.log('All form data:', formValues)

    // Clear form after submit (optional)
    form.reset()
  })

  return page
}
