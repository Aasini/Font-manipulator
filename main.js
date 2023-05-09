var difference=0;
leftwrist=0;
rightwrist=0;

function setup()
{
video=createCapture(VIDEO);
video.size(550,550);
canvas=createCanvas(550,500);
canvas.position(600,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function draw()
{
    background('#ffb6c1');
    fill('#ADD8E6');
textSize(difference);
    text('Aasini',50,200);
   
}

function modelLoaded()
{
console.log('Posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);
    }
}

