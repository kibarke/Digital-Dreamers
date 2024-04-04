const Handlebars = require('handlebars');

const strengthTemplate = `
    <iframe width="560" height="315" src="{{embeddedStrengthVideoLink}}" frameborder="0" allowfullscreen></iframe>
`;
const yogaTemplate = `<iframe width="560" height="315" src="{{embeddedStrengthVideoLink}}" frameborder="0" allowfullscreen></iframe>
`;



const strengthContext = {
    embeddedStrengthVideoLink: "https://youtu.be/tj0o8aH9vJw?si=OJULLA10KlLe3SPG"
};



const compiledStrengthTemplate = Handlebars.compile(strengthTemplate);
const resultStrength = compiledStrengthTemplate(strengthContext);

console.log(resultStrength);
