const data = [
      {text: 'Debate of the day: Võiga või võita ?', imagePath: "", 
        date: "20 October 2025", pfpPath: "imgs/blank_profile.webp"},
      {text: 'Bunch of bricks nothing much...', imagePath: "imgs/posts_media/cathedral.jpg", 
        date: "20 November 2025", pfpPath: "imgs/blank_profile.webp"},
      {text: 'New year not new me :(', imagePath: "imgs/posts_media/ulikool.jpeg", 
        date: "20 December 2025", pfpPath: "imgs/blank_profile.webp"},
      {text: 'Slava Urkaini', imagePath: "imgs/posts_media/bridge.jpeg", 
        date: "20 June 2025", pfpPath: "imgs/blank_profile.webp"},
      {text: 'Anyone got milk, I just ran out ...', imagePath: "", 
        date: "20 July 2025", pfpPath: "imgs/blank_profile.webp"}
    ];

    const container = document.getElementById('posts-container');
    const template = document.getElementById('post-template');

    data.forEach(item => {
      // Clone the template content
      const clone = template.content.cloneNode(true);
      
      // Fill in the data
      clone.querySelector('.post-description').textContent = item.text;
      clone.querySelector('.post-image').src = item.imagePath;
      clone.querySelector('.post-author-pfp').src = item.pfpPath;
      clone.querySelector('.post-date').textContent = item.date;

      // Append to container
      container.appendChild(clone);
    });