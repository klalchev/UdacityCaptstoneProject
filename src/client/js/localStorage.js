//const ul = document.getElementById('entryHolder');
let tripsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []

localStorage.setItem('items', JSON.stringify(tripsArray))
/*const data = JSON.parse(localStorage.getItem('items'))*/

function saveTrip (myData) {
    //e.preventDefault()

    tripsArray.push(myData)
    localStorage.setItem('items', JSON.stringify(tripsArray))
}

/*
function checkStorage (tripData)
data.forEach((item) => {
    const li = document.createElement('li')
    li.innerHTML = tripData.date + ', ' + tripData.temp + ', ' + tripData.trip + ', ' + tripData.country + tripData.description + tripData.language;
    ul.appendchild(li)
})*/

function deleteTrip () {
    //e.preventDefault()
    localStorage.clear()
    /*while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }*/
}

/*
const getProjectData = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        console.log(allData);

    }catch(error){
        console.log("error", error)
    }
*/

export {
    tripsArray,
    saveTrip,
    deleteTrip
}