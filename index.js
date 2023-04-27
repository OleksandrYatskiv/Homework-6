birthYear = prompt('Hello! What is your birth year?');
cityOfLiving = prompt('What is your city of living?');
favoriteSport = prompt('What is your favorite sport?');

if (birthYear && cityOfLiving && favoriteSport) {
    age = new Date().getFullYear() - birthYear;

    if (cityOfLiving.toLowerCase().indexOf('Kyiv'.toLowerCase()) !== -1) {
        capitalMsg = `You are living in the capital of Ukraine!`;
    } else if (cityOfLiving.toLowerCase().indexOf('London'.toLowerCase()) !== -1) {
        capitalMsg = `You are living in the capital of the United Kingdom!`;
    } else if (cityOfLiving.toLowerCase().indexOf('Washington'.toLowerCase()) !== -1) {
        capitalMsg = `You are living in the capital of the USA!`;
    } else {
        otherCity = cityOfLiving.slice(1, cityOfLiving.length);
        capitalMsg = `You are living in ${cityOfLiving[0].toUpperCase()}${otherCity}!`;
    }

    basketballChamp = 'Michael Jordan';
    boxingChamp = 'Oleksandr Usyk';
    footballChamp = 'Lionel Messi';

    if (favoriteSport.toLowerCase() === 'basketball') {
        sportMsg = `Cool! Do you want to become next ${basketballChamp}?`;
    } else if (favoriteSport.toLowerCase() === 'boxing') {
        sportMsg = `Cool! Do you want to become next ${boxingChamp}?`;
    } else if (favoriteSport.toLowerCase() === 'football') {
        sportMsg = `Cool! Do you want to become next ${footballChamp}?`;
    }

    alert(`Your age is ${age}\n${capitalMsg}\n${sportMsg}`);
} else {
    errorMessage = 'It\'s a pity you didn\'t enter your ';
    if (!birthYear) {
        errorMessage += 'birth year!';
    }
    if (!cityOfLiving) {
        errorMessage += 'city of living!';
    }
    if (!favoriteSport) {
        errorMessage += 'favorite sport!';
    }
    alert(errorMessage);
}