obj = new skrolr("speaker-slider", {
    waitTime: 2000,
    moveTime: 750,
    numWide: [
        [0,500,1], // width of parent is 0-499px, show 1 <li> element
        [500,750,2],
        [750,1000,3],
        [1000,1250,4],
        [1250,1500,5],
        [1500,1750,6],
        [1750,,7] // width of parent is at least (no maximum) 1750px, show 7 <li> elements
    ],
    size: "100% 350px", // width then height
    arrows: true,
    buttons: false
});