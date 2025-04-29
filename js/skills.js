document.getElementById('skills-btn').addEventListener('click', () => {
  console.log('skills click');
  
  const skills = document.getElementById('skills');
  const education = document.getElementById('education');

  skills.style.display = "flex";
  education.style.display = "none";
});

document.getElementById('education-btn').addEventListener('click', () => {
  console.log('education click');
  
  const skills = document.getElementById('skills');
  const education = document.getElementById('education');
  
  education.style.display = "flex";
  skills.style.display = "none";
});