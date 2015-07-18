$( document ).ready(function() {
    $("#selected").hide();
    console.log('Working!');
    $("#select")
    .change(function (){

        $("select option:selected").each(function() {
            var val = $(this).val();

            if (val == '1') {
                console.log(val); //I'm supposing the "Other" option value is 0.
                $("#selected").hide();
            }
            if (val == '2') {
                console.log(val); //I'm supposing the "Other" option value is 0.
                var percent = '<div class="uk-form-row" align = "center"><input type="text" placeholder="Percent Amount" class = "uk-form-large" size = 30 align="center" id="pAmount" ></div>'
                $( "#selected" ).html(percent);
                $("#selected").show();
            
            }

            if (val == '3') {
                console.log(val); //I'm supposing the "Other" option value is 0.
                var equal = '<div class="uk-form-row" align = "center"><input type="text" placeholder="Number of people paying" class = "uk-form-large" size = 30 align="center" id="eAmount" ></div>'
                $( "#selected" ).html(equal);
                $("#selected").show();
            }

            if (val == '4'){ //I'm supposing the "Other" option value is 0.
                console.log(val);
             var raw = '<div class="uk-form-row" align = "center"><input type="text" placeholder="Raw Amount" class = "uk-form-large" size = 30 align="center" id="rAmount" ></div>'
                $( "#selected" ).html(raw);
                $("#selected").show();
         }
        })
    })
});
