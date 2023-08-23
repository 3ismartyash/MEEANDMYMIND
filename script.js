arr=[3,6,9,11,14,17,19,22,25,29,32,35];
const num = document.getElementById("value");
const submit = document.getElementById("submit");
const res = document.getElementById("result");

submit.addEventListener('click',()=>{
    const n = parseFloat(num.value);
    console.log(n);
    var val = "black";
    if(n<=36){
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=n){
            val = "https://3ismartyash.github.io/MEEANDMYMIND/black.html";
        }
        else{
            val = "https://3ismartyash.github.io/MEEANDMYMIND/white.html";
            break;
        }
    }
    // res.innerHTML = val;
    window.location.href = val
}
else{
    m = n%36;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=m){
            val = "http://127.0.0.1:5500/black.html";
        }
        else{
            val = "http://127.0.0.1:5500/white.html";
            break;
        }
    }
    // res.innerHTML = val;
    window.location.href = val
    }
})

var input = document.getElementById("value");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
    }
});
