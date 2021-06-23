
function loginUser(email,password, cb) {
    setTimeout(()=>{
        console.log('data is available at this point')
        cb({userEmail: email});
    },2000)
}

function getVideos(email, cb) {
    setTimeout(()=>{
        console.log('videos are ready')
        cb(["video1","video2","video3"]);
    },2000)
}

console.log("start");
const user = loginUser('harove', '1234',(user)=>{
    console.log(user)
    const videos = getVideos(user.email, (videos)=>{
        console.log(videos)
    })
});


console.log("finish");


