 fetch("data/tvd-home.json")
    .then(res => res.json())
      .then(data => {
        // Loop through the array of key/value pairs
        data.forEach(item => {
          // Use class selector so multiple elements can be updated
          const elements = document.querySelectorAll(`.${item.key}`);
          elements.forEach(el => el.innerHTML = item.value);
        });
      })
      .catch(error => console.error("Error fetching data:", error));


      