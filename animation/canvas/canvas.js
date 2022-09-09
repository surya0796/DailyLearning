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


// line
// c.beginPath();
// c.strokeStyle = "red"
// c.moveTo(400,0)
// c.lineTo(100,400)
// c.lineTo(400,400)
// c.lineTo(400,0)
// c.stroke()


for(let i = 0; i <100; i++){
    // Random circles
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    // let lineX = Math.random() * window.innerWidth
    // let lineY = Math.random() * window.innerHeight
    let radius = Math.random() * 70
    let red = Math.random() * 255
    let green = Math.random() * 255
    let blue = Math.random() * 255

    radius = radius < 1 ? Math.random() * 100 : radius
    c.beginPath();
    c.strokeStyle = `rgb(${red},${green},${blue})`
    c.arc(x,y,radius,0, Math.PI *Math.random() * 10,false)
    c.stroke()


    // Random lines
    // c.beginPath();
    // c.strokeStyle = "black"
    // c.moveTo(x,y)
    // c.lineTo(x*2,y*4)
    // c.lineTo(x,y)
    // c.lineTo(x+50,y+10)
    // c.stroke()
}


