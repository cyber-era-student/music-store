
console.log("Welcome to Spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); // Initial audio source
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { name: 'Ayi nayi', path: 'songs/1.mp3', cover: 'covers/1.jpg' },
    { name: 'Khudaya-Sarfira', path: 'songs/2.mp3', cover: 'covers/2.jpg' },
    { name: 'Pushpa Pushpa', path: 'songs/3.mp3', cover: 'covers/3.jpg' },
    { name: 'Team India', path: 'songs/4.mp3', cover: 'covers/4.jpg' },
    { name: 'Rabba Mereya', path: 'songs/5.mp3', cover: 'covers/5.jpg' },
    { name: 'Halki Halki Si', path: 'songs/6.mp3', cover: 'covers/6.jpg' },
    { name: 'Angaaron', path: 'songs/7.mp3', cover: 'covers/7.jpg' },
    { name: 'Satyanaas', path: 'songs/8.mp3', cover: 'covers/8.jpg' },
    { name: 'Bhool Bhulaiyaa', path: 'songs/9.mp3', cover: 'covers/9.jpg' },
]
   //  songItems.forEach((element, i)=>{
    //     element.getElementsByTagName("img")[0].src = songs[i].coverPath;  // Set the image source
     //     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;  // Ensure the class name matches
//})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <=0) {
        audioElement.play(); // Use 'play()' method
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause(); // Pause if currently playing
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress; // Assuming myProgressBar is of type range
});

// Add event listener to seekbar for seeking audio
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100; // Seek to the new time
})

   const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.classList.add('fa-pause-circle');
    })
   }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
          element.addEventListener("click", (e)=>{
                 makeAllPlays();
    
                 songIndex = parseInt(e.target.id);
                 e.target.classList.remove('fa-play-circle');
                 e.target.classList.add('fa-pause-circle');
                 audioElement.src = `songs/${songIndex+1}.mp3`;
                 masterSongName.innerText = songs[songIndex].songName;
                 audioElement.currentTime = 0;
                 audioElement.play();
                 gif.style.opacity = 1;
                 masterPlay.classList.remove('fa-play-circle');
                 masterPlay.classList.add('fa-pause-circle');
          })
 })
     document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=9){
            songIndex = 0
        }
        else{
            songIndex +=1; 
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       
     })
     document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -=1; 
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       
     })