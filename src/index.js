let squirtleNames = ["Jill", "Savanna", "Lydia", "Anthony", "Lupita", "Laura"]

let root = document.getElementById('root')

let ul = document.createElement("ul")



function ulIteration(array) {
    for (let i = 0; i < array.length; i++) {
       let li = document.createElement("li")
       li.innerHTML = (array[i])
       ul.appendChild(li)
    }
}

root.appendChild(ul)

ulIteration(squirtleNames)