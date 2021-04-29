// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (licenseType === "GNU General Public License 3.0") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  return licenseString
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## Description
${data.Description}

## Installation 
${data.Installation}

## Usage 
${data.Usage}

## Contributors
${data.Contributors}

## Test
${data.Test}

## Questions
Contact me:

Github: [${data.Username}](https://github.com/${data.Username})

Email: ${data.Email}

## License
${renderLicenseBadge(data)}

`;
}

export default generateMarkdown

