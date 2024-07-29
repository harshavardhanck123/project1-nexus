document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    const form = event.target;
    
    if (form.id === 'registrationform') {
        handleSubmit(event);
        
    } else {
        handleLogin(event);
    }
  });
});

function togglePasswordVisibility() {
  const passwordField = document.getElementById('password');
  const eyeIcon = document.getElementById('eyeIcon');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.src = 'https://img.icons8.com/ios-glyphs/20/000000/visible.png';
  } else {
    passwordField.type = 'password';
    eyeIcon.src = 'https://img.icons8.com/ios-glyphs/20/000000/invisible.png';
  }
}

function handleFileInputChange(event) {
  const avatarPreview = document.getElementById('avatarPreview');
  const avatarImage = document.getElementById('avatarImage');
  const avatarIcon = document.getElementById('avatarIcon');

  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      avatarImage.src = e.target.result;
      avatarImage.classList.remove('d-none');
      avatarIcon.classList.add('d-none');
    };
    reader.readAsDataURL(file);
  } else {
    avatarImage.classList.add('d-none');
    avatarIcon.classList.remove('d-none');
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let loading = true;
  const name= document.getElementById("name").value
  const submitButton = document.getElementById('submitButton');
     
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Registering...';

    // Simulate an API call
    setTimeout(() => {
      loading = false;
      submitButton.disabled = false;
      submitButton.textContent = 'Register';
      alert(`${name} Registered successfully!`);
      window.location.href = 'login.html';
    }, 2000);
    
  } else {
    console.error('Submit button not found');
  }
}

function handleLogin(event) {
  event.preventDefault();
  let loading = true;
  const email= document.getElementById("email").value
  const loginButton = document.getElementById('loginbutton');
  
  if (loginButton) {
    loginButton.disabled = true;
    loginButton.textContent = 'Login...';

    // Simulate an API call
    setTimeout(() => {
      loading = false;
      loginButton.disabled = false;
      loginButton.textContent = 'Login';
      alert(`${email} Login successfully!`);
    }, 2000);
  } else {
    console.error('Login button not found');
  }
}


document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const resetButton = document.getElementById('resetButton');
  
  resetButton.disabled = true;
  resetButton.textContent = 'Sending...';
  
  setTimeout(() => {
    alert('A reset link has been sent to ' + email);
    resetButton.disabled = false;
    resetButton.textContent = 'Send Reset Link';
    window.location.href = 'login.html';
  }, 2000);
});
