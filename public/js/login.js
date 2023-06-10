
const loginBtn = document.getElementById('login-button');


const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(email, password);
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };


  loginBtn.addEventListener('click', loginFormHandler);




const signupFormHandler = async (event) => {
    event.preventDefault();
  

    const userName = document.querySelector('#user-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (userName && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#signup-button').addEventListener('click', signupFormHandler);