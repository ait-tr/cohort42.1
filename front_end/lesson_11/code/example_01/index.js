// объект "физический"
const JohnyDepp = {
  height: 180,
  weight: 75,
  name: 'Johny',
  surname: 'Depp',
  hobbies: ['cricket', 'polo', 'alcohol'],
  films: {
    2000: ['Pirates', 'Edvard'],
    2001: ['Charlie', 'Pirates-2'],
  },
  singing: function () {
    console.log('I am singing');
  },
};

// объект события (концерт Рики Мартина)
const RickyMartin20070515Berlin = {
  location: {
    lng: 544343,
    ltd: 489328,
  },
  duration: 4,
  visitors: 150000,
};

// пример массива
const arrExample = [1, 2, 3];
console.log(arrExample[0]);

const arrExample2 = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(arrExample2[0]);

// варианты обращения
const lngVar = 'lng';
console.log(JohnyDepp.height);
console.log(JohnyDepp['height']);
console.log(RickyMartin20070515Berlin['location'][lngVar]);

// модификация

JohnyDepp['married'] = true;
console.log(JohnyDepp);

JohnyDepp['married'] = false;
console.log(JohnyDepp);

delete JohnyDepp['married'];
console.log(JohnyDepp);

// методы

console.log(Object.keys(JohnyDepp));
console.log(Object.values(JohnyDepp));

console.log(Object.entries(JohnyDepp));
console.table(Object.entries(JohnyDepp));

// проверка наличия свойства
if ('height' in JohnyDepp) {
  console.log(JohnyDepp.height);
}

// spread / модификация

const bigGarbagePile = {
  married: true,
  ...JohnyDepp,
  ...RickyMartin20070515Berlin,
};

console.log(bigGarbagePile);

function getPropertyValues(objectsArray, propertyName) {
  const result = [];
  for (let i = 0; i < objectsArray.length; i++) {
    result.push(objectsArray[i][propertyName]);
  }
  return result;
}
const footballPlayers = [
  { name: 'Player 1', position: 'Forward', team: 'Team A' },
  { nameX: 'Player 2', position: 'Midfielder', team: 'Team B' },
  { name: 'Player 3', position: 'Defender', team: 'Team C' },
  { name: 'Player 4', position: 'Goalkeeper', team: 'Team D' },
  { name: 'Player 5', position: 'Forward', team: 'Team E' },
  { name: 'Player 6', position: 'Midfielder', team: 'Team F' },
  { name: 'Player 7', position: 'Defender', team: 'Team G' },
  { name: 'Player 8', position: 'Goalkeeper', team: 'Team H' },
  { name: 'Player 9', position: 'Forward', team: 'Team I' },
  { name: 'Player 10', position: 'Midfielder', team: 'Team J' },
];

const nameP = 'name';

const names = getPropertyValues(footballPlayers, 'name');
console.log(names);

function arrNameOfPlayers(footballPlayers, name) {
  const arrName = [];
  for (let i = 0; i < footballPlayers.length; i++) {
    if (name in footballPlayers[i]) {
      arrName.push(footballPlayers[i][name]);
    }
  }
  return arrName;
}
console.log(arrNameOfPlayers(footballPlayers, nameP));


function forwardsQ(footballPlayers) {
    let q = 0;
    for (let i = 0; i < footballPlayers.length; i++) {
      if (footballPlayers[i]['position'] === 'Forward') {
        q++;
      }
    }
    return q;
  }

  console.log(forwardsQ(footballPlayers));
