async function saveTrip () {
    // Fetch data from the server and Update the localStorage
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        localStorage.setItem('items', JSON.stringify(allData)) //localStorage can only read string value, so allData needs to be strigified/ converted to string
    }catch(error){
        console.log("error", error)
    }
}
//saveTrip() is an async function because it makes a network call to the server and awaits the server's response

function deleteTrip () {
    /* Note- before deleting the data from local storage,
      I can choose to delete the trip data from the server
      and then from the local storage.
    */
    // (optional) Make a call to an endpoint which deletes the trip data from the server
    // For this, I'll have to create a new endpoint on the server which remove all entry in projectData object
    // Clear local storage
    localStorage.clear()
}


function checkStorage () {
    return localStorage.getItem('items'); // returns {"lat":"42.25", "lng":"-71.06", "trip": etc. } does not return the 'items' key. That is why, in index.js we use lat and lng keys to access data and not 'items' key
}
//An async function is anything that takes a noticeable amount of time. Network calls such as getting results from geonames, weatherbit, pixabay or any of the other numerous APIs fall in that category; checkStorage() does not make any network call (call to an API or request to a server route), so it does not need to be async
/*
function store () {
    const data = JSON.parse(localStorage.getItem('items'))
    data.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = text
        const entryHolder = document.getElementById('entryHolder');
        entryHolder.appendChild(li);
    })
}
*/
//const tripsArray = [];

export {
    saveTrip,
    deleteTrip,
    checkStorage,
}

/*
const ul = document.getElementById('entryHolder');
let tripsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []

localStorage.setItem('items', JSON.stringify(tripsArray))
const data = JSON.parse(localStorage.getItem('items'))

function saveTrip (myData) {
    //e.preventDefault()

    tripsArray.push(myData)
    localStorage.setItem('items', JSON.stringify(tripsArray))
}


function checkStorage (tripData)
data.forEach((item) => {
    const li = document.createElement('li')
   li.innerHTML = tripData.date + ', ' + tripData.temp + ', ' + tripData.trip + ', ' + tripData.country + tripData.description + tripData.language;
    ul.appendchild(li)
})

function deleteTrip () {
    //e.preventDefault()
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
}


const getProjectData = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        console.log(allData);

    }catch(error){
        console.log("error", error)
    }


export {
    tripsArray,
    saveTrip,
    deleteTrip
}
*/