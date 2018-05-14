
        $(document).ready(function(){

            $("#loginLink").click(function(){
                $("#loginModal").modal('toggle');
                $("#c1").click(function(){
                    $("#loginModal").modal('hide');
                });
            })

            $("#reserveButton").click(function(){
                $("#reserveModal").modal('toggle');
                $("#c2").click(function(){
                    $("#reserveModal").modal('hide');
                });
            })

            $("#mycarousel").carousel({interval:2000});
            $("#carousel-button").click(function(){
                if ($("#carousel-button").children("span").hasClass("fa-pause")) {
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button").children("span").removeClass("fa-pause");
                    $("#carousel-button").children("span").addClass("fa-play");
                }

                else if ($("#carousel-button").children("span").hasClass("fa-play")) {
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass("fa-play");
                    $("#carousel-button").children("span").addClass("fa-pause");
                }
                
            });
   
        });

       

    