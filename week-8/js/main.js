document.addEventListener("DOMContentLoaded", () => {
  // --- Update footer year ---
  const yearEls = document.querySelectorAll("[id^='year']");
  yearEls.forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // --- Render posts on blog.html ---
  const postsContainer = document.getElementById("posts");
  if (postsContainer && window.POSTS) {
    window.POSTS.forEach(post => {
      const postEl = document.createElement("article");
      postEl.classList.add("post-card");

      postEl.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <h2>${post.title}</h2>
        <p class="date">${new Date(post.date).toDateString()}</p>
        <p>${post.excerpt}</p>
        <a href="post.html?id=${post.id}" class="read-more">Read more</a>
      `;

      postsContainer.appendChild(postEl);
    });
  }

  // --- Render single post on post.html ---
  const singlePostContainer = document.getElementById("single-post");
  if (singlePostContainer && window.POSTS) {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");
    const post = window.POSTS.find(p => p.id === postId);

    if (post) {
      singlePostContainer.innerHTML = `
        <article class="single-post">
          <h1>${post.title}</h1>
          <p class="date">${new Date(post.date).toDateString()}</p>
          <img src="${post.image}" alt="${post.title}">
          <div class="content">${post.content}</div>
        </article>
      `;
    } else {
      singlePostContainer.innerHTML = `<p>Post not found.</p>`;
    }
  }
});
