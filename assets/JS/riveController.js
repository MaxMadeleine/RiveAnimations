let isFeed;
let isHaha;
let isSad
let numHealth

const riveInstance = new rive.Rive({

    src: "assets/animation/yoursheep.riv",
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: 'controller',
    //stateMachines: ['state machine shark', 'controller']
    onload: () =>{
        riveInstance.resizeDrawingSurfaceToCanvas();

        let controllerInputs = riveInstance.stateMachineInputs('controller');

        console.log('controller', controllerInputs);

    isFeed = controllerInputs.find((item) => item.name === 'Feed')
    isHaha = controllerInputs.find((item) => item.name === 'haha')
    isSad = controllerInputs.find((item) => item.name === 'sad')
    numHealth = controllerInputs.find((item) => item.name === 'numHealth')

    console.log(numHealth);
    


        
    }




})

export {isFeed, isHaha, isSad, numHealth};