// console.log(this); //Windows

// function fn(){
//     console.log(this); //windows
// }

// fn();

// let obj = {
//     name : "Udai",
//     func : fn
// }

// obj.func() //Self obj

// function fn(){
//     console.log(this);
//     function abc(){
//         console.log(this); ///windows object
//     }
//     abc();
// }

// let obj = {
//     name:"Udai",
//     func : fn
// }

// obj.func()

//METHOD 1 : bind function

// function fn(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     let ret = abc.bind(this);
//     ret();
// }

// let obj = {
//     name:"Udai",
//     func : fn
// }

// obj.func()

//METHOD 2 : Arrow function

function fn(){
    console.log(this);
    abc = () => {
        console.log(this);
    }
    abc();
}

let obj = {
    name:"Udai",
    func : fn
}

obj.func()
