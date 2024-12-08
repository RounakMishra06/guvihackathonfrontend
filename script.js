// Select the password input and show/hide icon
const passwordInput = document.querySelector('.pas');
const showHideIcon = document.querySelector('.show-hide');

// Toggle password visibility
showHideIcon.addEventListener('click', () => {
  const isPasswordVisible = passwordInput.type === 'text';
  passwordInput.type = isPasswordVisible ? 'password' : 'text';
  showHideIcon.name = isPasswordVisible ? 'eye-outline' : 'eye-off-outline';
});

// Password validation
passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  ) {
    passwordInput.style.borderColor = 'green';
  } else {
    passwordInput.style.borderColor = 'red';
  }
});
