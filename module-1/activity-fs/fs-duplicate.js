const fs = require('node:fs');
const [,, action, title, content] = process.argv;

const addNote = (title, content) => {
    // Check if the note already exists
    fs.access(`${title}.txt`, fs.constants.F_OK, (err) => {
        if (!err) {
            console.log(err)
            console.log(`${title}.txt already exist`);
        } else {
            // If note does not exist, create it
            console.log("File does not exist.");
            fs.writeFile(`${title}.txt`, content, (err) => {
                if (err) return console.error('Error:', err);
                console.log(`Note ${title} added!`);
            });
        }
    });
};

const readNote = (title) => {
    fs.readFile(`${title}.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`Reading Note: ${title}\n\n${data}`);
    });
};

const deleteNote = (title) => {
    fs.unlink(`${title}.txt`, (err) => {
        if (err) throw err;
        console.log(`Note ${title} deleted!`);
    });
};

switch (action) {
    case 'add':
        addNote(title, content);
        break;
    case 'read':
        readNote(title);
        break;
    case 'delete':
        deleteNote(title);
        break;
    default:
        console.log('Action not recognized!');
}