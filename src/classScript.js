import { HomePage } from './pages/home.js'
import { ContactPage } from './pages/contact.js'
import { AboutPage } from './pages/about.js'

class Router {
  constructor() {
    this.app = document.getElementById('app')
    this.routes = {
      home: HomePage,
      contact: ContactPage,
      about: AboutPage,
    }
    console.log(this.routes)

    this.init()
  }

  init() {
    // Add click listeners to navigation links
    const routeLinks = document.querySelectorAll('[data-route]')
    console.log(routeLinks)
    routeLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const route = link.getAttribute('data-route')
        this.navigateTo(route)
      })
    })

    // Handle initial route or default to home
    const initialRoute = window.location.hash.replace('#', '') || 'home'
    this.navigateTo(initialRoute)

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
      const route = window.location.hash.replace('#', '')
      this.navigateTo(route)
    })
  }

  navigateTo(route) {
    // Clear previous page content
    this.app.innerHTML = ''

    // Render new page
    if (this.routes[route]) {
      const pageContent = this.routes[route]()
      this.app.appendChild(pageContent)

      // Update URL hash
      window.location.hash = route
    } else {
      // Handle 404
      this.app.innerHTML = '<h1>Page Not Found</h1>'
    }
  }
}

// Initialize router when the script loads
new Router()
