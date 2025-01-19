import { AboutPage, ContactPage, HomePage, Footer, Nav } from './index.js'
// load css dynamically IIFE
;(() => {
  const css = [
    { name: 'app', linkRel: 'stylesheet', linkHref: '../src/styles/app.css' },
    { name: 'main', linkRel: 'stylesheet', linkHref: '../src/styles/styles.css' },
  ]

  css.forEach((item) => {
    const link = document.createElement('link')
    link.rel = item.linkRel
    link.href = item.linkHref
    document.head.appendChild(link)
  })
})()
//
// load favicon
;(function loadFavicon() {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/svg+xml'
  link.href = './public/favicon.ico'
  document.head.appendChild(link)
})()

// lookup routes
const routes = {
  home: HomePage,
  contact: ContactPage,
  about: AboutPage,
}

const createLayout = () => {
  const app = document.getElementById('app')

  // Create and add navigation
  const nav = Nav()

  // Create main content container
  const mainContent = document.createElement('main')
  mainContent.id = 'main-content'
  mainContent.classList.add('main-content')

  // Add footer
  const footer = Footer()

  // Set up the layout structure
  app.appendChild(nav) // Add nav first
  app.appendChild(mainContent) // Then main content
  app.appendChild(footer) // Then footer

  return mainContent
}

const navigateTo = (route) => {
  const mainContent = document.getElementById('main-content')

  // Clear previous page content
  // mainContent.innerHTML = ''
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild)
  }

  // Render new page
  if (routes[route]) {
    const pageContent = routes[route]()
    mainContent.appendChild(pageContent)

    // Update URL hash
    window.location.hash = route
  } else {
    // Handle 404
    mainContent.innerHTML = '<h1>Page Not Found</h1>'
  }
}

const initializeApp = () => {
  // Create initial layout
  createLayout()

  // Add click listeners to navigation links
  const routeLinks = document.querySelectorAll('[data-route]')

  routeLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const route = link.getAttribute('data-route')
      console.log('route:', route)
      // changes # as we click through the pages
      window.location.hash = route
    })
  })

  // Handle initial route or default to home
  const initialRoute = window.location.hash.replace('#', '') || 'home'
  navigateTo(initialRoute)

  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    // returns page instead of #page
    const route = window.location.hash.replace('#', '')
    navigateTo(route)
  })
}

// Initialize app when the script loads
initializeApp()
