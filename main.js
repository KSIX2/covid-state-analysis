console.log("om namo narayana")

let stateName = document.querySelector("#stateName")
let covidStats = document.querySelector("#covidStatistics")
let cases = document.querySelector("#cases")
let deaths = document.querySelector("#deaths")
let recovered = document.querySelector("#recovered")
let active = document.querySelector("#active")

let icon = document.querySelector("#top")
let open=false;

let casescon = document.querySelector("#casescon")
let deathscon = document.querySelector("#deathscon")
let recoveredcon = document.querySelector("#recoveredcon")
let activecon = document.querySelector("#activecon")
let navbar = document.querySelector(".verticalNavBar")
console.log(casescon.offsetWidth)

window.onload = () => {
    fetch("https://disease.sh/v3/covid-19/gov/india")
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    console.log(data.states[1])
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

navbar.addEventListener("click", (e)=>{
    let choosenState = Array.prototype.indexOf.call(navbar.children, e.target)
    fetch("https://disease.sh/v3/covid-19/gov/india")
        .then(res => {
            res.json()
                .then(data => {
                    let details = data.states[choosenState]
                    console.log(details)
                    stateName.innerHTML = details.state
                    casescon.innerHTML = `Cases = ${details.cases}`
                    activecon.innerHTML = `Active = ${details.active}`
                    deathscon.innerHTML = `Deaths = ${details.deaths}`
                    recoveredcon.innerHTML = `Recovered = ${details.recovered}`
                    active.style.width = (details.active/details.cases * cases.offsetWidth) + "px"
                    deaths.style.width = (details.deaths/details.cases * cases.offsetWidth) + "px"
                    recovered.style.width = (details.recovered/details.cases * cases.offsetWidth) + "px"
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

icon.addEventListener("click", ()=> {
    if(!open){
        navbar.style.left = 0;
        navbar.style.zIndex = 5;
        open = true;
    } else {
        navbar.style.left = "-123vw";
        open = false;
    }
})

