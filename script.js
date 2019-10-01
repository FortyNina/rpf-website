function doParallax() {

  window.addEventListener("scroll", function(event){

    var top = this.pageYOffset;

    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('parallax-speed');
        if(speed != 100){
            var yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }else{
            layer.setAttribute('style', 'position: relative');
        }

    }
  });
}

document.body.onload =doParallax();
