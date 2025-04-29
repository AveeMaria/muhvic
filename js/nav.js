document.getElementById('nav-menu').addEventListener('click', function() {
  this.style.display = "none";//skrije gumb
  document.getElementById('nav-ul').style.left = 0;
});

document.addEventListener('click', (e) => {
  if (!document.getElementById('nav-menu').contains(e.target)) {
    document.getElementById('nav-ul').style.left = "-70svh";
    document.getElementById('nav-menu').style.display = "block";//pokaze gumb
  }
});