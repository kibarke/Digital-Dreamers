const Handlebars = require('handlebars');

// styling
const strengthTemplate = `
    <iframe width="560" height="315" src="{{embeddedStrengthVideoLink}}" frameborder="0" allowfullscreen></iframe>
`;
const yogaTemplate = `<iframe width="560" height="315" src="{{embeddedYogaVideoLink}}" frameborder="0" allowfullscreen></iframe>
`;
const cardioTemplate = `<iframe width="560" height="315" src="{{embeddedCardioVideoLink}}" frameborder="0" allowfullscreen></iframe>`;


// links
const strengthContext = {
    embeddedStrengthVideoLink: "https://youtu.be/tj0o8aH9vJw?si=OJULLA10KlLe3SPG"
};

const yogaContext = {
    embeddedYogaVideoLink: "https://youtu.be/Eml2xnoLpYE?si=wu-aVsodahUX5Pl6"
};

const cardioContext = {
    embeddedCardioVideoLink: "https://youtu.be/kZDvg92tTMc?si=psvf2yjm0pD8jX2H"
};



// Results
const compiledStrengthTemplate = Handlebars.compile(strengthTemplate);
const resultStrength = compiledStrengthTemplate(strengthContext);

const compiledYogaTemplate = Handlebars.compile(yogaTemplate);
const resultYoga = compiledYogaTemplate(yogaContext);

const compiledCardioTemplate = Handlebars.compile(cardioTemplate);
const resultCardio = compiledCardioTemplate(cardioContext);

console.log(resultStrength);
console.log(resultYoga);
console.log(resultCardio);