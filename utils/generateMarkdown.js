function generateMarkdown(data) {
  return `
  # ${data.title}
  //BADGE////////
  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [License] (#license)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions please contact me at ${data.email}. My github profile is ${data.username}.
  `;
}

module.exports = generateMarkdown;
