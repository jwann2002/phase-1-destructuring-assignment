const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Destructure the sounds animals make
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Reassigning animals after Bolt the horse wandered off
const [bessie, dolly, babe, little] = farmAnimals.split(' ').filter(animal => animal !== 'horse');

// Reassigning animals after Little the chicken went back to the coop
const [blackAndWhite, black, pink] = farmAnimals.split(' ').filter(animal => !['horse', 'chicken'].includes(animal));

// Arrays

// 4. Destructure variables using color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Assign variables using the first letter of each color
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo only using indg
const [, , , , , indg] = colors;

// Objects

// 7. Destructure all variables using object keys
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure specific values from nested object and object keys
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

// Log the results to console for verification
console.log(moo, neigh, baa, oink, cluck);console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v, indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);
