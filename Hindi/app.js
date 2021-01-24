const fs = require('fs')
const { join, extname, basename } = require('path');
const { readdirSync, renameSync } = require('fs');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const { getAudioDurationInSeconds } = require('get-audio-duration');
// uuidv4()
const audios = require('./AudiosNew');
const { default: Axios } = require('axios');


// UpdateNewAudio(audios);

async function UpdateNewAudio(audios){

  for(let i =0; i<audios.length;i++){
    console.log(i)
    let currentAudio = audios[i];
      if(!currentAudio.duration){

        let duration = await  getAudioDurationInSeconds(`${currentAudio.name}.mp3`);
        console.log(duration);
        currentAudio.duration = duration.toFixed(2);

      }
      saveFilenameToDisk(currentAudio)

  }

}




addToServer(audios);
async function addToServer(audios){
    for (i = 1; i < audios.length;i++){
        const audio = { id: uuidv4(),title: audios[i].title, url: `https://r4realiable.github.io/audiostories/Hindi/${audios[i].name}.mp3`, language: 'hindi', artist: 'mama gun', description: audios[i].title, duration: audios[i].duration}
        await axios.post('http://localhost:5001/api/v1/audios', audio)
    }
}
function renameFiles(){
    const files = readdirSync(__dirname)
    for (const oldFile of files) {
        const extension = extname(oldFile);
        const name = basename(oldFile, extension);
        console.log(extension)
        if (extension == '.mp3') {
            let filename = generatefileNames(name)
            renameSync(join(__dirname, oldFile), join(__dirname, filename.name + extension));

        }
    }

}


function generatefileNames(name){
 const names= name.split('_');
    const len = names.length;
    const fname = names.pop(); 
    const title = names.join(' ');
    const audio = {name:fname,title}
    // console.log(audio) 
   saveFilenameToDisk(audio)
    return audio;

}



function saveFilenameToDisk(audio) {
  fs.appendFile('AudiosNew.js', `{"name":"${audio.name}","title":"${audio.title}","duration":"${audio.duration}"},\n`, function (err) {
        if (err) throw err;
        console.log('Saved!--> Tgas to file');
    });
}
