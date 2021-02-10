var videoPlay = document.querySelector("iframe");
var image = document.querySelector("img.video");
var button = document.querySelector(".promo-btn");
var newVideo = document.querySelector("iframe");
var description = document.querySelector(".video-description");
var header = document.querySelector(".header-logo");
var input = document.querySelector(".content__flyight-price input")
var message = document.querySelector(".message");
var src = "https://www.youtube.com/embed/w6nUVp9mQDs?autoplay=1&mute=0";
console.log(image);

header.addEventListener('click', function(evt) {
    evt.preventDefault();
});

button.addEventListener('click', function() {
    // videoPlay.removeAttribute("poster");
    button.classList.add("hidden");
    image.classList.add("hidden");
    videoPlay.src = src;
    videoPlay.classList.remove("hidden");

    // videoPlay.classList.remove("video");
    // videoPlay.classList.add("video-play");
    // videoPlay.setAttribute("controls", "controls");
    // videoPlay.play();
    description.classList.add("video-description-3");
});

image.addEventListener('mouseover', function(){
    description.classList.add("video-description-2");
});
image.addEventListener('mouseout', function() {
    description.classList.remove("video-description-2");
});
button.addEventListener('mouseover', function(){
    description.classList.add("video-description-2");
});
button.addEventListener('mouseout', function() {
    description.classList.remove("video-description-2");
});

var badVideo = document.querySelector(".bad-video");
var badBtn = document.querySelector(".bad-btn");
var badframe = document.querySelector("iframe.bad-video");
var badsrc = "https://www.youtube.com/embed/x8fpeVICeGg?autoplay=1&mute=0";
badBtn.addEventListener('click', function() {
    badBtn.classList.add("hidden");
    badVideo.classList.add("hidden");
    badframe.src = badsrc;
    badframe.classList.remove("hidden");
});

input.addEventListener('mouseover', function(evt) {
    evt.preventDefault();
    message.classList.remove("hidden");
    
});
input.addEventListener('mouseout', function() {
//    input.removeAttribute("disabled");
    message.classList.add("hidden");
    
});