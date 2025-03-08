function checkNumber() {
    let num = parseInt(document.getElementById("numberInput").value);
    let result;
    
    if (!isNaN(num)) {
        if (num % 2 === 0) {
            result = num * 10;
        } else {
            result = num;
        }
        document.getElementById("result").innerText = "Result: " + result;
    } else {
        document.getElementById("result").innerText = "Please enter a valid number.";
    }
}