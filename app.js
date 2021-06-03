setInterval(() => {
    document.getElementById("time").innerHTML = new Date();

}, 1000);

document.getElementById("alarmbtn").addEventListener('click', (e) => {
    e.preventDefault();

    let alarmstring = document.getElementById("alarm");
    let alarm = new Date(alarmstring.value);
    
    alarmstring.value = "";
    
    let now = new Date();
    console.log(alarm);
    console.log(now);

    if(now > alarm)
    {
        console.log("Invalid Date");
        return;
    }
    
    setTimeout((audio) => {
        audio.play();
    }, alarm - now, document.getElementById("audio"));

});