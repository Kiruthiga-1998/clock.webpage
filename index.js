function update(){
let time = document.getElementById("count-down");
let d = new Date();
time.innerHTML = d.toLocaleTimeString();
}
setInterval(update,1000);

