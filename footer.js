document.addEventListener('DOMContentLoaded', () => {
const template = document.createElement('template');
template.innerHTML = `
    <footer id="contact" class="site-footer">
      <div class="container footer-inner">
        <div>
          <div class="brand footer-brand">
            <span class="brand-mark">S</span>
            <span>STEM Opportunities</span>
          </div>
        </div>
           <a class="button" href="create-profile.html">Create a Profile</a>
        <a class="button" href="contact.html">Contact Us</a>
      </div>
    </footer>
    `;
    document.body.appendChild(template.content);
});
