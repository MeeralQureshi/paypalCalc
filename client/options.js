$.noConflict();
jQuery( document ).ready(function( $ ) {
    $("#selected").hide();
    console.log('Working!');
    $("#select")
    .change(function (){

        $("select option:selected").each(function() {
            var val = $(this).val();
            var totalAmount = $('#totalAmount').val();
            $('#total').empty();

            if (val == '1') {
                console.log(val); 
                $("#selected").hide();
                $('#total').empty();

            }
            if (val == '2') {
                console.log(val); 
                var percent = '<div class="uk-form-row" align = "center"><input type="text" placeholder="Percent Amount" class = "uk-form-large" size=30 align="center" id="pAmount"></div>'
                $( "#selected" ).html(percent);
                $("#selected").show();
                var current_per;
                $('#pAmount').keyup(function () {
                    current_per=$(this).val();
                    if(parseInt(current_per) >= 0 && parseInt(current_per) <= 100 && !isNaN(totalAmount)){
                        var final_per=(totalAmount*current_per)/100;
                        $('#total').text("Your total: " + final_per.toFixed(2));
                     }else{
                        $('#total').text("Choose a percentage between 0 and 100");
                    }
                });

                $('#totalAmount').keyup(function () {
                    totalAmount=$(this).val();
                    if(parseInt(current_per) >= 0 && parseInt(current_per) <= 100 && !isNaN(totalAmount)){
                        var final_per=(totalAmount*current_per)/100;
                        $('#total').text("Your total: " + final_per.toFixed(2));
                     }else{
                        $('#total').text("Choose a percentage between 0 and 100");
                    }
                 });
            }

            if (val == '3') {
                console.log(val); 
                var equal = '<div class="uk-form-row" align = "center"><input type="text" placeholder="Number of people paying" class = "uk-form-large" size = 30 align="center" id="eAmount" ></div>'
                $( "#selected" ).html(equal);
                $("#selected").show();
                var current_no;
                $('#eAmount').keyup(function () {
                    current_no=$(this).val();
                    if(parseInt(current_no) >= 0 && parseInt(current_no) <= totalAmount && !isNaN(totalAmount)){
                        var final_share=(totalAmount/current_no);
                        $('#total').text("Your total: " + final_share.toFixed(2));
                    }else{
                        $('#total').text("Choose a number the total evenly between 0 and the total");
                    }

                 });

                $('#totalAmount').keyup(function () {
                    totalAmount=$(this).val();
                    var final_share=(totalAmount/current_no);
                    if(parseInt(current_no) >= 0 && parseInt(current_no) <= totalAmount && !isNaN(totalAmount)){
                        var final_share=(totalAmount/current_no);
                        $('#total').text("Your total: " + final_share.toFixed(2));
                    }else{
                        $('#total').text("Choose a number the total evenly between 0 and the total");
                    }
                 });
            }

            if (val == '4'){ 
                console.log(val);
             var raw = '<div class="uk-form-row" align = "center"><input type="text" placeholder="Raw Amount" class = "uk-form-large" size = 30 align="center" id="rAmount" ></div>'
                $( "#selected" ).html(raw);
                $("#selected").show();
                var current_raw;
                $('#rAmount').keyup(function () {
                    current_raw= parseInt($(this).val());
                    if(current_raw >= 0 && current_raw <= totalAmount && !isNaN(totalAmount)){
                        $('#total').text("Your total: " + current_raw.toFixed(2));
                    }else{
                        $('#total').text("Choose a number the total evenly between 0 and the total");
                    }
                 });

                $('#totalAmount').keyup(function () {
                    totalAmount=$(this).val();
                    if(parseInt(current_raw) >= 0 && parseInt(current_raw) <= totalAmount && !isNaN(totalAmount)){
                        $('#total').text("Your total: " + current_raw.toFixed(2));
                    }else{
                        $('#total').text("Choose a number the total evenly between 0 and the total");
                    }
                 }); 
         }
        })
    })

});

  // $("#pAmount").keypress(function (e) {
  //    //if the letter is not digit then display error and don't type anything
  //    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
  //       //display error message
  //       $("#errmsg").html("Digits Only").show().fadeOut("slow");
  //              return false;
  //       }
  //   });

// <span class="uk-form-row" id="errmsg" size=30></span>