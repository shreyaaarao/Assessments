document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit');
  
    
    function checkFormValidity() {
      if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', true);
      }
    }
  

    usernameInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);
  
    
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      
      if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please fill in both fields.');
        return;
      }
  
      
      window.location.href = 'profile.html';
    });
  });
  