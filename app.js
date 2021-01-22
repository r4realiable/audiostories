const fs = require('fs')
const { join, extname, basename } = require('path');
const { readdirSync, renameSync } = require('fs');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const filecount = 189;
const { getAudioDurationInSeconds } = require('get-audio-duration');
 
// From a local path...

// uuidv4()
/** only untracked files
 * git add $(git ls-files -o --exclude-standard)
 */
//const audios = require('./Audios');

   //  addToServer(audios);
async function addToServer(audios) {
    for (i = 0; i < audios.length; i++) {
        let index = filecount + i - 1;
        const audio = { id: uuidv4(), title: audios[i].title, url: `https://r4realiable.github.io/audiostories/English/${audios[i].name}.mp3`, language: 'english', artist: 'kambi maman', description: audios[i].title }
        await axios.post('http://localhost:5001/api/v1/audios', audio)
    }
}
 renameFiles();
async function  renameFiles() {
    const files = readdirSync(__dirname)

        for (const oldFile of files) {
                 
            const extension = extname(oldFile);
            const name = basename(oldFile, extension);
               let duration = 0 ;
           // console.log(extension)
            if (extension=='.mp3') {
                              try{
                     duration = await getAudioDurationInSeconds(oldFile)  ;
                    console.log(`${oldFile} --> ${duration}`);
                        }catch(e){
                            console.log(e)
                        }
               let filename = generatefileNames(name)
                // renameSync(join(__dirname, oldFile), join(__dirname, filename.name + extension));
            
            }
            // if (name === 'old') {
            //     renameSync(join(__dirname, oldFile), join(__dirname, 'new' + extension));
            // }
        }
}

function generatefileNames(name,duration){
 const names= name.split(' ');
    const len = names.length;
    const fname = names.pop(); 
    const title = names.join(' ');
    const audio = {name:fname,title: fname,duration}
    // console.log(audio) 
    saveFilenameToDisk(audio)
    return audio;

}


function saveFilenameToDisk(audio) {
    fs.appendFile('Audios.js', `{"name":"${audio.name}","title":"${audio.title}"},"duration":"${audio.duration}"\n`, function (err) {
        if (err) throw err;
        console.log('Saved!--> Tgas to file');
    });
}