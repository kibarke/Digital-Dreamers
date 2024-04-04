const Handlebars = require('handlebars');

const strengthTemplate = `
    <iframe width="560" height="315" src="{{embeddedStrengthVideoLink}}" frameborder="0" allowfullscreen></iframe>
`;

const context = {
    embeddedStrengthVideoLink: "https://youtu.be/tj0o8aH9vJw?si=OJULLA10KlLe3SPG"
};



const compiledTemplate = Handlebars.compile(strengthTemplate);
const result = compiledTemplate(context);

console.log(result);
