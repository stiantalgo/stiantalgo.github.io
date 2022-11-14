window.addEventListener("load", function () {


    const someSnow = this.document.getElementById("someSnow");
    const allSnow = this.document.getElementById("allSnow");
    const noSnow = this.document.getElementById("noSnow");
    const displayBig = this.document.getElementById("displayBig");
    const backdiv1 = this.document.getElementById("back1");

    const container = this.document.getElementById("container");
    const startBtn = this.document.getElementById("startBtn");

    //const bgMusic = new Audio("./media/jb_rock.mp3");
    const bgMusic = new Audio("https://github.com/user/project/blob/main/media/jb_rock.mp3?raw=true");
    
  


    someSnow.addEventListener("click", () => { addSnowDivs(30) });
    allSnow.addEventListener("click", () => { addSnowDivs(300) });
    noSnow.addEventListener("click", removeSnow);
    startBtn.addEventListener("click", openCalendar);
    displayBig.addEventListener("click", () =>{
        displayBig.style.display = "none";
    });

    
    backdiv1.addEventListener("click", showItem);



    function openCalendar() {
        container.style.filter = "blur(0px)";
        startBtn.hidden = true;
        addSnowDivs(50);

        // add music
        bgMusic.volume = 0.04;
        bgMusic.loop = true;
        bgMusic.play();
    }

    function showItem() {    
        displayBig.style.display = "block";

        // displayBig.style.background = `url(./img/Art${1}.png)`;
        displayBig.style.background = "url(./img/Art1.jpg)";
    }



    function addSnowDivs(num) {
        for (let i = 0; i < num; i++) {
            const snowDiv = document.createElement("div");
            snowDiv.className = "snow";
            document.getElementById("snowContainer").appendChild(snowDiv);

        }
    }

    function removeSnow() {
        const elements = document.getElementsByClassName("snow");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }



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
    //         myDoorFront.className = `front{i}`;

    //         myDoor.appendChild(myDoorFront);

    //         const myDoorBack = document.createElement("div");
    //         myDoorBack.className = "back";
    //         myDoorBack.className = `back{i}`;
    //         myDoor.appendChild(myDoorBack);    
    //     }
    // }

})
