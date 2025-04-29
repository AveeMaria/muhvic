let curr_project = 0;//default
    let data;

    async function init() {
      try {
        const response = await fetch('../json/projects.json');
        data = await response.json();
        console.log('Loaded JSON:', data);
      } catch (error) {
        console.error('Failed to load JSON:', error);
      }
    }
    init();

    document.getElementById('prev').addEventListener('click', () => {
      curr_project <= 0? curr_project = 2 : curr_project--;

      const desc = document.getElementById('desc');
      desc.innerHTML = "";
      
      let html = '';
      html += `<h1>${data[curr_project].title}</h1>`;
      html += `<div>`;
      html += `<p>${data[curr_project].desc1}</p>`;
      html += `<p>${data[curr_project].desc2}</p>`;
      html += `</div>`;
      html += `<p>${data[curr_project].conclusion}</p>`;

      document.getElementById('main-img').src = `assets/projects/${data[curr_project].main_img}`;
      document.getElementById('left-img').src = `assets/projects/${data[curr_project].left_img}`;
      document.getElementById('right-img').src = `assets/projects/${data[curr_project].right_img}`;

      desc.innerHTML = html;
    });

    document.getElementById('next').addEventListener('click', () => {
      curr_project >= 2? curr_project=0 : curr_project++;

      const desc = document.getElementById('desc');
      desc.innerHTML = "";
      
      let html = '';
      html += `<h1>${data[curr_project].title}</h1>`;
      html += `<div>`;
      html += `<p>${data[curr_project].desc1}</p>`;
      html += `<p>${data[curr_project].desc2}</p>`;
      html += `</div>`;
      html += `<p>${data[curr_project].conclusion}</p>`;

      document.getElementById('main-img').src = `assets/projects/${data[curr_project].main_img}`;
      document.getElementById('left-img').src = `assets/projects/${data[curr_project].left_img}`;
      document.getElementById('right-img').src = `assets/projects/${data[curr_project].right_img}`;

      desc.innerHTML = html;
    });