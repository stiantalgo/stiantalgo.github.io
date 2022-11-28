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
 


    startBtn.addEventListener("click", openCalendar);

    // hide display and clear it.
    displayBig.addEventListener("click", () =>{
        displayBig.innerHTML = "";
        displayBig.style.background = "";
        displayBig.style.display = "none";

        //unpause music if paused
        if(bgMusic.paused){
            bgMusic.play();
            muteMusic.checked = false;
        }        
    });

    creditsBtn.addEventListener("click", openCredits);

    muteLabel.addEventListener("click", muteMusicFunction);

    snowLabel.addEventListener("click", () => {
        if(snowCheck.checked){
            removeSnowDivs();
        }
        else if(!snowCheck.checked){
            addSnowDivs(150);
        }
    });
    

    const date = new Date;
    let day = date.getDate();   
    
    startHidden();
    allowedDays(24);            // set day here
    addMiniArt(24);             // set day here
    addArtEventListeners(24);   // set day here

    function addArtEventListeners(days){
        for(let i = 1; i <= days; i++){
                document.getElementById(`back${i}`).addEventListener("click", () => {
                displayBig.style.display = "block";
                if(i == 4){
                    embedVideo(i);
                    displayBig.style.backgroundColor = "black";                    
                }

                if(i == 11){
                    displayBig.style.background = `url(./dailyart/art${i}.gif`;
                    // displayBig.style.backgroundSize = "cover";
                    displayBig.style.backgroundRepeat = "no-repeat";
                    displayBig.style.backgroundPosition = "center";                    
                }

                else{
                    displayBig.style.background = `url(./dailyart/art${i}.png`;
                    displayBig.style.backgroundSize = "cover";
                    displayBig.style.backgroundRepeat = "no-repeat";
                    displayBig.style.backgroundPosition = "center"; 
                }               
            })
        }
    }


    function addMiniArt(days){
        for(let i = 1; i <= days; i++){


                document.getElementById(`back${i}`).style.background = `url(./dailyart/art${i}.png`
                document.getElementById(`back${i}`).style.backgroundSize = "cover";


        }
    }

    function embedVideo(index){
        if(bgMusic.play){
            bgMusic.pause();
            muteMusic.checked = true;
        }

        displayBig.innerHTML = `<iframe 
                                width="90%"
                                height="80%" 
                                src="https://www.youtube.com/embed/PwM_zBK2cgk" 
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

    function openCalendar() {
        container.style.filter = "blur(0px)";
        startBtn.hidden = true;
        addSnowDivs(50);

        // add music
        bgMusic.volume = 0.02;
        bgMusic.loop = true;
        bgMusic.play();        
    } 

    function openCredits(){
        if(creditsDiv.hidden == true){
            creditsDiv.hidden = false;
        }else{
            creditsDiv.hidden = true;
        }

    }

    function muteMusicFunction(){
        if(muteMusic.checked == true){
            bgMusic.pause();
        }
        else{
            bgMusic.play();
        }
    }


    function allowedDays(num){
        for(let i = 1; i <= num; i++){
            showDoor(i);
        }
    }
    
    function startHidden(){
        for(let i = 1; i <= 24; i++){
            document.getElementById(`day${i}`).style.visibility = "hidden";
        }
    }

    function showDoor(num){
        document.getElementById(`day${num}`).style.visibility = "visible";
    }

    function removeSnowDivs(){
        // remove snow divs
        let snowDivs = document.getElementById("snowContainer");
        while(snowDivs.firstChild ){
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


    // function removeSnow() {
    //     const elements = document.getElementsByClassName("snow");
    //     while (elements.length > 0) {
    //         elements[0].parentNode.removeChild(elements[0]);
    //     }
    // }


    // function addHatches(){
    //     for(let i = 1; i <= day; i++){

    //         const dayHatch = document.createElement("div");
    //         dayHatch.className = `day-${i}`;
    //         document.getElementById("allHatches").appendChild(dayHatch);

    //         const lab = document.createElement("label");
    //         lab.className = "myLab";
    //         dayHatch.appendChild(lab);

    //         const myInput = document.createElement("input");
    //         lab.appendChild(myInput);

    //         const myDoor = document.createElement("div");
    //         myDoor.className = "door";
    //         lab.appendChild(myDoor);

    //         const myDoorFront = document.createElement("div");
    //         myDoorFront.className = "front";
    //         myDoorFront.className = `front${i}`;

    //         myDoor.appendChild(myDoorFront);

    //         const myDoorBack = document.createElement("div");
    //         myDoorBack.className = "back";
    //         myDoorBack.className = `back${i}`;
    //         myDoor.appendChild(myDoorBack);    
    //     }
    // }




   

    

})
