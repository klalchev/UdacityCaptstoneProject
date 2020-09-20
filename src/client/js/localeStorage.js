let apiObject = Client.updateUI();
const ul = document.getElementById('entryHolder');
let tripsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

function saveTrip (e) {
    e.preventDefault()

    tripsArray.push(apiObject)
    localStorage.setItem('items', JSON.stringify(tripsArray))
}


data.forEach(function savedEntires(item) {
    const li = document.createElement('li')
    li.innerHTML = apiObject.date + ', ' + apiObject.temp + ', ' + apiObject.trip + ', ' + apiObject.country + apiObject.description + apiObject.language;
    ul.appendchild(li)
})

function deleteTrip () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
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
}
*/

export {
    saveTrip,
    deleteTrip
}