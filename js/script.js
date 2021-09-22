
$(function () {

    //OCULTAR ELEMENTOS
    // $('main article:first').hide();


    // Para remover elementos

   // $('main article:first').remove();


   // CLONAR ELEMENTOS

   var copia = $('main article:last').clone();

    //    $("main").prepend(copia);
    //    $("main").append(copia);

   // $(copia).appendTo("main");
   // $(copia).prependTo("main");


   // EVENTOS


        /* $(".site-header img").on("click",function(){

            $(this).remove();

        }) */

            $(".site-header img").on("click",function(){

            $(this).animate({'width': "200px"},500);

        })

        // $(".site-header img").on("mouseenter",function(){
        //    console.log("adentro");
        // });

        // $(".site-header img").on("mouseleave",function(){
        //    console.log("afuera");
        // });

        // $("#vermenu").on("mouseenter",function () {


        //     $(".navegacion-principal").show();

        // })
        // $("#vermenu").on("mouseleave",function () {


        //     $(".navegacion-principal").hide();

        // })

        $("main article img").on("mouseenter",aumentarImagen)
        $("main article img").on("mouseleave",disminuírImagen)


        function aumentarImagen(){

            $(this).animate({"width":"200%"})

        }


        function disminuírImagen(){

            $(this).animate({"width":"360px"})


        }




        //AGREGAR O QUITAR CLASES

        // $(".navegacion-principal a:first").addClass("activo");


        // $("main article:first").addClass('activo');


        // $(".navegacion-principal a").on("click",function(e){
        //     e.preventDefault();
        //    $(this).addClass("activo")

        // }
        //     );


        // SELECCIONAR HIJOS
        // $(".navegacion-principal").children()
        //  $(".navegacion-principal").parent()
        //  $(".navegacion-principal a:first").next()

        //MODIFICAR ELEMENTOS

        // $(".contenido-principal h2").text("Andale")
        // $(".contenido-principal h2").html("<a href='index.html' > Ve al link maldito gil </a>")
        //  $(".navegacion-principal a:first").text("Butanol")
        // $(".navegacion-principal a:first").attr("href","google.com");
        // $(".navegacion-principal a:first").attr("target","_blank");
        // $('article:first img').attr("src");
        // $('article:first img').attr("src","otroenlace.png");


        //MODIFICAR ATTR

        // $("main article:first img").on("click", function (){

        //     $(this).attr("src",'img/imagen_2.jpg')

        // })



        ///MODIFICAR CSS

        // $(".site-header img").css({"width": '200px'});
        // $(".contenido-principal h2").css({"color": "red"});

        // $("aside").css({
        //     "background-color": "#e1e1e1",
        //     "text-transform": "uppercase"
        // })

        //SLIDEUP and SLIDEDOWN


        // $(".site-header img").click(function () {

        //     $("main article:first").slideUp(1000);

        // });
        // $("aside").click(function () {

        //     $("main article:first").slideDown(1000);

        // });

        //AJAX

        // $('.site-header img').on("click",cargarAjax);

        // function cargarAjax(){

        //     $.ajax("promociones.txt",{

        //         success: agregarContenido,
        //         type: "GET",
        //         datatype:"text"

        //     });



        // }

        // function agregarContenido(data,status,jqxhr) {


        //     $("aside").text(data);
        //     console.log(status);
        // }


        // $("aside").load("promociones.html");


        var proximosViajes = ["Londres","Montevideo","Canelones","Florida"]

        $.each(proximosViajes,function(index,destinos){

            if(index === 0){

                $("aside").append("<h2> Proximos Viajes </h2>");
            }

            $("aside").append("<li>"+destinos+"</li>");
        })

        var viajesPorFechas = {

            Primero: "Londres",
            Segundo: "Paris",
            Tercero: "Milan"
        }

        $.each(viajesPorFechas, function (orden,viaje){

            if(orden === "Primero"){

                $("aside").append("<h2> Viajes en Orden </h2>");

            }

            $("aside").append("<li>"+orden+": "+viaje+"</li>");


        })


        // ESCRIBIENDO CODIGO PARA LOS SERVICIOS


        $(".nuestros-servicios div:first").show();
        $(".servicios nav a:first").addClass("seleccionado");
        $(".servicios nav a").on("click",mostrarTabs)

        function mostrarTabs(e) {

            e.preventDefault();
            var enlace = $(this).attr("href");



            //    $(this).slideUp(1000);
            //    $(this).slideDown(1000);



            $(".nuestros-servicios div").hide();

            // $(enlace).animate({"opacity": ".1"});
            $(enlace).show();

            // setTimeout(() => {

            //     $(enlace).animate({"opacity": "1"});

            // }, 1000);
            $(".servicios nav a").removeClass("seleccionado");
            $(this).addClass("seleccionado");

            return false;


        }

})