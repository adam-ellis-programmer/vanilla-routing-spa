export function Footer() {
  const date = new Date()

  const footer = document.createElement('footer')
  footer.classList.add('footer')
  footer.innerHTML = `
    <div class="footer-content">
      <p>© ${date.getFullYear()}  Your Website</p>
      <nav class="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  `
  return footer
}
