var videoPlay = document.querySelector("video");
var button = document.querySelector(".promo-btn");
var newVideo = document.querySelector("iframe");
var description = document.querySelector(".video-description");
var header = document.querySelector(".header-logo");
var input = document.querySelector(".content__flyight-price input")
var message = document.querySelector(".message");
console.log(message);

header.addEventListener('click', function(evt) {
    evt.preventDefault();
});

button.addEventListener('click', function() {
    videoPlay.removeAttribute("poster");
    button.classList.add("hidden");
    videoPlay.classList.remove("video");
    videoPlay.classList.add("video-play");
    videoPlay.setAttribute("controls", "controls");
    videoPlay.play();
    description.classList.add("video-description-3");
});

videoPlay.addEventListener('mouseover', function(){
    description.classList.add("video-description-2");
});
videoPlay.addEventListener('mouseout', function() {
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
badBtn.addEventListener('click', function() {
    badVideo.removeAttribute("poster");
    badBtn.classList.add("hidden");
    badVideo.classList.remove("video");
    badVideo.classList.add("setting");
    badVideo.setAttribute("controls", "controls");
    badVideo.play();
});

input.addEventListener('mouseover', function(evt) {
    evt.preventDefault();
    message.classList.remove("hidden");
    
});
input.addEventListener('mouseout', function() {
//    input.removeAttribute("disabled");
    message.classList.add("hidden");
    
});