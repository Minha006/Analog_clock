function show_clock() {
    let hour = document.getElementsByClassName("hr")[0];
    let minute = document.getElementsByClassName("min")[0];
    let second = document.getElementsByClassName("sec")[0];


    let date = new Date();

     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();


     hour.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
     minute.style.transform =`rotate(${6 * minutes}deg)`;
     second.style.transform = `rotate(${6 * seconds}deg)`;


     let sound = new Audio("sound.mp3");
     sound.play();

}
setInterval(show_clock,1000);