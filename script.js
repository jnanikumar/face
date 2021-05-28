let video=document.getElementById('video');
let model;
let canvas=document.getElementById('canvas');
height=window.innerHeight/2
width=window.innerWidth/2
canvas.height=window.innerHeight/2
canvas.width=window.innerWidth/2


let c=canvas.getContext('2d');




const setUpCamera=()=>{
    navigator.mediaDevices.getUserMedia(
        {
        video:{width:width,height:height},
        audio:false,
    })
    .then((stream)=>{
        video.srcObject=stream;})
    
};




const detectFaces=async ()=>{
    const prediction=await model.estimateFaces(video,false);
    console.log(prediction)
    c.drawImage(video,0,0,width,height);
    c.beginPath();
    c.lineWidth='4';
    c.strokeStyle='blue';
    prediction.forEach((pred)=>{
        c.beginPath();
        c.lineWidth='4';
        c.strokeStyle='blue';
        // c.fillStyle=rgba(254,0,0,1)
        c.rect(pred.topLeft[0],
               pred.topLeft[1],
               pred.bottomRight[0]-pred.topLeft[0],
               pred.bottomRight[1]-pred.topLeft[1])
        
        c.stroke();
    })

}

setUpCamera()
video.addEventListener('loadeddata',async ()=>{
    model=await blazeface.load();
    setInterval(detectFaces,40)});









    // setInterval(detectFaces(),100)















// var canvas=document.getElementById('canvas');
// canvas.width=window.innerHeight
// canvas.height=window.innerWidth

// c=canvas.getContext('2d')

// c.fillStyle='pink'
// c.fillRect(100,100,100,100)


// c.beginPath();
// c.moveTo(50,200)
// c.lineTo(200,200)
// c.stroke();
// c.strokeStyle='blue';

// c.beginPath()
// c.arc(200,200,30,0,Math.PI*2,false)
// c.stroke()


// for (var i=0;i<300;i++){
//     var x=Math.random()*window.innerHeight;
//     var y=Math.random()*window.innerWidth;
//     var col=['green','red','blue','pink']
//     var color=col[Math.floor(Math.random()*col.length)]
//     c.beginPath();
//     c.strokeStyle=color;
    
//     c.arc(x,y,30,0,Math.PI*2,false)
//     c.stroke()
// }


