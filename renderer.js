class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }

    // ctx:          canvas context
    drawSlide0(ctx) {
        var o = document.getElementById("sections");
  var c = document.getElementById("view");
ctx = c.getContext("2d");
ctx.lineWidth=o.value;
ctx.beginPath();
ctx.moveTo(179, 212);
ctx.lineTo(181, 517);
ctx.lineTo(630, 515);
ctx.lineTo(625, 220);
ctx.closePath();

ctx.stroke();
    }

    // ctx:          canvas context
    drawSlide1(ctx) {
        var o = document.getElementById("sections");
        var c = document.getElementById("view");
        ctx.lineWidth=o.value;

        ctx = c.getContext("2d");

        
        ctx.beginPath();
ctx.arc(400, 305, 200, 0, 2 * Math.PI);
ctx.stroke(); 

    }

    // ctx:          canvas context
    drawSlide2(ctx) {
        var o = document.getElementById("sections");
        var c = document.getElementById("view");
        ctx.lineWidth=o.value;

        ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(100, 250);
        ctx.bezierCurveTo(150, 100, 350, 100, 400, 250);
ctx.stroke();
    }

    // ctx:          canvas context
    drawSlide3(ctx) {
    
        var o = document.getElementById("sections");
        var c = document.getElementById("view");
      ctx = c.getContext("2d");
      ctx.lineWidth=o.value;
      ctx.beginPath();
      ctx.moveTo(79, 212);
      ctx.lineTo(181, 517);
      ctx.lineTo(281, 517);
      ctx.lineTo(281, 212);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 331);
      ctx.lineTo(280, 328);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(330, 150);
      ctx.lineTo(340, 510);
      ctx.stroke();

      ctx.beginPath();
ctx.arc(405, 450, 70, 0, 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.arc(405, 200, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
      ctx.moveTo(508, 490);
      ctx.lineTo(512, 129);
      ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(500,490);
    ctx.lineTo(654,492);
    ctx.lineTo(654,140);
    ctx.lineTo(500,140);

    ctx.stroke();

    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
        
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }
};

function data(event){
  var checkBox = document.getElementById("show_points");
if (checkBox.checked == true){
    document.getElementById("point").style.display="inline";  
var sample="X axis= "+event.clientX+"<br>"+"Y axis= "+event.clientY;
document.getElementById("point").innerHTML=sample;
}
}
function exit(){
    document.getElementById("point").style.display="none";

}

