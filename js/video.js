const video = this.document.querySelector('video');

// Initialize the video element and turn off autoplay and turn off looping.
if (video) {
	window.addEventListener("load", function() {
		console.log("Good job opening the window");
		// const video = this.document.getElementById('video');
		video.autoplay = false;
		video.loop = false;
	});
}

// Initialize variables
const playButton = document.querySelector('#play'); 
const pauseButton = document.querySelector('#pause');
const slowButton = document.querySelector('#slower');
const fastButton = document.querySelector('#faster');
const skipButton = document.querySelector('#skip');


const volumeslider = document.querySelector('#slider');
const Volume = document.querySelector('#volume');

const mute = document.querySelector('#mute');
const vintage = document.querySelector('#vintage');
const orginial = document.querySelector('#orig');

// Play the video and update the volume information.  
if(playButton) {
	playButton.addEventListener('click', () => {
		console.log("Click Play");
		video.play();
		Volume.textContent = video.volume*100 + "%";
		console.log(video.volume);
	});	
}


// Pause the video.
if (pauseButton) {
	pauseButton.addEventListener('click', () => {
		console.log("Pause");
		video.pause();
	});
}

// Slow the current video speed by 10% each time the button 
// is clicked and log the new speed to the console.  
if(slowButton) {
	slowButton.addEventListener('click', () => {
		console.log("slowButton");
		video.playbackRate = video.playbackRate * 0.9;
		console.log(video.playbackRate);
	});
}


// Increase the current video speed each time the button is clicked and 
// log the new speed to the console.  Change it by an amount proportional 
// to the slow down. CHECK THIS!!  If you slow down three times and then 
// speed up three times you should be within 5 digits of 100% again.
if(fastButton) {
	fastButton.addEventListener('click', () => {
		console.log("fastButton");
		video.playbackRate = video.playbackRate * (1/0.9);
		console.log(video.playbackRate);
	});
}


// Advance the current video by 10 seconds.  If the video length 
// has been exceeded go back to the start of the video - no farther.
// Log the current location of the video.
if(skipButton) {
	skipButton.addEventListener('click', () => {
		console.log("skipButton");
		video.currentTime = video.currentTime + 10;
		console.log(video.currentTime);
	});
}


// Mute/unmute the video and update the text in the button.
if(mute) {
	mute.addEventListener('click', () => {
		const mute_unmute_text = mute.textContent;
		if (mute_unmute_text == "Mute") {
			console.log("Muted");
			mute.textContent = "Unmute";
			video.muted = true;
		}
		else if(mute_unmute_text == "Unmute") {
			console.log("Unmuted");
			mute.textContent = "Mute";
			video.muted = false;
		}
		
	});
}

// Change the volume based on the slider and update the volume information.

if(volumeslider) {
	volumeslider.addEventListener('input', () => {
		console.log("Change Volume");
		video.volume = volumeslider.value / 100;
		Volume.textContent = video.volume*100 + "%";
		console.log(volumeslider.value);
		console.log(video.volume);
	});
}

// Utilize the existing oldSchool class on the video element
if(vintage) {
	vintage.addEventListener('click', () => {
		console.log("Old School");
		
		// video.style = 
		video.classList.add("oldSchool");	
	});
}

// Remove the oldSchool class from the video.
if(orginial) {
	orginial.addEventListener('click', () => {
		console.log("Original");
		
		// video.style = 
		video.classList.remove("oldSchool");	
	});
}
