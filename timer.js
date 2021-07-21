"use strict";

var startTime = "";
var menteeName = "";
var menteeStart = "";
var menteeEnd = "";
var todaysDate = "";

// this function starts recording the time and date mentee started
function startTimer(){
    var user = document.getElementById("userName").value;
    var today=new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var date =month+"/"+day+"/"+year

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    startTime = h+":"+m+":"+s
    console.log(h+":"+m+":"+s);
    menteeName = user;
    menteeStart = startTime;
    todaysDate = today;
    //need to set "username" to "startTime" in local storage
    localStorage.setItem('User', document.getElementById("userName").value);
    localStorage.setItem('Start Time', startTime)
    localStorage.setItem('Date', date)
    window.location.href = "mentee.html";
//THIS ADDS ZEROS IF IT IS A SINGLE DIGIT
function checkTime(i){
    if (i<10) {
        i="0" + i;
    }
    return i;
    }
}

// this function stops and records what time the user exits to the home page and calculates total time spent on the page
function stopTime(){
    var logout = confirm("Are you sure you want to sign out?")
    console.log(logout)
    if (logout == true){
        var user = localStorage.getItem('00:00:00');
        var today=new Date();
        var year = today.getFullYear();
        var month = today.getMonth()+1;
        var day = today.getDate();
        var date =month+"/"+day+"/"+year

        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        h=checkTime(h)
        m=checkTime(m);
        s=checkTime(s);
        console.log(h+":"+m+":"+s);
        var endTime = h+":"+m+":"+s
        menteeEnd = endTime;
        window.location.href = "home.html";
        //need to set "username" to "endTime" in local storage
        localStorage.setItem('End Time', endTime)
        //localStorage.setItem(endTime, user);
    }else {
        return;
    }
    //THIS ADDS ZEROS IF IT IS A SINGLE DIGIT
    function checkTime(i){
      if (i<10) {
          i="0" + i;
      }
      return i;
      }
             
}

function fillTable(){
    console.log("insert row table working")
    for (let i=0; i < 1; i++){
        var tableRowNumber = localStorage.setItem('Row', 1)
        var timeTable = document.getElementById('apprenticeTime')
        var row = timeTable.insertRow(localStorage.getItem("Row"))
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        
        cell0.innerHTML = localStorage.getItem('User');
        cell1.innerHTML = localStorage.getItem('Date'); 
        cell2.innerHTML = localStorage.getItem('Start Time');
        cell3.innerHTML = localStorage.getItem('End Time');    
}
    //debugger
    var rowNumber = Number(localStorage.getItem("Row"))
    var newRow = rowNumber+1;
    localStorage.setItem("Row", newRow)   
}


