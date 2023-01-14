function fetchMonsters () {
    const url = "http://localhost:3000/monsters/?_limit=50&_page=10"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data.map((obj) => {
                showMonster(obj)
            })
        })
}
fetchMonsters()

function showMonster(obj){
    const montsersContainer = document.getElementById('monster-container')
        let name = document.createElement('h1')
        name.textContent = `Name: ${obj.name}`
        let age = document.createElement('h4')
        age.textContent = `Age: ${obj.age}`
        let description = document.createElement('p')
        description.textContent = `Description: ${obj.description}`
        montsersContainer.appendChild(name)
        montsersContainer.appendChild(age)
        montsersContainer.appendChild(description)
}

