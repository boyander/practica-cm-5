
$( document ).ready(function() {
    var pos = 0;
    function render(){
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#336699";
        ctx.fillRect(10+pos,10+pos,100,100);
        pos = (pos + 5) % 50;
        console.log(pos);
    };
    setInterval(render, 100);
});
