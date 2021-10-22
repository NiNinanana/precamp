function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value // 1234 / 위 function의 phone1은 그 중괄호를 나오지 못함. 따라서 여기서 상수명을 phone1으로 해도 됨
    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

function changePhone3(){
    const phone3 = document.getElementById("phone3").value // 1234 / 위 function의 phone1은 그 중괄호를 나오지 못함. 따라서 여기서 상수명을 phone1으로 해도 됨
    if(phone3.length === 4) {
        document.getElementById("send").style = "background-color : yellow; cursor: pointer;"
        // document.getElementById("send").setAttribute("src", "disabled='disabled'") disabled제거하기
    }
}

let isStarted = false



    const aaa=()=>{ // 화살표함수
        document.getElementById("check").style = "background-color : yellow; cursor: pointer;"
        if(isStarted === false){
            isStarted = true

            const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
            document.getElementById("qqq").innerText = token


            let time = 179

            setInterval(function(){
                if(time >= 0){
                    const minutes = String(Math.floor(time/60)).padStart(2, "0")
                    const seconds = String(time%60).padStart(2, "0")
                    document.getElementById("ppp").innerText = minutes + ":" + seconds
                    time = time-1
                    } else {
                        document.getElementById("send").style = "background-color : none; cursor: default;"
                        document.getElementById("check").style = "background-color : none; cursor: default;"
                        isStarted = false
                        document.getElementById("qqq").innertext = "000000"
                    }
                }, 10)
        } else {
            alert("이미 실행되었습니다.")
            }
        
        
    } 

function check(){
    alert("인증이 완료되었습니다.")
}