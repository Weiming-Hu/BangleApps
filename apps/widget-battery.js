(function(){
var img_charge = E.toArrayBuffer(atob("DhgBHOBzgc4HOP////////////////////3/4HgB4AeAHgB4AeAHgB4AeAHg"));
var xpos = WIDGETPOS.tr-64;
WIDGETPOS.tr-=68;

function draw() {
  var s = 63;
  var x = xpos, y = 0;
  g.clearRect(x,y,x+s,y+23);
  g.setColor(1,1,1);
  if (Bangle.isCharging()) {
    g.drawImage(img_charge,x,y);
    x+=16;
    s-=16;
  }
  g.fillRect(x,y+2,x+s-4,y+21);
  g.clearRect(x+2,y+4,x+s-6,y+19);
  g.fillRect(x+s-3,y+10,x+s,y+14);
  g.fillRect(x+4,y+6,x+4+E.getBattery()*(s-12)/100,y+17);
  g.setColor(1,1,1);
}
Bangle.on('charging',function(charging) { draw(); g.flip(); if(charging)Bangle.buzz(); });
WIDGETS["battery"]={draw:draw};
})()
