window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas'); //returns first element canvas
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width =  window.innerWidth;

    let painting = false;
    let draw_color = "black";

    function change_color(element) {
        draw_color = element.style.background;
        console.log("change");
    }

    function startPos(){
        painting = true;
    }

    function endPos(){
        painting = false;
        ctx.beginPath();
    }

    function paint(e){
        if (!painting) return;

        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle=draw_color;
        ctx.stroke();
    }


    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', paint);

});
