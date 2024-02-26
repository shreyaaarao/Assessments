document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const profileContainer = document.querySelector('.profile-container');
  
    if (userData) {
      const profileHTML = `
        <p>Username: ${userData.username}</p>
        <p>First Name: ${userData.firstName}</p>
        <p>Last Name: ${userData.lastName}</p>
        <p>Date of Birth: ${userData.dob}</p>
        <p>Gender: ${userData.gender}</p>
      `;
      profileContainer.innerHTML = profileHTML;
    } else {
      profileContainer.innerHTML = '<p>No user data found.</p>';
    }
  });
  