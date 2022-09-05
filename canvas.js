window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas'); 
    const ctx = canvas.getContext("2d");
    const colors = document.getElementsByClassName('color-field');
    const colorpicker = document.getElementsByClassName('color-picker');
    const sizepicker = document.querySelector('.brush-radius'); 
    const btnclear = document.querySelector('.button'); 

    console.log(colorpicker);

    canvas.height = window.innerHeight*0.8;
    canvas.width =  window.innerWidth*0.8;

    let painting = false;
    let draw_color = "black";
    let radius = 8;

    function startPos(){
        painting = true;
    }

    function endPos(){
        painting = false;
        ctx.beginPath();
    }

    function paint(e){
        if (!painting) return;

        ctx.lineWidth = radius;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle=draw_color;
        ctx.stroke();
    }

    function updateSize(e) {
        radius = e.target.value;
    }

    function updateValue(e) {
        draw_color = e.target.value;
    }

    function clearCanvas() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', paint);

    for (var i = 0; i < colors.length; ++i) {
        let item = colors[i];  
        item.addEventListener( "click", function() { draw_color = item.style.background; });
    }

    colorpicker[0].addEventListener('input', updateValue);

    sizepicker.addEventListener('input', updateSize);
    
    btnclear.addEventListener('click', clearCanvas)
   
});
