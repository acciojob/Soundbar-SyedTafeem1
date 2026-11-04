//your JS code here. If required.
        const btn = document.querySelectorAll(".btn")
        const audios = document.querySelectorAll("#myAudio");
        const stop = document.querySelector(".stop")

        btn.forEach((bt,index)=>{
            bt.addEventListener("click",()=>{
                audios.forEach((audio) => {
                    audio.pause();
                    audio.currentTime = 0;
                });
                audios[index].play();
            })
        })

        stop.addEventListener("click",()=>{
            audios.forEach((audio) => {
                audio.pause();
                audio.currentTime = 0;
            });

        })
        })