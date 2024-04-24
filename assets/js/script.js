$(document).ready(function(){

    let num1 =0;
    let num2 =0;
    let resultado =0;


    $("#resultado").css("color","red");
    $("#resultado").css("font-size","1.2rem");
    $("#resultado").hide();

    //selector de etiqueta
    $("h1").click(function(){
        $(this).text("Somos el mejor pais de Chile hermanito");
    });

    $("#btnSumar").click(function(){
        
        $("#error1").text("");
        $("#error2").text("");
        $("#error3").text("");
        $("#resultado").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }
        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el primer numero");
            $("#error2").css("color","red");
            return;
        }


        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 + num2;

        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnRestar").click(function(){
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }
        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el primer numero");
            $("#error2").css("color","red");
            return;
        }


        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 - num2;

        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnMultiplicar").click(function(){
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }
        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el primer numero");
            $("#error2").css("color","red");
            return;
        }


        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 * num2;

        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnDividir").click(function(){
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }
        if($("#numero1").val() === "0"){
            $("#error1").text("Numero debe ser mayor que 0");
            $("#error1").css("color","red");
            return;
        }
        if($("#numero2").val() === ""){
            $("#error2").text("Debe agregar el primer numero");
            $("#error2").css("color","red");
            return;
        }
        if($("#numero2").val() === ""){
            $("#error2").text("Numero debe ser mayor que 0");
            $("#error2").css("color","red");
            return;
        }


        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        if($("#numero1").val()=== "0" | $("#numero2").val()=== "0" );
        return alert("No se puede dividir por 0")
        resultado = num1 / num2;

        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnLimpiar").click(function(){

    });

   
});

//let idChile = document.getElementById("idChile");
//idChile.addEventListener("click",function(){
//    idChile.innerHTML = "No tengo porque estar de acuerdo con lo que pienso"
//});

//let btnSumar = document.getElementById("btnSumar");
//btnSumar.addEventListener("click",function(){
//    e.preventDevault();
//    console.log("Me estoy llamando bien");
//});

let resultado = document.getElementById("resultado");
        resultado.style.display = "none";
        resultado.style.display = "block";