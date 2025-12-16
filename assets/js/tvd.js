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

fetch("data/tvd-aboutus.json")
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

fetch("data/tvd-services.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const elements = document.querySelectorAll(`.${item.key}`);

      elements.forEach(el => {
        // If the key ends with "_url", set src attribute
        if (item.key.endsWith("_url") && el.tagName.toLowerCase() === "img") {
          el.src = item.value;
        } else {
          // Otherwise, update innerHTML
          el.innerHTML = item.value;
        }
      });
    });
  })
  .catch(error => console.error("Error fetching data:", error));

fetch("data/tvd-expert.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const elements = document.querySelectorAll(`.${item.key}`);

      elements.forEach(el => {
        // If the key ends with "_url", set src attribute
        if (item.key.endsWith("_url") && el.tagName.toLowerCase() === "img") {
          el.src = item.value;
        } else {
          // Otherwise, update innerHTML
          el.innerHTML = item.value;
        }
      });
    });
  })
  .catch(error => console.error("Error fetching data:", error));

fetch("data/tvd-information.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const elements = document.querySelectorAll(`.${item.key}`);

      elements.forEach(el => {
        // If the key ends with "_url", set src attribute
        if (item.key.endsWith("_url") && el.tagName.toLowerCase() === "img") {
          el.src = item.value;
        } else {
          // Otherwise, update innerHTML
          el.innerHTML = item.value;
        }
      });
    });
  })
  .catch(error => console.error("Error fetching data:", error));

fetch("data/tvd-contact.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const elements = document.querySelectorAll(`.${item.key}`);

      elements.forEach(el => {

        if (item.key.endsWith("_url") && el.tagName.toLowerCase() === "img") {
          el.src = item.value;
        }
        if (item.key.endsWith("_url") && el.tagName.toLowerCase() === "a") {
          el.href = item.value;
        }
        else if (item.key.endsWith("_map") && el.tagName.toLowerCase() === "iframe") {
          el.src = item.value;
        }
        else if (item.key.endsWith("_web") && el.tagName.toLowerCase() === "a") {
          el.href = item.value;
          el.innerHTML = item.value;
        }
        else if (item.key.endsWith("_fb") && el.tagName.toLowerCase() === "a") {
          el.href = item.value;
        }
        else if (item.key.endsWith("_mail") && el.tagName.toLowerCase() === "a") {
          el.href = "mailto:" + item.value;
          el.innerHTML = item.value;
        }
        else if (item.key.endsWith("_phone") && el.tagName.toLowerCase() === "a") {
          el.href = "tel:" + item.value;
          el.innerHTML = item.value;
        }
        else {
          // Otherwise, update innerHTML
          el.innerHTML = item.value;
        }
      });
    });
  })
  .catch(error => console.error("Error fetching data:", error));