
$( document ).ready(function() {
    var Pala = function(x_start,y_end){
        this.color_pala = "#336699";
        this.position = {x:x_start, y:0};
        this.size = {w:3, h:40};
        this.y_end = y_end;
    };
    Pala.prototype.render = function(ctx){
        ctx.fillStyle = this.color_pala;
        ctx.fillRect(   this.position.x,
                        this.position.y,
                        this.size.w,
                        this.size.h);
    };
    Pala.prototype.goUp = function(){
        if(this.position.y >= 0) this.position.y -= 10;
    };
    Pala.prototype.goDown = function(){
        if(this.position.y+this.size.h <= this.y_end) this.position.y += 10;
    };
    Pala.prototype.setKeys = function(keyUp, keyDown){
        var _this = this;
        $(window).keydown(function(event) {
            //console.log("Key pressed is: " +event.which);
            if ( event.which == keyUp ) {
                _this.goUp()
            }else if( event.which == keyDown ){
                _this.goDown();
            }
        });
    }

    var Bola = function(start_pos_x, start_pos_y){
        this.position = {x:start_pos_x, y:start_pos_y};
        this.color_bola = "#FF0000";
        this.size = {w:5, h:5};
        this.angle =  170;
    }
    Bola.prototype.render = function(ctx){
        ctx.fillStyle = this.color_bola;
        ctx.fillRect(   this.position.x,
                        this.position.y,
                        this.size.w,
                        this.size.h);
    }

    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    var pala_L = new Pala(10,canvas.height);
    var pala_R = new Pala(canvas.width-20,canvas.height);

    pala_L.setKeys(81,65); // Keys: Q, A
    pala_R.setKeys(87,83); // Keys: W, S

    var bola = new Bola(canvas.width/2, canvas.height/2);

    function updateBola(){

        if(bola.position.y < 10){
            bola.angle -=180;
        } else if(bola.position.y > canvas.height){
            bola.angle -=180;
        }

        bola.position.x += Math.sin(bola.angle * Math.PI / 180.0) * 3;
        bola.position.y += Math.cos(bola.angle * Math.PI / 180.0) * 3;
    }

    function render(){

        updateBola();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //renderCampo(ctx);
        pala_L.render(ctx);
        pala_R.render(ctx);
        bola.render(ctx);
    };
    setInterval(render, 100);
});
