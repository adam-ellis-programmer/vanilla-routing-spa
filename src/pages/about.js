export function AboutPage() {
  const page = document.createElement('div')
  // page -> display none
  page.classList.add('page', 'active')
  page.innerHTML = `
        <div  class='page-container' >
        <h1>About Us</h1>
        <p>We are a small team passionate about creating modular web applications.</p>
        <p>Our goal is to demonstrate clean, maintainable JavaScript routing.</p>
      </div>
        `
  return page
}
