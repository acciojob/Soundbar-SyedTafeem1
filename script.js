//your JS code here. If required.
        const btn = document.querySelectorAll(".btn")
        const myAudio = document.getElementById("myAudio")
        const stop = document.querySelector(".stop")

        btn.forEach((bt)=>{
            bt.addEventListener("click",()=>{
                myAudio.play()
            })
        })

        stop.addEventListener("click",()=>{
            myAudio.pause()
        })