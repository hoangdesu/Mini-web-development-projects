let tbody = document.querySelector('tbody');
let defaultPath = 'https://hoangdesu.github.io/Mini-web-development-projects/';

const projects = [
    'Animated button',
    'Basic',
    'Box sizing',
    'CSS Burger Menu Button',
    'CSS Endless Road',
    'CSS Heart',
    'CSS in CSS',
    'Change colors button',
    'ColorThemeTest',
    'CountryFlags',
    'DOM demo',
    'Expand and collapse cards',
    'Letter counter',
    'Link hover effect',
    'Login Signup Form',
    'Popup cards',
    'Random color generator',
    'Responsive Navbar',
    'Transparent Login Form',
    'jQuery'
]

createRow = (i, name, path) => {
    let table = `
    <tr>
        <td>${i}</td>
        <td>${name}</td>
        <td><a href="${path}">Link</a></td>
    </tr>`;
    return table;
}

projects.forEach((proj, i) => {
    projURL = proj.split(' ').join('%20');
    let projectPath = defaultPath + projURL;
    // console.log(projectPath);
    tbody.innerHTML += createRow(i+1, proj, projectPath);
})


// Get all directory by NodeJS
function getFolders() {
    const fs = require('fs');
    let files = fs.readdirSync('./');
    return files;
}

// getFolders();