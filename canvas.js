window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas'); //returns first element canvas
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //ctx.beginPath();
    //ctx.moveTo(100,100);
    //ctx.lineTo(200,100);
    //ctx.strokeStyle="blue";
    //ctx.stroke();

    let painting = false;

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
        ctx.strokeStyle="blue";
        ctx.stroke();
    }

    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', paint);
});
