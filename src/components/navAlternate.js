// Nav component
import { mainNavRoutes } from '../routes/routes.js'
export function Nav() {
  const nav = document.createElement('nav')
  nav.classList.add('nav')

  // prettier-ignore
  const navItems = mainNavRoutes
    .map((route) => `<li> <a href="#" data-route="${route.path}">${route.label}</a></li>`)
    .join('')

  nav.innerHTML = `
    <ul class="nav-container">
      ${navItems}
    </ul>`

  return nav
}
