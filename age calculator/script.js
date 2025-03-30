let result = document.getElementById("result");
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let bithdate = new Date(userInput.value);
    let Bday = bithdate.getDate();
    let Bmonth = bithdate.getMonth() + 1;
    let Byear = bithdate.getFullYear();

    let todayDate = new Date();
    let Tday = todayDate.getDate();
    let Tmonth = todayDate.getMonth() + 1;
    let Tyear = todayDate.getFullYear();

    let Cday,Cmonth,Cyear;

    Cyear = Tyear - Byear

    if (Tmonth >= Bmonth) {
        Cmonth = Tmonth - Bmonth;
    }
    else{
        Cyear--;
        Cmonth = (Tmonth+12) - Bmonth; 
    }

    if (Tday >= Bday) {
        Cday = Tday - Bday;
    }
    else{
        Cmonth--;
        Cday = daysOFmonth(Byear,Bmonth) + Tday - Bday; 
    }

    if (Cmonth < 0) {
        Cmonth = 11;
        Cyear--;
    }
    console.log(Cyear,Cmonth,Cday);
    result.innerHTML = `You are ${Cyear} years, ${Cmonth} months and ${Cday} days old. `
}
window.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key === "Enter") {
      calculateAge();
    }
});

function daysOFmonth(year,month) {
    return new Date(year,month,0).getDate();
}