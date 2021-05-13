nosex = "";
nosey = "";

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nosex-10, nosey-10, 30, 30);
}

function take_snapshot() {
    save('clownNose-filter.png')
}

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/8cjNbW12/Pngtree-april-fool-s-day-clown-4539780.png");
}

function modelLoaded() {
    console.log("Model has loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
    }
}

