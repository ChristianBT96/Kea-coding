console.log(danishInflationNumbersWithYear);
console.log(danishInflationNumbers);



document.querySelector('button').addEventListener('click', () => {
    const synth = new Tone.Synth().toDestination();
    danishInflationNumbers.forEach((inflationNumber, index) => {
        let hz = 500 * Math.abs(inflationNumber);
        let delay = Tone.Time(index * 0.1).toSeconds();
        synth.triggerAttackRelease(hz, "8n",delay );
    });
});



