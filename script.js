const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');


let x;
let y;
colorEl.value = 'RED';
let color = colorEl.value;
let size = 20;
let isPressed = false;


canvas.addEventListener('mousedown' , (e) =>
{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

    console.log(x , y);
    
});
canvas.addEventListener('mouseup' , (e) =>
{
    isPressed = false;
    x = undefined;
    y = undefined;

    console.log(x , y);
    
});

canvas.addEventListener('mousemove' , (e) =>
{
    if(isPressed)
    {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        DrawCircle(x2,y2);
        DrawLine(x,y,x2,y2);
        x = e.offsetX;
        y = e.offsetY;
    }
})

function DrawCircle(x,y)
{
    ctx.beginPath();
    ctx.arc(x,y,size,0,2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}


function DrawLine(x1 , y1 , x2 , y2)
{
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle  = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}


function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))


