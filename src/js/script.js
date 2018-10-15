---
---

{% if jekyll.environment == 'production' %}
// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    // ServiceWorker registration successful
  }).catch(function (err) {
    console.log('ServiceWorker registration failed:', err);
  });
}
{% endif %}

var vhFix = new vhFix([
  {
    selector: '.fullscreen',
    vh: 100
  }
]);

//images
const backgrounds = [
  "/images/bg01.jpg",
  "/images/bg02.jpg",
  "/images/bg03.jpg",
  "/images/bg04.jpg",
  "/images/bg05.jpg",
  "/images/bg06.jpg",
  "/images/bg07.jpg",
  "/images/bg08.jpg",
  "/images/bg09.jpg"
];

setInterval(function(){
  var url = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.getElementsByClassName('fullscreen')[0].style.backgroundImage = 'url("'+url+'")';
}, 10000); //wait 10 seconds
