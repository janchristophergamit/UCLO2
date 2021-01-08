alert("HELLO WORLD");
function myFunction1() {
    let x=50;
    let y =100;
        document.getElementById("a").innerHTML=(x> y);
        document.getElementById("b").innerHTML=(x< y);  
     }

     function myFunction2(){
        var text = "";
         let i;
          for (i = 1; i < 101; i++) {
            text += "The number is " + i + "<br>";
           }
        
         document.getElementById("c").innerHTML = text;
        }

        function myFunction3() {
var greeting;
var time = new Date().getHours();
if (time < 10) {
greeting = "Good morning";
} else if (time < 20) {
greeting = "Good day";
} else {
greeting = "Good evening";
}
document.getElementById("d").innerHTML = greeting;
}