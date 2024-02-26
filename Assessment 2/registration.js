document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registrationForm');
  
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    const formData = new FormData(registrationForm);
    const userData = {
      username: formData.get('username'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      dob: formData.get('dob'),
      gender: formData.get('gender'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword')
    };

   
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

   
    localStorage.setItem('userData', JSON.stringify(userData));

 
    window.location.href = "profile.html";
  });
});
