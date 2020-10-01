// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  //BADGE////////
  ## Table of Contents
  - [Description]
  - [Installation]
  - [Usage]
  - [License]
  - [Contributing]
  - [Tests]
  - [Questions]

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
  ${data.questions}
`;
}

module.exports = generateMarkdown;
