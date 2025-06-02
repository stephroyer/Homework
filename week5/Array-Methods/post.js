fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
  .then(response => response.json())
  .then(posts => {
    const user5Posts = posts.filter(post => post.userId === 5);
    const titleBodyPairs = user5Posts.map(post => ({
      title: post.title,
      body: post.body
    }));

    // Display User 5's posts
    const postSection = document.getElementById('user5-posts');
    postSection.innerHTML = '<h3>User 5\'s Posts</h3>';
    titleBodyPairs.forEach(pair => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${pair.title}</strong><p>${pair.body}</p>`;
      postSection.appendChild(div);
    });
  });
