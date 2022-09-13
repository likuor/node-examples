const express = require('express');
const server = express();
const fs = require('fs');

server.set('view engine', 'ejs');
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

const getPets = async () => {
  const data = await fs.readFileSync('./pets.json', 'utf-8');
  return JSON.parse(data).pets;
};

server.get('/', async (req, res) => {
  res.render('home', {
    title: 'All pets',
    pets: await getPets(),
  });
});

server.get('/new', (req, res) => {
  res.render('form');
});

server.post('/new', async (req, res) => {
  const petsData = await getPets();
  const newPet = { ...req.body, id: petsData.length + 1 };
  const allPets = [...petsData, newPet];
  fs.writeFileSync('pets.json', JSON.stringify({ pets: allPets }));
  res.redirect('/');
  return { message: 'file updated' };
});

server.get('/edit/:id', async (req, res) => {
  const petsData = await getPets();
  const selectedPetArr = petsData.filter((pet) => pet.id == req.params.id);
  const selectedPetObj = selectedPetArr[0];
  res.render('editForm', {
    id: selectedPetObj.id,
    name: selectedPetObj.name,
    age: selectedPetObj.age,
    type: selectedPetObj.type,
  });
});

server.put('/edit/:id', async (req, res) => {
  const petsData = await getPets();
  const updatePet = req.body;
  console.log('updatePet', updatePet);

  const updatedPets = petsData.map((pet) => {
    if (pet.id == req.params.id) {
      console.log('here', pet);
      pet = { ...updatePet };
      console.log(pet);
    }
  });
  await fs.writeFileSync('pets.json', JSON.stringify({ pets: updatedPets }));
  res.redirect('/');
  return { message: 'file updated' };
});

server.delete('/delete/:id', async (req, res) => {
  getPets();
  const filteredPets = petsData.pets.filter((pet) => pet.id != req.params.id);
  console.log(filteredPets);

  fs.writeFileSync('pets.json', JSON.stringify({ pets: filteredPets }));
  console.log(filteredPets);
  // res.redirect('/');
  return { message: 'file deleted' };
});

server.listen(8000, () => console.log('server running on port 8000'));
