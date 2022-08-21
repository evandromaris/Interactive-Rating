let buttons = document.querySelectorAll('.buttons');
let submit = document.getElementById('submit');
let selected = document.getElementById('selected');

let number = 0

buttons.forEach(e => {
    e.addEventListener('click', function(){
        number = e.id;
    })
})

submit.addEventListener('click', function(){
    if (number !== 0){
        document.getElementById("box1").style.display ="none";
        document.getElementById("box2").style.display = "flex";
        document.getElementById("selected").textContent = `You selected ${number} out of 5`;
    }else {
       alert("You must select a number from 1 to 5")
    }
})

function back() {
    document.getElementById("box1").style.display ="flex";
    document.getElementById("box2").style.display = "none";
    window.location.reload()
}