//  how to accept the userInput 

//  1. Easy way = window prompt


// let UserName;

// UserName = window.prompt("What your username : ");//for user input 

// console.log(UserName);//accrept the user input



//  2. PROFESSIONAL WAY = HTML TEXTBOX


let userName ;
document.getElementById("my_submite").onclick = function(){
    userName = document.getElementById("myText").value;//use to get the value 
    document.getElementById("myh1").textContent = `Hello ${userName}`// to get value and send to the text
}