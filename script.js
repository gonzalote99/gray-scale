var image;
function upload() {
  var imgc = document.getElementById('d1');
  var fileinput = document.getElementById('fin');
  image = new SimpleImage (fileinput);
  image.drawTo(imgc);
}

function makeGrey() {
  for(var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }

  var imgc = document.getElementById('d1');
  image.drawTo(imgc)
}