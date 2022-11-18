window.addEventListener("load", function () {    
    const displayBig = this.document.getElementById("displayBig");
    const container = this.document.getElementById("container");
    const startBtn = this.document.getElementById("startBtn");
    //const bgMusic = new Audio("https://github.com/stiantalgo/stiantalgo.github.io/blob/main/media/jb_rock.mp3?raw=true");
    const bgMusic = new Audio("https://github.com/stiantalgo/stiantalgo.github.io/blob/main/media/JulesangHøgereBjelle.mp3?raw=true");
  
 


    startBtn.addEventListener("click", openCalendar);

    displayBig.addEventListener("click", () =>{
        displayBig.innerHTML = "";
        displayBig.style.display = "none";
    });

    const date = new Date;
    let day = date.getDate();   
    
    startHidden();
    allowedDays(24); // set day here
    addMiniArt(3);
    addArtEventListeners(4);

    function addArtEventListeners(days){
        for(let i = 1; i <= days; i++){
                document.getElementById(`back${i}`).addEventListener("click", () => {
                displayBig.style.display = "block";
                if(i == 4){
                    embedVideo(i);
                    displayBig.style.backgroundColor = "black";
                    
                }
                else{
                    displayBig.style.background = `url(./dailyart/art${i}.jpg`;
                    displayBig.style.backgroundSize = "cover";
                }
               
            })
        }
    }

    function addMiniArt(days){
        for(let i = 1; i <= days; i++){
            document.getElementById(`back${i}`).style.background = `url(./dailyart/art${i}.jpg`
            document.getElementById(`back${i}`).style.backgroundSize = "cover";
        }
    }

    function embedVideo(index){
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

    function showItem() {    
        displayBig.style.display = "block";
        displayBig.style.background = "url(./img/Art1.jpg)";
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

    // addSnowDivs(50);

    // myBtn.addEventListener("click", () =>{
    //     let myNum = snowInput.value;
    //     if(myNum > 200){
    //         myNum = 200;
    //     }
    //     addSnowDivs(myNum);

    // });

    // let totalHatches = 24;

    // function addHatches(){
    //     for(let i = 1; i <= totalHatches; i++){

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
