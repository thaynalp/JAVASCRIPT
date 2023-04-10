window.onload = function(){
    function down(){
     document.getElementById("status").innerHTML="DOWN";
    }
   
    function up(){
     document.getElementById("status").innerHTML="UP";
    }
    
    document.getElementById("caixa").addEventListener("keydown", down);
    document.getElementById("caixa").addEventListener("keyup", up);
   }