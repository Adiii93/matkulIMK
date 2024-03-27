const loginForm = document.getElementById('loginForm');
const menuPage = document.getElementById('menu-page');
const menuForm = document.getElementById('menuForm');

function buton1() {
    window.location.href = "tampilan1.html";
  }
function buton2() {
   window.location.href = "tampilan2.html";
  }
function buton3() {
   window.location.href = "tampilan3.html";
  }
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const ktp = document.getElementById('ktp').value;
  const pin = document.getElementById('pin').value;
  if (ktp === '1234567890' && pin === '123456') {
    alert('Login successful!');
    // Redirect the user to the dashboard page
    window.location.href = 'buton.html';
  } else {
    alert('KTP number or PIN is incorrect.');
  }
});
// if (ktp === '1234567890' && pin === '123456') {
//     // Set the user's access level (e.g. "admin", "user", "guest")
//     localStorage.setItem('accessLevel', 'admin');
//     alert('Login successful!');
//     window.location.href = 'tampilan.html';
//   }
  
//   // Check if the user is logged in
//   if (!localStorage.getItem('accessLevel')) {
//     // Redirect the user to the login page
//     window.location.href = 'isian.html';
//   }
  
//   // Check if the user is an admin
//   if (localStorage.getItem('accessLevel') === 'admin') {
//     // Show the admin dashboard
//     document.getElementById('admin-dashboard').style.display = 'block';
//   }