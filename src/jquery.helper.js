(function (jQuery) {

    jQuery.extend({
        inputIsFocused: function () {
            var result = false;

            var body = jQuery('body');

            body.find('input').each(function () {
                if (jQuery(this).is(":focus")) {
                    result = true;
                    return false; // break cycle
                }
            });

            if (result) {
                return true;
            }

            body.find('textarea').each(function () {
                if (jQuery(this).is(":focus")) {
                    result = true;
                    return false; // break cycle
                }
            });

            return result;
        }
    });

}(jQuery));