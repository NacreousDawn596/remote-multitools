window.addEventListener("load", function(event) {
    document.getElementById("vol").addEventListener("input", function(volume){
        send("volume", document.getElementById("vol").value)
    });
    document.getElementById("torchfunc").addEventListener("input", function(){
        if(document.getElementById('torchvalue').value!='1'){document.getElementById('torchvalue').value='1'}else{document.getElementById('torchvalue').value='0'}; 
        send("torch", document.getElementById('torchvalue').value)
    })
    document.getElementById("vibrinput").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            send("vibrate", document.getElementById("vibrinput").value)
        }
    });
    document.getElementById("callinput").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            send("call", document.getElementById("callinput").value)
        }
    });
    document.getElementById("sayinput").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            send("say", document.getElementById("sayinput").value)
        }
    });
})

function send(option, value){
    fetch('ip.txt')
    .then(async response => await response.text())
    .then(async data => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://"+ data + "/" + option + "/" + value.replace(' ', '%20'), true);
        xhr.send();
    }); 
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

function torch(){
    console.log(document.getElementById("torchvalue").value)
}

/*sleep(2000).then(() => {
    guess = window.prompt("devinez le mot ;)")
    window.location.replace("/guess/" + guess)
})*/