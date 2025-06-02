fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const phoneList = users.map(user => user.phone);
    const webEmailPairs = users.map(user => ({
      website: user.website,
      email: user.email
    }));

    // Display phone numbers
    const phoneSection = document.getElementById('user-phone');
    phoneSection.innerHTML = '<h3>Phone Numbers</h3>';
    phoneList.forEach(phone => {
      const p = document.createElement('p');
      p.textContent = phone;
      phoneSection.appendChild(p);
    });

    // Display website/email pairs
    const pairSection = document.getElementById('user-web-email');
    pairSection.innerHTML = '<h3>Website & Email Pairs</h3>';
    webEmailPairs.forEach(pair => {
      const p = document.createElement('p');
      p.textContent = `Website: ${pair.website} | Email: ${pair.email}`;
      pairSection.appendChild(p);
    });
  });
