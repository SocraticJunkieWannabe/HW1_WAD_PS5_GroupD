
// takes input ISO date string from JSON
function formatDate(dateString) {
  // Date object from iso string
    const date = new Date(dateString);
    // extract day month etc by converting the whole thing to strings
    // and using the getDate getMonth etc methods
    // padstart is used to ensure two digit format
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function fetchOnlineJSON()
{
  fetch('https://api.jsonbin.io/v3/b/68ff2c4bae596e708f2fd854')
  .then((response) => response.json())
  .then(json => {

    const container = document.getElementById('posts-container');
    const template = document.getElementById('post-template');

    json["record"].forEach(item => {
      // Clone the template content
      const clone = template.content.cloneNode(true);
      
      // Fill in the data
      clone.querySelector('.post-description').textContent = item.body;
      clone.querySelector('.post-image').src = item.img;
      clone.querySelector('.post-author-pfp').src = item.profile_picture;
      clone.querySelector('.post-date').textContent = formatDate(item.create_time);
      clone.querySelector('.username').textContent = item.author_name;

      // Append to container
      container.appendChild(clone);
    });
  });
}

function fetchLocalJSON()
{
  fetch('json/posts.json')
  .then((response) => response.json())
  .then(json => {

    const container = document.getElementById('posts-container');
    const template = document.getElementById('post-template');

    json.forEach(item => {
      // Clone the template content
      const clone = template.content.cloneNode(true);
      
      // Fill in the data
      clone.querySelector('.post-description').textContent = item.body;
      clone.querySelector('.post-image').src = item.img;
      clone.querySelector('.post-author-pfp').src = item.profile_picture;
      clone.querySelector('.post-date').textContent = formatDate(item.create_time);
      clone.querySelector('.username').textContent = item.author_name;

      // Append to container
      container.appendChild(clone);
    });
  });
}

fetchLocalJSON()

//fetchOnlineJSON()