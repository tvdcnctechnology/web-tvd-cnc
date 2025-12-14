 fetch("data/tvd-home.json")
  .then(res => res.json())
  .then(data => {
    const info = data[0];
    for (const key in info) {
      const elements = document.querySelectorAll(`.${key}`); // select by class
      elements.forEach(el => el.innerHTML = info[key]);     // update all
    }
  })
  .catch(err => console.error(err));


      