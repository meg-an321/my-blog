const submitBtn = document.querySelector('#submit');
const switcherBtn = document.querySelector('#switcher');
const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const postsEl = document.querySelector('#posts');
const htmlEl = document.querySelector('html');
const conatiner = document.querySelector('.continer');

//const setTheme = function() {
  //switcher.dataset.theme = localStorage.getItem('theme');
//}
let mode = 'light';
switcher.addEventListener('click', function (){
  if (htmlEl.dataset.theme === 'dark') {
    htmlEl.dataset.theme = 'light';
  } else {
    htmlEl.dataset.theme = 'dark';
  }
  localStorage.setItem('theme', htmlEl.dataset.theme);
});


const renderPosts = function() {
  // Retrives data from localStorage if it exists.
  const data = localStorage.getItem('posts');

  // Parse the data and tf no posts are stored, provide an empty array
  const posts = JSON.parse(data) || [];

  for (let post of posts) {
    const headerEl = document.createElement('header');
    const blogPostEl = document.createElement('article');
    const pEl = document.createElement('p');

    headerEl.textContent =  post.name; 
    pEl.textContent = "";

    blogPostEl.textContent =  post.title; 
    pEl.textContent = "";

    pEl.textContent =  post.content; 
    pEl.textContent = "";

    blogPostEl.appendChild(headerEl);
    blogPostEl.appendChild(pEl);
    postsEl.appendChild(blogPostEl);

  }
}


const handleSubmit = function(event) {
  event.preventDefault();

  const data = localStorage.getItem('posts');

  const posts = JSON.parse(data) || [];

  const name = nameInput.value.trim();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
 
  
  // Creates a post object
  const post = {
    name: name,
    title: title,
    content: content,
  };

  // Append the post object to the posts collection
  posts.push(post);

  // Serialize the data prior to saving to localStorage
  const serializedData = JSON.stringify(posts);
if (name === '' || title === '' || content === '') {
  return alert('error', 'please complete the form')
};

  // Save serialized data to localStorage
  localStorage.setItem('posts', serializedData);

  setTimeout(function() {
    location.assign('./blog.html');
  }, 250);

  storeData();
};


if (submitBtn) submitBtn.addEventListener('click', handleSubmit);


if (postsEl) renderPosts();

setTheme();


