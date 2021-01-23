/**
 * @Author: RahulCv <saravanakumar>
 * @Date:   2021-01-22T07:33:32+05:30
 * @Email:  rahulcv@hotmail.co.in
 * @Last modified by:   saravanakumar
 * @Last modified time: 2021-01-22T08:34:40+05:30
 */



const fs = require('fs')
const { join, extname, basename } = require('path');
const { readdirSync, renameSync } = require('fs');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const filecount = 189;
const { getAudioDurationInSeconds } = require('get-audio-duration');

// uuidv4()
/** only untracked files
 * git add $(git ls-files -o --exclude-standard)
 */
const audios = require('./Audios');
UpdateNewAudio(audios);

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

    //addToServer(audios);
async function addToServer(audios) {
    for (i = 0; i < audios.length; i++) {
        let index = filecount + i - 1;
        const audio = { id: uuidv4(), title: audios[i].title, url: `https://r4realiable.github.io/audiostories/Malayalam/${audios[i].name}.mp3`, language: 'malayalam', artist: 'kambi maman', description: audios[i].title }
        await axios.post('http://localhost:5001/api/v1/audios', audio)
    }
}
//renameFiles();
async function renameFiles() {
    const files = readdirSync(__dirname)

for (const oldFile of files) {
    const extension = extname(oldFile);
    const name = basename(oldFile, extension);
    let duration = 0;
    console.log(extension)
    if (extension=='.mp3') {
          try{
                 duration = await getAudioDurationInSeconds(oldFile)  ;
                    let filename = generatefileNames(name,duration);
                      renameSync(join(__dirname, oldFile), join(__dirname, filename.name + extension));
              //  console.log(`${oldFile} --> ${duration}`);
              }catch(e){
                  // console.log(e)
              }



    }
    // if (name === 'old') {
    //     renameSync(join(__dirname, oldFile), join(__dirname, 'new' + extension));
    // }
}
}

function generatefileNames(name,duration){
  console.log({name});
 const names= name.split(' ');
    const len = names.length;
    const fname = names.pop();
    const title = names.join(' ');
    // const audio = {name:fname,title}
    //
let audioDuration = duration.toFixed(2);
    const audio = {name:fname,title,duration: audioDuration}

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
