const userList = document.getElementById('user-list');

function fetchUserData() {
  userList.innerHTML = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok!');
      }
      return response.json();
    })
    .then(users => {
      userList.innerHTML = ''; // clear loading
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user-card';
        userDiv.innerHTML = `
            <img src="https://i.pravatar.cc/70?u=${user.id}" alt="User Photo" class="user-photo">
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;

        userList.appendChild(userDiv);
      });
    })
    .catch(error => {
      userList.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
}

// Fetch data initially
fetchUserData();
