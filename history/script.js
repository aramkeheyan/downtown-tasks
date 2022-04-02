const history = JSON.parse(localStorage.getItem("history"))

const table = document.getElementById("table")

function renderHistory(){
    history.forEach(item=>{
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        td.innerHTML = "asdasd"
        tr.append(td)
        table.tbody.append(tr)
    })
}

renderHistory()

const tr = document.createElement("tr")
        const td = document.createElement("td")
        td.innerHTML = "asdasd"
        tr.append(td)
        table.tbody.append(tr)