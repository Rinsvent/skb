import express from 'express';
import cors from 'cors';
import isomorphic from 'isomorphic-fetch'

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};
fetch(pcUrl)
    .then(async (res) => {
      pc = await res.json();
    })
    .catch(err => {
      console.log('Чтото пошло не так:', err);
    });

const app = express();
app.use(cors());
app.use(require('body-parser').json())


async function getData(url){
    const data = await fetch(url).then(async (res) => {
          return await res.json();
        })
        .catch(err => {
          console.log('Чтото пошло не так:', err);
        });
    return data;
}
//pc = await getData(pcUrl);

app.get('/', async (req, res) => {

  pc = await getData(pcUrl);
  res.json(pc);
});

function checkObject(data) {
  if(!data) {
    let flag = false;
    if(data === 0){
      flag = true;
    }
    if(data === null){
      flag = true;
    }
    if(!flag){
      return flag;
    }
    return true;
  }else{
    return true;
  }
}

async function getVolumes(pc) {
  let hdd = {};
  for(let volume in pc.hdd){
    if(hdd[pc.hdd[volume].volume]){
      hdd[pc.hdd[volume].volume] += pc.hdd[volume].size;
    }else{
      hdd[pc.hdd[volume].volume] = pc.hdd[volume].size;
    }
  }
  for(let h in hdd){
    hdd[h] += "B";
  }
  console.log(hdd);
  return hdd;
}

app.get('/volumes', async (req, res) => {
  if(!checkObject(pc.hdd)){
    return res.status(404).send("Not found");
  };

  const data = await getVolumes(pc);
  res.json(data);
});

app.get('/:mainInfo', async (req, res) => {
  const mainInfo = req.params.mainInfo;
  if(!checkObject(pc[mainInfo])){
    return res.status(404).send("Not found");
  };
  console.log(mainInfo);
  console.log(req.params);
  res.json(pc[mainInfo]);
});

app.get('/:mainInfo/:property', async (req, res) => {
  const mainInfo = req.params.mainInfo;
  const property = req.params.property;
  if(!checkObject(pc[mainInfo])){
    return res.status(404).send("Not found");
  };
  if(!checkObject(pc[mainInfo][property])){
    return res.status(404).send("Not found");
  };
  console.log(mainInfo);
  console.log(property);
  console.log(req.params);
  res.json(pc[mainInfo][property]);
});

app.get('/:mainInfo/:property/:subProperty', async (req, res) => {

  const mainInfo = req.params.mainInfo;
  const property = req.params.property;
  const subProperty = req.params.subProperty;
  console.log(mainInfo);
  console.log(property);
  console.log(subProperty);
  console.log(req.params);

  if(!checkObject(pc[mainInfo])){
    return res.status(404).send("Not found");
  };
  if(!checkObject(pc[mainInfo][property])){
    return res.status(404).send("Not found");
  };
  if(!checkObject(pc[mainInfo][property][subProperty])){
    return res.status(404).send("Not found");
  };
  res.json(pc[mainInfo][property][subProperty]);
});



app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
