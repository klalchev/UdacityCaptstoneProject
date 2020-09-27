// Update the count down every 1 second
var distance =0;

// function countClock (event) {
//event.preventDefault()
//var x = setInterval(function() { // if we use setInterval in this fashion, the var distance shows as 0 the first time we click generate button. setInterval is known for not kicking in at installation. It only kicks in after the delay. In your case, this means that distance does not get its value till a second after the installation. By then, your app has already zoomed past where it needed the distance. The calculation happens 1 second too late. To avoid this issue we declare setInterval after the function has finished loading.

const func = _ => {

// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
const countDown = document.getElementById('departure').value;
const countDownDate = new Date(countDown).getTime();

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (document.getElementById("departure").value !="") {
  document.getElementById("departureDay").innerHTML ='Remaining time to trip: '+ days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(); //x
    document.getElementById("departureDay").innerHTML = "EXPIRED";
  }
//}, 1000);
};

setInterval(func,1000); // this forces setInterval to execute immediately. You then get var distance measured upfront- the var distance kicks off (shows) before you even press generate


export {func}
export  {distance}