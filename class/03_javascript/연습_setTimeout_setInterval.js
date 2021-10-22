setTimeout(function(){
    console.log("기능 실행!")
}, 500)
// 2
// VM392:2 기능 실행!
setInterval(function(){
    console.log("안녕하세요")
}, 1000)
// 3
// 7VM428:2 안녕하세요
let time = 10
setInterval(function(){
    if(time >= 0){
        console.log(time)
        time = time-1
    }
}, 1000)
// 2
// VM935:4 10
// VM935:4 9
// VM935:4 8
// VM935:4 7
// VM935:4 6
// VM935:4 5
// VM935:4 4
// VM935:4 3
// VM935:4 2
// VM935:4 1
// VM935:4 0
let time = 180
setInterval(function(){
    if(time >= 0){
        const minutes = Math.floor(time/60)
        const seconds = time%60
        console.log(minutes + ":" + seconds)
        time = time-1
    }
}, 1000)