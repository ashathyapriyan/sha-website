// Mobile nav toggle
function toggleNav() {
  var menu = document.getElementById('mob-menu');
  if (!menu) return;
  var isOpen = menu.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  var btn = document.getElementById('hamburger-btn');
  if (btn) btn.textContent = isOpen ? '✕' : '☰';
}

function closeMobileNav() {
  var menu = document.getElementById('mob-menu');
  if (menu) menu.classList.remove('open');
  document.body.style.overflow = '';
  var btn = document.getElementById('hamburger-btn');
  if (btn) btn.textContent = '☰';
}

// Newsletter signup (client-side demo)
function subscribeNewsletter(event) {
  event.preventDefault();
  var form = event.target;
  var note = document.getElementById('newsletter-note');
  var email = form.querySelector('input[type="email"]').value;
  if (note) {
    note.textContent = 'Thanks! ' + email + ' is subscribed to the weekly digest.';
  }
  form.reset();
  return false;
}
