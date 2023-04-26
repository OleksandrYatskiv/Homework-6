birthYear = prompt('Hello! What is your birth year?');
if(!birthYear){
    alert(`It's a pity you didn't enter your birth year!`);
}

cityOfLiving = prompt('What is your city of living?');
if(!cityOfLiving){
    alert(`It's a pity you didn't enter your city of birth!`);
}

favoriteSport = prompt('What is your favorite sport?');
if(!favoriteSport){
    alert(`It's a pity you didn't enter your favorite sport!`);
}

age = new Date().getFullYear() - birthYear;
alert(`Your age is ${age}`);

if (cityOfLiving.toLowerCase().indexOf('Kyiv'.toLowerCase())!== -1) {
    alert(`You are living in the capital of Ukraine!`);
} else if (cityOfLiving.toLowerCase().indexOf('London'.toLowerCase())!== -1) {
    alert(`You are living in the capital of the United Kingdom!`);
} else if (cityOfLiving.toLowerCase().indexOf('Washington'.toLowerCase())!== -1) {
    alert(`You are living in the capital of the USA!`);
} else {
    otherCity = cityOfLiving.slice(1,cityOfLiving.length);
    alert(`You are living in ${cityOfLiving[0].toUpperCase()}${otherCity}!`);
}

basketballChamp = 'Michael Jordan';
boxingChamp = 'Oleksandr Usyk';
footballChamp = 'Lionel Messi';

if (favoriteSport.toLowerCase() === 'basketball') {
    alert(`Cool! Do you want to become next ${basketballChamp}?`);
} else if (favoriteSport.toLowerCase() === 'boxing') {
    alert(`Cool! Do you want to become next ${boxingChamp}?`);
} else if (favoriteSport.toLowerCase() === 'football') {
    alert(`Cool! Do you want to become next ${footballChamp}?`);
}
