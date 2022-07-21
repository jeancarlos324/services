
 users1 = [
 { name: 'Erik', email: 'erik@academlo.com' }, 
 { name: 'Georg', email: 'georg@academlo.com' }, 
 { name: 'Andrea', email: 'andrea@gmail.com' }];
    
 email1 = "georg@academlo.com";

// function deleteUser(users, email) {
//   let property = "email";
//   let newArray = [];
//   for(let i = 0;i<=users.length-1;i++){
//       if (users[i][property] != email){
//         newArray.push(users[i]);
//       }
//   }
//   return newArray;
// }
// console.log(deleteUser(users,email));
let users =[
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]

let attendances = [
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]


function mergeData(users,attendances){
  let mergeData = [];
  for(let i = 0;i < users.length ;i++){
    for(let j = 0;j < attendances.length; j++){
      if (users[i].email == attendances[j].email){
        let name = users[i].name;
        let email = attendances[j].email;
        let attendance = attendances[j].attendance;
        mergeData.push({name,email,attendance});
      }
    }
  }
  return mergeData;
}


//console.log(mergeData(users,attendances));

let students2 = [
  { name: 'Georg', email: 'georg@academlo.com', score: 100 },
  { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
  { name: 'Andrés', email: 'andres@gmail.com', score: 74 }
]
function orderStudentsByScore(students) {
  let result = students.sort((a,b) => ( a.score - b.score));
  return result;
}

//console.log(orderStudentsByScore(students));
let students3 = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
];

let countries = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
];




function countStudents(students, countries, countryName) {
  let aux = [];
    for(let i = 0; i < students.length; i++){
      for(let j = 0; j < countries.length; j++){
        let countryStudent = students[i].country_id;
        let idCountry = countries[j].id;
        let nCountry = countries[j].name;
        if( countryStudent == idCountry  && nCountry == countryName){
          aux.push(i);
        }
      }
    }
    let totalStudens = aux.length;
    return totalStudens;
}

//console.log(countStudents(students,countries,"Mexico"));

let students = [
  { name: 'Daniela', age: 23 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 23 },
  { name: 'Georg', age: 23 },
];

function findMostCommonAge(students) {
  let result = students.sort((a,b) => ( a.age - b.age));
  const commonAge  = [];
  for(let i in result){
    commonAge.push(result[i].age);
  }
  let mostCommonAge = [];
  for (let i = 0; i < commonAge.length; i++) {
    if (commonAge[i + 1] === commonAge[i]) {
      mostCommonAge.push(commonAge[i]);
    }
  }
  let theMostCommonAge = mostCommonAge[0];
  return theMostCommonAge;
}
//console.log(findMostCommonAge(students));

let newArray2 = [1,1,2,2,2,3,3,3];
let j = 1;
let k = 0;
let newArray3 = [];
for(let i = 0; i< newArray2.length;i++){
  if(newArray2[i+1] === newArray2[i]){
    j ++;
    newArray3[i].push(j);
    //csole.log(j);on
    console.log("....");
    //console.log(j);
    //console.log(newArray2[i]);
  }else{
    j = 1;
    console.log("aea");
  }
  console.log(j);
}