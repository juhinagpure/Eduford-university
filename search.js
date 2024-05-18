$(document).ready(function() {
    $("#search-bar").on("keyup", function() {
        var query = $(this).val().toLowerCase();
        $(".blog").each(function() {
            var blogText = $(this).text().toLowerCase();
            if (blogText.indexOf(query) !== -1) {
                $(this).removeClass("hide");
            } else {
                $(this).addClass("hide");
            }
        });
    });
});