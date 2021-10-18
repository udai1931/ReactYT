let obj = {
    name : "Udai",
    state : "Delhi",
    country : "India"
}

// let name = obj.name;
// let state = obj["state"];

// let {name,state,country} = obj
// let {name,state,country,extra="deafult value"} = obj


let {name:firstname,state,country,extra="deafult value"} = obj 

console.log(firstname,state,country,extra);