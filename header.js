const template = document.createElement('template');
template.innerHTML = `
      <header class="site-header">
      <nav class="nav container">
        <div class="brand">
          <a href="index.html">
            <span class="brand-mark"> 🌳 </span>
            </span> </a>
          <a href="index.html">
            <span> STEM Opportunities</span>
          </a>
        </div>
        <div class="nav-links">
          <a href="programs.html">Programs</a>
          <a href="about_us.html">About Us</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <a class="button button-small" href="create-profile.html">Create a Profile</a>
      </nav>
    </header> 
    `
    document.body.appendChild(template.content);

