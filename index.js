
function loginUser(email,password, cb) {
    setTimeout(()=>{
        console.log('data is available at this point')
        cb(email);
    },2000)
}

function getVideos(email, cb) {
        email&&setTimeout(()=>{
            console.log('videos are ready')
            cb(["video1","video2","video3"]);
        },2000) 
}

console.log("start");
const user = loginUser('hola', '1234',(email)=>{
    console.log(email)
    const videos = getVideos(email, (videos)=>{
        console.log(videos)
    })
});


console.log("finish");


