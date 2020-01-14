function Kalkulator(){
    
    
    var a = parseFloat(document.getElementById("a").value)
    var b = parseFloat(document.getElementById("b").value)
    
    
    var op = document.getElementById("operatori").value;
    
    if(op === "sabiranje"){
    
    document.getElementById("Rezultat").value = a+b;
    
    }
    if(op === "oduzimanje"){
    
    document.getElementById("Rezultat").value = a-b;
    
    }
    if(op === "mnozenje"){
    
    document.getElementById("Rezultat").value = a*b;
    
    }
    if(op === "deljenje"){
    
    document.getElementById("Rezultat").value = a/b;
    
    }
    
    }