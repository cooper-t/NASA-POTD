
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const title = document.querySelector('.title');
const explanation = document.querySelector('.explanation');
// const photo = document.querySelector('.photo');
const photo = document.querySelector('.img-fluid');
const copyright = document.querySelector('.copyright');
const date = document.querySelector('.date');

// fetch(url)
//   .then(response => response.json())
//   .then(data => `
//   ${title.innerHTML = data.title}
//   ${photo}<img class="img-fluid rounded" src ="${data.hdurl}" />
//   ${explanation.innerHTML = data.explanation}
//   ${copyright.innerHTML = data.copyright}
//   ${date.innerHTML = data.date}
//       `
//   );

async function getInformation(url) {
    try {
        const response = await fetch(url);
        const info = await response.json();
        return info;
    } catch (error) {
        console.error(error);
    }
};

async function renderInformation(url) {
  const info = await getInformation(url);
  `${title.innerHTML = info.title}
  ${photo.src = info.hdurl}
  ${explanation.innerHTML = info.explanation}
  ${copyright.innerHTML = info.copyright}
  ${date.innerHTML = info.date}`
  console.log(info.hdurl);
};

getInformation(url);
renderInformation(url);

  //data.hdurl, 


//   `<h2 class="title">${data.title}</h2> <cite class="copyright">${data.copyright}</cite>`
    // console.log(data.copyright, data.title));

/**
 * copyright
 * date
 * explanation
 * hdurl
 * title  */

