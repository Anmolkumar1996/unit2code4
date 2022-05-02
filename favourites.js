// write js code here corresponding to favourites.html
var favouriteArr = JSON.parse(localStorage.getItem("Favourites"));


displayData (favouriteArr);

function displayData(record){
    record.forEach(function(elem){

        var tr = document.createElement("tr");
             
        var td1 = document.createElement("td");
        td1.innerText= elem.matchnumber;
        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;
        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;
        var td4 = document.createElement("td");
        td4.innerText = elem.date;
        var td5 = document.createElement("td");
        td5.innerText = elem.venue;
        var td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.style.color = "red";
        td6.addEventListener("click",deleteFun);
        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    });
}
function deleteFun(){
    event.target.parentNode.remove();
}
