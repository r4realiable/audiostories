const fs = require('fs')
const { join, extname, basename } = require('path');
const { readdirSync, renameSync } = require('fs');

const files = readdirSync(__dirname)
for (const oldFile of files) {
    const extension = extname(oldFile);
    const name = basename(oldFile, extension);
    console.log(extension)
    if (extension=='.mp3') {
       let filename = generatefileNames(name)
        renameSync(join(__dirname, oldFile), join(__dirname, filename.name + extension));
    
    }
    // if (name === 'old') {
    //     renameSync(join(__dirname, oldFile), join(__dirname, 'new' + extension));
    // }
}


function generatefileNames(name){
 const names= name.split(' ');
    const len = names.length;
    const fname = names.pop(); 
    const title = names.join(' ');
    const audio = {name:fname,title}
    // console.log(audio) 
   // saveFilenameToDisk(audio)
    return audio;

}


function saveFilenameToDisk(audio) {
    fs.appendFile('Audios.js', `{"name":"${audio.name}","title":"${audio.title}"},\n`, function (err) {
        if (err) throw err;
        console.log('Saved!--> Tgas to file');
    });
}