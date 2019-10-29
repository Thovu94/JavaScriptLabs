//2:
$(document).ready(function () {
    var a = "Lab9";
    $("h1").text(a);
    var newh3 = "<h3>Working with JQuery</h3>";
    $("#header").html(newh3);

    //4:
    //    $('input[type="button"]').each(function () {
    //        $(this).addClass('btn-background');
    //    })
    $("input[type='button']").each(function (index, element) {
        $(element).addClass("btn-background");
    });

    
    //5:
    $("#buttons").addClass("red-border");


    //6:
    $("p").each(function () {
        $("p").addClass("blue");
    })


    //7:
    $("#first").on("click", function () {
        $("#paragraphs p:first").addClass("green-border");
    });


    //8:
    $("#last").on("click", function () {
        $("#paragraphs p:last").addClass("orange-border");
    });


    //9:
    $("#prev").on("click", function () {
        $("#para3").prev().addClass("purple-border");
    });


    //10:
    $("#next").on("click", function () {
        $("#para2").next().addClass("yellow-border");
    });


    //11:
    $("#remove").on("click", function () {
        $("#footer").remove();
    });


});
