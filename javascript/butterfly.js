const Butterfly = () => {
    const renderer = OrangeButterflyRenderer(this);
    const pos = [20,20];
    let heading = 0;
    let speed = 0;

    const position = (x, y) => {
        pos = [x, y];
    };
    
    const flap = (flapSpeed, done) => {
        renderer.closeWings();
        setTimeout(function(){
            renderer.openWings();		
            done();
        }, flapSpeed);
    };

    const fly = () => {
        let flapSpeed = 200;
        let flapDelay = 200;
        setTimeout(function(){
            flap(flapSpeed, function(){
                fly(flapSpeed, flapDelay);
            });
        }, flapDelay);
    };

    const appear = () => {
        renderer.drawAtLocation(pos[0], pos[1]);
        fly();
    };
    
    return {appear}
};


const OrangeButterflyRenderer = (butterfly) => {
    
    const addRefererenceToDom = () => {
        let htmlString = '<div class="schmetterling"><img class="feelers" src="./images/butterfly-feelers.png"/><img class="body" src="./images/butterfly-body.png"/><img class="left wing" src="./images/butterfly-left.png" /><img class="right wing" src="./images/butterfly-right.png" /></div>';
        let template = document.createElement('template');
        template.innerHTML = htmlString;
        this.elementReference = template.content.firstChild;
        this.rightWing = this.elementReference.querySelector(".wing.right");
        this.leftWing = this.elementReference.querySelector(".wing.left");
        document.querySelector("body").appendChild(elementReference);     
    }

    const openWings = () => {
        this.rightWing.classList.remove("closed");
        this.leftWing.classList.remove("closed");
    }; 
    
    const closeWings = () => {
        this.rightWing.classList.add("closed");
        this.leftWing.classList.add("closed");
    }; 

    const drawAtLocation = (x,y) => {
        if(!this.elementReference) {
            addRefererenceToDom();
            elementReference.style.left = x+"px";
            elementReference.style.top = y+"px";
        }
    }; 
    
    return {openWings, closeWings, drawAtLocation}
};

