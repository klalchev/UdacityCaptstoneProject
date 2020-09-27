async function saveTrip () {
    // Fetch data from the server and Update the localStorage
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        localStorage.setItem('items', JSON.stringify(allData))
    }catch(error){
        console.log("error", error)
    }
}

async function deleteTrip () {
    /* Note- before deleting the data from local storage,
      I can choose to delete the trip data from the server
      and then from the local storage.
    */
    // (optional) Make a call to an endpoint which deletes the trip data from the server
    // For this, I'll have to create a new endpoint on the server which remove all entry in projectData object
    // Clear local storage
    await localStorage.clear()
}

async function checkStorage () {
    await localStorage.getItem('items');
}

//const tripsArray = [];

export {
    saveTrip,
    deleteTrip,
    checkStorage
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