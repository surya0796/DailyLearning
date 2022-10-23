const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

// c.fillStyle = "yellow"
// c.fillRect(100,100,100,100)
// c.fillStyle = "blue"
// c.fillRect(200,300,100,100)
// c.fillStyle = "red"
// c.fillRect(300,400,100,100)


var xvel = 6
var yvel = 6;
var y = Math.random() * window.innerHeight  
var x = Math.random() * window.innerWidth  



function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.beginPath()
    c.strokeStyle = "red"
    c.arc(x,y,30,0,Math.PI * 2,false)
    c.stroke()
    if(x + 30 > window.innerWidth|| x - 30 < 0){
        xvel = -xvel
    }
    if(y+30 > window.innerHeight || y-30 < 0){
        yvel = -yvel
    }
    x += xvel
    y += yvel
    console.log("i")
}
animate()


