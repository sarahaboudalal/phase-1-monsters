document.addEventListener('DOMContentLoaded', () => {
    const url = `http://localhost:3000/monsters/?_limit=50&_page=1`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data.map((obj) => {
                showMonster(obj)
            })
        })
});

function showMonster(obj){
    const montsersContainer = document.getElementById('monster-container')
        let div = document.createElement('div')
        let name = document.createElement('h2')
        name.textContent = `${obj.name}`
        let age = document.createElement('h4')
        age.textContent = `Age: ${obj.age}`
        let description = document.createElement('p')
        description.textContent = `Description: ${obj.description}`
        div.append(name, age, description)
        montsersContainer.appendChild(div)
}
