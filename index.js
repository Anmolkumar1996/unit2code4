// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", formSubmit)
var Arr = [];

function formSubmit(){
    event.preventDefault();
     
    var newObj= {
        matchnumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    };
    Arr.push(newObj);
    console.log(Arr);
    localStorage.setItem("schedule",JSON.stringify(Arr));

}
