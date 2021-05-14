let tbody = document.querySelector('tbody');
let liveSitePath = 'https://hoangdesu.github.io/Mini-web-development-projects/';
let projectFolderPath = 'https://github.com/hoangdesu/Mini-web-development-projects/tree/main/';


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

createRow = (i, name, site, folder) => {
    let table = `
    <tr>
        <td>${i}</td>
        <td><a href="${site}" target="_blank">${name}</a></td>
        <td><a href="${folder}" target="_blank">Folder</a></td>
    </tr>`;
    return table;
}

projects.forEach((proj, i) => {
    projURL = proj.split(' ').join('%20');
    let projectPath = liveSitePath + projURL;
    let folderPath = projectFolderPath + projURL;
    // console.log(projectPath);
    tbody.innerHTML += createRow(i+1, proj, projectPath, folderPath);
})


// Get all directory by NodeJS
function getFolders() {
    const fs = require('fs');
    let files = fs.readdirSync('./');
    return files;
}

// getFolders();