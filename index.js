setInterval(()=>{
    d = new Date();
    hourtime = d.getHours();
    mintime = d.getMinutes();
    sectime = d.getSeconds();
    hrotation = 30*hourtime + mintime/2;
    mrotation = 6*mintime;
    srotation = 6*sectime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

},1000);

var x = document.getElementById("audiocontainer").autoplay;
document.getElementById("demo").innerHTML = x;