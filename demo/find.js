const pets = [
    {type: 'Dog', name: 'max'},
    {type: 'cat', name: 'max'},
    {type: 'Dog', name: 'max'}
];

pet = pets.find(pet => pet.type === 'Dog' && pet.name === 'max');

console.log(pet);