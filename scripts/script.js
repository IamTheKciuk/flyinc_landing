$(function () {
    $("#register-btn").hover(
        function () {
            $(".stripe").css("background", "yellow");
        },
        function () {
            // on mouseout, reset the background colour
            $(".stripe").css("background", "cyan");
        }
    );
});
