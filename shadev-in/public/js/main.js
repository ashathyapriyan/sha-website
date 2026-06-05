// Mobile nav toggle
function toggleNav() {
  var links = document.getElementById('nav-links');
  if (links) links.classList.toggle('open');
}

// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementById('nav-links');
  if (links) {
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }
});

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
