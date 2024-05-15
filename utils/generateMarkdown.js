// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        let random = license;
        random = random.replace(" ", "_");
        return `https://img.shields.io/badge/license-${random}-blue.svg`;
    }
    return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// put the link for the license directly reach there
function renderLicenseLink(license) {
    if (license !== "None") {
        let random = license;
        random = random.replace(" ", "-").toLowerCase();
        return `https://choosealicense.com/licenses/${random}/`;
    }
    return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        let section = `This project is licensed under the [${license}](${renderLicenseLink(
            license
        )}) license.`;
        return section;
    }
    return ``;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
    return `# ${data.title}
![GitHub license](${renderLicenseBadge(data.license)})

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

'''
${data.dependencies}
'''

## Usage

It's ${data.title}

## License

${renderLicenseSection(data.license)}
  
## Contributing



## Tests

To run tests, run the following command:

'''
${data.test}
'''

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
        data.email
    }. You can find more of my work at [${data.gitname}](https://github.com/${
        data.gitname
    }/).
  
  `;
}

module.exports = generateMarkdown;
