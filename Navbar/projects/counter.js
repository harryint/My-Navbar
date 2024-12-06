let i = 0;
const span = document.querySelector("#span");
// const btnDecrease = document.querySelectorAll(".btn-decrease");
// const btnReset = document.querySelectorAll(".btn-reset");
// const btnIncrease = document.querySelectorAll(".btn-increase");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
        //  document.querySelector("btn decrease").innerHTML='<object type="text/html" data="hex.html" ></object>';
        i--; 
        }
        else if(styles.contains('reset')){
            i = 0;
        }
        else {
            i++;
        }
        if(i>0){
            document.body.style.backgroundColor = 'aliceblue';
            span.style.color = 'green';
        }
        if(i===0){
            document.body.style.backgroundColor = 'antiquewhite';
            span.style.color = 'black';
        }
        if(i<0){
            document.body.style.backgroundColor = 'white';
            span.style.color = 'red';
        }
        span.textContent = i;
    });
});