
var body = $("body");
function randomBackground () {
    r = Math.ceil(Math.random()*255);
    g = Math.ceil(Math.random()*255);
    b = Math.ceil(Math.random()*255);
    a = Math.random();
    rgba = "rgba("+r+","+g+","+b+","+a+")";
    $("body").css("background-color", rgba);
}

//setInterval(randomBackground, 50)

$("#button").click(function(e) {
    
    setTimeout(
            function() {
            setInterval(randomBackground, 100);
            }, 
            2500
    )

    var audio = new Audio('audio_file.mp3');
    audio.play();

    $(this).hide();
    $(".cap").addClass("cap_apperance_anim");
    $(".face").addClass("face-anim");

    setTimeout(function() {
        $('#face').fadeOut(100, function() {
        $('#face').attr("src","img/rak_happy.png");
        $('#face').fadeIn(100);
        })
    }
        , 2000
    )

    setTimeout(function() {
        $(".display-none").css("opacity", 1);
    }, 6000);

    setTimeout(function() {
        window.scrollTo(0,document.body.scrollHeight);
    }, 8000)
})