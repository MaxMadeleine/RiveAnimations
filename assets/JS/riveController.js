let isWave;

let isSeizure;

const riveInstance = new rive.Rive({

    src: "assets/animation/hej.riv",
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: 'StateMachineShark',
    //stateMachines: ['state machine shark', 'controller']
    onload: () =>{
        riveInstance.resizeDrawingSurfaceToCanvas();

        let stateMachineSharkInputs = riveInstance.stateMachineInputs('StateMachineShark');

        console.log('StateMachineShark', stateMachineSharkInputs);

    isWave = stateMachineSharkInputs.find((item) => item.name === 'wave')
    isSeizure = stateMachineSharkInputs.find((item) => item.name === 'seizure')

        
    }




})

export {isWave, isSeizure};