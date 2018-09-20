// connect HTML form to JS variable 
var form = document.getElementById('form-input');
// declare variables for each button
var toAddBtn = document.querySelector('#to-add');
var toSubBtn = document.querySelector('#to-subtract');
var toMulBtn = document.querySelector('#to-multiply');
var toDivBtn = document.querySelector('#to-divide');
 document.querySelector('.display-result').style.display = 'none';   
/* when any key is pressed , prevent default reloading of page */
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
/* if Add button is pressed*/
toAddBtn.addEventListener('click', function (e) {
    var fnum = Number(document.getElementById("Num1").value);
    var snum = Number(document.getElementById("Num2").value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML =fnum + snum;
});
/* if Subtract button is pressed*/
toSubBtn.addEventListener('click',function(e){
    var fnum = Number(document.getElementById("Num1").value);
    var snum = Number(document.getElementById("Num2").value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML =fnum - snum;
});
/* if Multiply button is pressed */
toMulBtn.addEventListener('click',function(e){
    var fnum = Number(document.getElementById("Num1").value);
    var snum = Number(document.getElementById("Num2").value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML =fnum * snum;
});
/* if Dvide button is pressed */
toDivBtn.addEventListener('click',function(e){
    var fnum = Number(document.getElementById("Num1").value);
    var snum = Number(document.getElementById("Num2").value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML =fnum / snum;
});