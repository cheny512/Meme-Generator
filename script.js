    let form = document.getElementById('form');
    let memesArea = document.getElementById('memes');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let topText = document.getElementById('topText').value;
        let botText = document.getElementById('botText').value;
        let imageUrl = document.getElementById('urlLink').value;

        if (imageUrl) {
            createMeme(topText, botText, imageUrl);
        }
    })

    function createMeme(topText, botText, imageUrl) {
        let memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');
    
        let topDiv = document.createElement('div');
        topDiv.classList.add('text', 'top');
        topDiv.innerText = topText;
    
        let botDiv = document.createElement('div');
        botDiv.classList.add('text', 'bottom');
        botDiv.innerText = botText;
    
        let img = new Image();
        img.src = imageUrl;
       
    
        memeDiv.appendChild(img);
        memeDiv.appendChild(topDiv);
        memeDiv.appendChild(botDiv);
    
        
        let deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '&times;'; 
        memeDiv.appendChild(deleteBtn);
    
       
        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation(); 
            memesArea.removeChild(memeDiv);
        });
    
      
        memesArea.appendChild(memeDiv);
    }
    
