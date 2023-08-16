//local storage

/*let personmail = {
  username : "Danny",
  email : "Danny@gmail.com",
  password : "XXXXXX",
  clearnote : "Forget password",
  isLoggedIn : "isLoggedIn",
}
 console.log(personmail);
 localStorage.setItem('username', 'Danny');
localStorage.setItem('isLoggedIn', 'true');
 
let username = localStorage.getItem('username');
let isLoggedIn = localStorage.getItem('isLoggedIn');

console.log(username); 
console.log(isLoggedIn); */
//localStorage.removeItem('isLoggedIn');
//localStorage.clear()


//session storage

/*let computer = {
  language : "Javascript",
  theme : "dark",
  index : "html",
  style : "css",
}
console.log(computer);
sessionStorage.setItem('language2','react');
sessionStorage.setItem('theme','white');

let language2 = sessionStorage.getItem('language');
let theme = sessionStorage.getItem('theme');

console.log(language2);
console.log(theme);
sessionStorage.removeItem('language');*/
//sessionStorage.clear();

//http request

// let data ={
//     name : "pushpa",
//     email : "pushpa@gmail.com",
//     gender: "female",
//     status : "active",
    
// }

//http request and response

// let options={
//     method : "DELETE",
//     headers : {
//         "Content-Type" : "application/Json",
//         Accept : "application/Json",
//         Authorization : "Bearer 189af670bfef0809d5360585d7133a8f9567653ed3b12db66e06be85d53e69e8"
//     },
//     //body : JSON.stringify(data)
// }
//     let url="https://gorest.co.in/public/v2/users/4150539"

//       fetch(url, options)
//       .then(function(response){
//         return response.json()
//       })
//       .then(function(jsonData){
//        console.log(jsonData)
//       })
      
//schedulers -> set intervals, clear intervals, settimeout, cleartimeout
//1 set interval
//  let count=0

//  setInterval(function(){
//           console.log(count)

//          count=count+5
// },1000);
 
//2 clear interval
//  let count=0

//  let uniqueId=setInterval(function(){
//      console.log(count)
//     count.log(count)
//    count=count+5
//  },1000)
//  clearInterval(uniqueId)

//1 &2

// let setEl=document.getElementById("set")
// let clearEl=document.getElementById("clear")
// let uniqueId=null
// setEl.onclick=function(){
//   let count=0
// uniqueId= setInterval(function(){
//     console.log(count)
//     count=count+5
//   },1000)
// }
// clearEl.onclick=function(){
//   clearInterval(uniqueId)
//   console.log("stop")
// }

//3 settimeout

// let count=0

// setTimeout(function(){
//   console.log(count)
//   console.log("bomb explorded")
//   count=count+5
// },1000)

//4 clear time out

// let count=0

// let unqiueId=setInterval(function(){
//   console.log(count)
//   console.log("bomb explored")
//   count++
// },1000)
// clearTimeout(unqiueId)