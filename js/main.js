const popup = {
    
    events: function(){
        $('#requirements').on('click', function (e) {
            if($(this).is(':checked')) {
                $('.checkbox-alert').addClass('active');
            }
        });
        
        $('.checkbox-alert').on('click', function (e) {
            if (e.target == this) {
                if($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $('#requirements').click();
                }
            }
        });
        
        $('#closeRequirements').on('click', function () {
                $(this).parent('.checkbox-alert').removeClass('active');
                $('#requirements').click();
        });
        
        $('.not-accept').on('click', function (e) {
            e.preventDefault();
            $('.checkbox-alert').removeClass('active');
            if($('#requirements').is(':checked')) {
            $('#requirements').click();
            }
        });
        
        $('.yes-accept').on('click', function (e) {
            e.preventDefault();
            $('.checkbox-alert').removeClass('active');
            $('#requirements').attr('disabled', true);
        });
    },
    
    init: function() {
        popup.events();
    }
}

$(document).ready(function() {
    popup.init();
});