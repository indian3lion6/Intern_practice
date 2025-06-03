const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  // Reset errors and success
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email format.';
    valid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    valid = false;
  }

  // If valid, show success
  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
  }
});

