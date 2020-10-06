function generateMarkdown(data) {
  let badge = "";
  if (data.license === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Apache License 2.0") {
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  return `
  # ${data.title}
  ${badge}
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
  If you have any questions please contact me at ${data.email}. My github profile username is ${data.username}.
  `;
}

module.exports = generateMarkdown;
