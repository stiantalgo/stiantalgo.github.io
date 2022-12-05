window.addEventListener("load", function () {
    const displayBig = this.document.getElementById("displayBig");
    const container = this.document.getElementById("container");
    const startBtn = this.document.getElementById("startBtn");
    const muteMusic = this.document.querySelector(".switchBtn");
    const muteLabel = this.document.querySelector(".switch");
    const snowLabel = this.document.querySelector(".switchSnow");
    const snowCheck = this.document.querySelector(".switchBtnSnow");
    const bgMusic = new Audio("https://github.com/stiantalgo/stiantalgo.github.io/blob/main/media/JulesangHøgereBjelle.mp3?raw=true");
    const creditsBtn = this.document.querySelector("#credits");
    const creditsDiv = this.document.querySelector("#creditsDiv");
    const snowz = this.document.querySelector(".snow");
    const body = this.document.querySelector("html");
    let isOpen = false;


    startBtn.addEventListener("click", openCalendar);

    //hide display and clear it.
    displayBig.addEventListener("click", () => {
        closeDisplay();
    });

    creditsBtn.addEventListener("click", openCredits);

    muteLabel.addEventListener("click", muteMusicFunction);

    snowLabel.addEventListener("click", () => {
        if (snowCheck.checked) {
            removeSnowDivs();
        }
        else if (!snowCheck.checked) {
            addSnowDivs(150);
        }
    });

    const date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;

    if (day > 24 || month != 12) {
        day = 24;
    } else {
        day = date.getDate();
    }

    startHidden();
    allowedDays(day);            // set day here
    addMiniArt(day);             // set day here
    addArtEventListeners(day);   // set day here


    function addArtEventListeners(days) {

        for (let i = 1; i <= days; i++) {
            document.getElementById(`back${i}`).addEventListener("click", () => {
                displayBig.style.display = "block";
                container.style.filter = "blur(20px)";

                if (i == 24 || i == 8 || i == 14) {
                    displayBig.style.background = "";
                    embedVideo(i);
                    displayBig.style.backgroundColor = "black";
                }
                else if (i == 11) {
                    displayBig.style.background = `url(./dailyart/art${i}.gif`;
                    displayBig.style.backgroundRepeat = "no-repeat";
                    displayBig.style.backgroundPosition = "center";
                }
                else if (i == 18) {
                    displayBig.style.background = `url(./dailyart/art${i}.png`;
                    embedGame("https://draggmaste.itch.io/christmas-runner");
                    displayBig.style.backgroundColor = "black";
                }
                else {
                    displayBig.style.background = `url(./dailyart/art${i}.png`;
                    displayBig.style.backgroundSize = "contain";
                    displayBig.style.backgroundRepeat = "no-repeat";
                    displayBig.style.backgroundPosition = "center";
                }
                isOpen = true;
            })
        }
    }

    function addMiniArt(days) {
        for (let i = 1; i <= days; i++) {
            document.getElementById(`back${i}`).style.background = `url(./dailyart/art${i}.png`
            document.getElementById(`back${i}`).style.backgroundSize = "cover";
            document.getElementById(`back${i}`).style.backgroundPosition = "center";
        }
    }

    function embedVideo(index) {
        if (bgMusic.play) {
            bgMusic.pause();
            muteMusic.checked = true;
        }

        let link = "";
        switch (index) {
            case 24: link = "https://www.youtube.com/embed/PwM_zBK2cgk"; break;
            case 14: link = "https://www.youtube.com/embed/NpcuUYDu-_w"; break;
            case 8: link = "https://www.youtube.com/embed/brbHYliXVws"; break;


            default:
                break;
        }

        displayBig.innerHTML = `<iframe 
                                width="90%"
                                height="80%" 
                                src="${link}" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture" 
                                allowfullscreen>
                                </iframe>`;
        background: `radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)`;
    }

    function embedGame(gameLink) {
        let game = gameLink;
        if (bgMusic.play) {
            bgMusic.pause();
            muteMusic.checked = true;
        }

        displayBig.innerHTML = `<iframe 
            width="80%"
            height="20%" 
            frameborder="0" 
            src="https://itch.io/embed/1814378" 
            width="552" 
            height="167">
            <a href="${game}">Christmas-Runner by draggmaste</a>
            </iframe>`;
    }


    function closeDisplay() {
        displayBig.innerHTML = "";
        displayBig.style.background = "";
        displayBig.style.display = "none";
        container.style.filter = "blur(0px)";

        //unpause music if paused
        if (bgMusic.paused) {
            bgMusic.play();
            muteMusic.checked = false;
        }
        isOpen = false;
    }

    function openCalendar() {
        container.style.filter = "blur(0px)";
        startBtn.hidden = true;
        addSnowDivs(50);

        // add music
        bgMusic.volume = 0.02;
        bgMusic.loop = true;
        bgMusic.play();
    }

    function openCredits() {
        if (creditsDiv.hidden == true) {
            creditsDiv.hidden = false;
        } else {
            creditsDiv.hidden = true;
        }
    }

    function muteMusicFunction() {
        if (muteMusic.checked == true) {
            bgMusic.pause();
        }
        else {
            bgMusic.play();
        }
    }


    function allowedDays(num) {
        for (let i = 1; i <= num; i++) {
            showDoor(i);
        }
    }

    function startHidden() {
        for (let i = 1; i <= 24; i++) {
            document.getElementById(`day${i}`).style.visibility = "hidden";
        }
    }

    function showDoor(num) {
        document.getElementById(`day${num}`).style.visibility = "visible";
    }

    function removeSnowDivs() {
        // remove snow divs
        let snowDivs = document.getElementById("snowContainer");
        while (snowDivs.firstChild) {
            snowDivs.removeChild(snowDivs.firstChild);
        }
    }

    function addSnowDivs(num) {
        for (let i = 0; i < num; i++) {
            const snowDiv = document.createElement("div");
            snowDiv.className = "snow";
            document.getElementById("snowContainer").appendChild(snowDiv);
        }
    }

    // function addHatches(){
    //     for(let i = 1; i <= day; i++){

    //         const dayHatch = document.createElement("div");
    //         dayHatch.className = `day-${i}`;
    //         dayHatch.id = `day${i}`;
    //         document.getElementById("allHatches").appendChild(dayHatch);

    //             const lab = document.createElement("label");
    //             lab.className = "myLab";
    //             dayHatch.appendChild(lab);

    //                 const myInput = document.createElement("input");
    //                 myInput.type = "checkbox";
    //                 lab.appendChild(myInput);

    //                 const myDoor = document.createElement("div");
    //                 myDoor.className = "door";
    //                 lab.appendChild(myDoor);

    //                     const myDoorFront = document.createElement("div");
    //                     myDoorFront.className = "front";
    //                     myDoorFront.id = `front${i}`;

    //                     myDoor.appendChild(myDoorFront);

    //                     const myDoorBack = document.createElement("div");
    //                     myDoorBack.className = "back";
    //                     myDoorBack.id = `back${i}`;
    //                     myDoor.appendChild(myDoorBack);    
    //     }
    // }

        // close window if clicked outside area
    // this.document.querySelector("html").click(function (e) {
    //     var target = e.target;

    //     if (document.querySelector('target').closest("#bigDisplay").length == 0){

    //         closeDisplay();
    //     }
    // });
})
