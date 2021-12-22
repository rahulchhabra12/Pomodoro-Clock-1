let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let sessions = document.getElementById("session");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let s1 = document.getElementById("s1");
let b1 = document.getElementById("b1");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let startButton = 0;
var a = 0, d = 0, count = 0;
let myInterval;
var session = 1;
sessions.innerHTML = "session " + session;


button1.addEventListener("click", function () {
    if (label1.innerHTML < 59) {
        label1.innerHTML++;
        d = label1.innerHTML;
        s1.innerHTML = label1.innerHTML + " " + "mint";
    }
    else {
        alert("please keep the minutes below 60")
    }
});

button2.addEventListener("click", function () {
    if (label1.innerHTML > 0) {
        label1.innerHTML--;
        s1.innerHTML = label1.innerHTML + " " + "mint";
    }
    else {
        alert("please keep the minutes above 0")
    }
});

button3.addEventListener("click", function () {
    if (a < 59) {
        a++;
        b1.innerHTML = a + "  " + "mint";
    }
    else {
        alert("please keep the minutes below 60")
    }
});

button4.addEventListener("click", function () {
    if (a > 0) {
        a--;
        b1.innerHTML = a + "  " + "mint";
    }
    else {
        alert("please keep the minutes above 0")
    }
});

pause.addEventListener("click", function () {
    if (label1.innerHTML > 0) {
        if (startButton == 0) {
            start_timer();
            pause.value = "pause";
            startButton = 1;
        }
        else {
            pause.value = "Start";
            startButton = 0;
            pause_timer();
        }
    }
});

//reset Timer
reset.addEventListener("click", function () {
    label1.innerHTML = 00;
    label3.innerHTML = 00;
    a = 00;
    s1.innerHTML = "00" + " " + "mint";
    b1.innerHTML = "00" + " " + "mint";
    session = 1;
    pause_timer();
    sessions.innerHTML = "session " + session;
    pause.value = "Start";
})



function start_timer() {
    if (label1.innerHTML < 59) {
        myInterval = setInterval(inter, 1000);
    }
}

function inter() {
    {
        if (count == 0) {
            if (label3.innerHTML == 0) {
                label1.innerHTML--;
                label3.innerHTML = 60;
            }
            label3.innerHTML--;
            if (label1.innerHTML <= -1) {
                count = 1;
                label1.innerHTML = a;
                label3.innerHTML = 0;
                sessions.innerHTML = "Break";
                sessions.style.color = "brown"
                label3.style.color = "brown";
                label1.style.color = "brown";
                label3.style.color = "brown";
            }
        }
    }
    if (count == 1) {
        if (label3.innerHTML == 0) {
            label1.innerHTML--;
            label3.innerHTML = 60;
        }
        label3.innerHTML--;
        if (label1.innerHTML <= -1) {
            count = 0;
            label1.innerHTML = d;
            label3.innerHTML = 0;
            session = session + 1;
            sessions.innerHTML = "session " + session;
            sessions.style.color = "rgba(11, 140, 226, 0.87)";
            label2.style.color = "rgba(11, 140, 226, 0.87)";
            label3.style.color = "rgba(11, 140, 226, 0.87)";
            label1.style.color = "rgba(11, 140, 226, 0.87)";
        }
    }
}
//pause timer
function pause_timer() {
    clearInterval(myInterval);
}
