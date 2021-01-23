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

getAuios();
async function getAuios(){

    let  audioslist = await axios.get('http://localhost:5001/api/v1/audios?limit=450&page=1&language=malayalam')
    audioslist = audioslist.data;
    audioslist = audioslist.result.data;
    // console.log(audioslist.length);  
   let len = audioslist.length;
    for(let i=0;i<2;i++){

        let currentAudio = audioslist[i];
        if(currentAudio && !currentAudio.duration){
                    currentAudio.duration = await getDuration(currentAudio);
                    await axios.put(`http://localhost:5001/api/v1/audios/${currentAudio._id}`, currentAudio)
        }
        console.log(currentAudio)
        
    }
}

async function getDuration(audio){

    var url=audio.url;
    var name = url.split('Malayalam/')[1];
  //  var fileName =  name.split('.mp3')[0]
    var duration = await getAudioDurationInSeconds(name) 
    return duration;
}

   // addToServer(audios);
async function addToServer(audios) {
    for (i = 0; i < audios.length; i++) {
        let index = filecount + i - 1;
        const audio = { id: uuidv4(), title: audios[i].title, url: `https://r4realiable.github.io/audiostories/Malayalam/${audios[i].name}.mp3`, language: 'malayalam', artist: 'kambi maman', description: audios[i].title }
        await axios.post('http://localhost:5001/api/v1/audios', audio)
    }
}
// renameFiles();
function renameFiles() {
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
}

function generatefileNames(name){
 const names= name.split(' ');
    const len = names.length;
    const fname = names.pop(); 
    const title = names.join(' ');
    const audio = {name:fname,title}
    // console.log(audio) 
    saveFilenameToDisk(audio)
    return audio;

}


function saveFilenameToDisk(audio) {
    fs.appendFile('Audios.js', `{"name":"${audio.name}","title":"${audio.title}"},\n`, function (err) {
        if (err) throw err;
        console.log('Saved!--> Tgas to file');
    });
}