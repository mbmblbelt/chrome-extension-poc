let checkProfile = document.getElementById('checkProfile');

checkProfile.onclick = function () {
    checkProfile.innerHTML = (Math.floor(Math.random() * 10 + 1)).toString();
};