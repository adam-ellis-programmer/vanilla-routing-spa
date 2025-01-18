export function Nav() {
  const nav = document.createElement('nav')
  nav.classList.add('nav')
  nav.innerHTML = `
    <ul class="nav-container">
        <li>
          <a href="#" data-route="home">Home</a>
        </li>
        <li>
          <a href="#" data-route="contact">Contact</a>
        </li>
        <li>
          <a href="#" data-route="about">About</a>
        </li>
      </ul>`

  return nav
}
