
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    setInterval(() => {
        let currTime = new Date();
        hrs.innerHTML = String(currTime.getHours()).padStart(2, '0');
        min.innerHTML = String(currTime.getMinutes()).padStart(2, '0');
        sec.innerHTML = String(currTime.getSeconds()).padStart(2, '0');
    }, 1000);

