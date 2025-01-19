export function HomePage() {
  const page = document.createElement('div')
  // page -> display none
  page.classList.add('page', 'active')
  page.innerHTML = `
  <div class='page-container' >
        <h1>Home Page</h1>
        <p>Welcome to our awesome website!</p>
        <p>This is a modular routing example using vanilla JavaScript.</p>
    </div>
        `
  return page
}
