const submitBtn = document.querySelector('[data-submit-btn]');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const userEmail = document.getElementById('mail').value;
  const userPassword = document.getElementById('password').value;
  const userBio = document.getElementById('bio').value;
  const userDob = document.getElementById('dob').value;
  const userVolume = document.getElementById('volume').value;
  console.log(`
  Your name: ${userName}
  Your email: ${userEmail}
  Your password: ${userPassword}
  Your biography: ${userBio}
  Your birth day: ${userDob}
  Your volume settings: ${userVolume}
  `);
});
