/*
How to Use the App from the Command Line

    Add Note: node noteapp.js add MyNote "This is my first note."
    Read Note: node noteapp.js read MyNote
    Delete Note: node noteapp.js delete MyNote
*/
const fs = require('fs');
const [, , action, title, content] = process.argv;

const addNote = (title, content) => {
  //   fs.writeFile(`${title}.txt`, content, (err) => {
  //     if (err) throw err;
  //     console.log(`Note ${title} added!`);
  //   });

  try {
    const filePath = path.join(__dirname, `${title}.txt`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('File written successfully (sync)!');
  } catch (err) {
    console.log(err);
    if (err.message === 'path is not defined') {
      console.error('Must provide title!');
    }
    // if ()
    // console.error('An error occurred:', err.message);
  }
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
