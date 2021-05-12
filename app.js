// write a function that will output 100 through 0

function revCount(){
  for(let i = 100; i >= 0; i-- ){
    console.log(i)
  }
}
// revCount()


//write a function that will take in 2 params, one is a start num, the other is the limit num. Console log every number between the 2. Assume the 2nd number will always be larger than the first

function varLoop(start, end){
  for(let i = start; i <= end; i++){
    console.log(i)
  }
}

// varLoop(1,70)


let peeps = [{
  name: 'Jake',
  role: 'Instruct'
},
{
  name: 'Harrison',
  role: 'Instruct'
},
{
  name: 'Brittany',
  role: 'Admin'
},
{
  name: 'Mark',
  role: 'Instruct'
},
{
  name: 'Jimmy',
  role: 'Tester'
}]

//write a function that will take in an array of objects, console log custom statements for each role:
//Instruct role should say 'Welcome (role) (name).'
//Admin role should say 'Welcome (role) (name), Have a great day.'
//Any other role should say 'Not a codeworks employee.'

//note pseudo code 
// be able to iterate over the arr
// must check their role and then return appropriate response 



  //  NOTE  this is with a for loop
// function greet(arr){
//   for(let i =0; i < arr.length; i++){
//     let person = arr[i]
//     if(person.role == 'Instruct'){
//       console.log(`Hello ${person.role} ${person.name}.`)
//     } else if(person.role == 'Admin'){
//       console.log(`Hello ${person.role} ${person.name}, have a great day`)
//     }else {
//       console.log(person.name + ` is not a codeworks employee`)
//     }
//   }
// }


// NOTE this is a for each loop
// function greet(arr){
//   arr.forEach(person => {
//     if(person.role == 'Instruct'){
//       console.log(`Hello ${person.role} ${person.name}.`)
//     } else if(person.role == "Admin"){
//       console.log(`Hello ${person.role} ${person.name}, have a great day`)
//     } else {
//       console.log(person.name + ` is not a codeworks employee`)
//     }
//   });
// }



// NOTE this is with ternaries
// function greet(arr){
//   arr.forEach(p => {
//     p.role == "Instruct" ? console.log(`Hello ${p.role} ${p.name}`) : 
//     p.role == "Admin" ? console.log(`Hello ${p.role} ${p.name}, have a great day`):  console.log(p.name + ` is not a codeworks employee`)
//   });
// }


// greet(peeps)




// write a function that will take in a num and console log false if num is odd or true if num is even from 0 - num


function evenOrOdd(num){
  for(let i = 0; i <= num; i++){
    if( i % 2 == 0){
      console.log(true)
    } else {
      console.log(false)
    }

    // console.log(i % 2 == 0)
  }
}

// evenOrOdd(8)



//given a basket of items with name, type, price and quantity, write a function that will return the total cost of the basket. 
//One thing to note is that different types are taxed differently. 
//Vegetables and fruit have a tax of 7% while meat has a tax of 9%. Everything else is taxed at 8%.
//how could we use a switch to solve this.

let basket = [
  {
    name: "Apple",
    type: 'Fruit',
    price: 3,
    quantity: 7
  },
  {
    name: "Carrot",
    type: 'Vegetable',
    price: 1,
    quantity: 4
  },
  {
    name: "Banana",
    type: 'Fruit',
    price: 2.50,
    quantity: 5
  },
  {
    name: "Lettuce",
    type: 'Vegetable',
    price: 6,
    quantity: 1
  },
  {
    name: "Steak",
    type: 'Meat',
    price: 27,
    quantity: 3
  },
  {
    name: "D$ Special",
    type: 'Other',
    price: 40,
    quantity: 9
  }
  ]


  function carTotal(items){
    let total = 0

    for(let i = 0; i< items.length; i++){
      const item = items[i]
      switch(item.type) {
        case 'Vegetable':
        case 'Fruit':
          total += ((item.price * item.quantity) *1.07 ) 
          break;
          case 'Meat':
            total += ((item.price * item.quantity) *1.09) 
            break;
            default: 
            total += ((item.price * item.quantity) *1.08) 
      }
    }
    console.log(total)
  }

  carTotal(basket)

