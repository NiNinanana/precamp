function startWord(){
    const word = document.getElementById("word").innerText
    const lastWord = word[word.length -1]

    const myWord = document.getElementById("myWord").value
    const firstWord = myWord[0]

    if(lastWord === firstWord){
        // 맞았을 때
        alert("정답입니다.")
        document.getElementById("myWord").value = ""
        document.getElementById("result").innerText = "정답입니다."
        document.getElementById("word").innerText = myWord
    } else {
        // 틀렸을 때
        alert("오답입니다.")
        document.getElementById("myWord").value = ""
        document.getElementById("result").innerText = "오답입니다."
    }
}

function startLotto(){
    let lotto__1 = Math.floor(Math.random()*45+1)
    let lotto__2 = Math.floor(Math.random()*45+1)
    if(lotto__1 === lotto__2){
        let lotto__2 = Math.floor(Math.random()*45+1)
    }
    let lotto__3 = Math.floor(Math.random()*45+1)
    let lotto__4 = Math.floor(Math.random()*45+1)
    let lotto__5 = Math.floor(Math.random()*45+1)
    let lotto__6 = Math.floor(Math.random()*45+1)
    document.getElementById("lotto__1").innerText = lotto__1
    document.getElementById("lotto__2").innerText = lotto__2
    document.getElementById("lotto__3").innerText = lotto__3
    document.getElementById("lotto__4").innerText = lotto__4
    document.getElementById("lotto__5").innerText = lotto__5
    document.getElementById("lotto__6").innerText = lotto__6
    // 중복 제거해야함
}