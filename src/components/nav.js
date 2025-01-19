export function Nav() {
  const routes = [
    { path: 'home', label: 'Home' },
    { path: 'contact', label: 'Contact' },
    { path: 'about', label: 'About' },
  ]

  const nav = document.createElement('nav')
  nav.classList.add('nav')

  const ul = document.createElement('ul')
  ul.classList.add('nav-container')

  const fragment = document.createDocumentFragment()

  routes.forEach((route) => {
    const li = document.createElement('li')
    const a = document.createElement('a')

    a.href = '#'
    a.dataset.route = route.path
    a.textContent = route.label

    li.appendChild(a)
    fragment.appendChild(li)
  })

  ul.appendChild(fragment)
  nav.appendChild(ul)
  return nav
}
