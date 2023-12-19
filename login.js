function submitLogin() {
    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // In a real-world scenario, you would send this data to the server for authentication
    // For simplicity, let's check a hardcoded user and password
    if (email === 'user@example.com' && password === 'password') {
      // Redirect to the main page after successful login
      window.location.href = 'index.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }