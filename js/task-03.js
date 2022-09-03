const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imagesEl = images.map(image => {
//   const liEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   liEl.append(imgEl);
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;

//   return liEl
// });

// const imagesEl = [];

// images.forEach(image => {
//   const liEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   liEl.append(imgEl);
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;

//   return imagesEl.push(liEl)
// })

const ulEl = document.querySelector('.gallery');

const makeLiEl = makeLi => {
  return makeLi.map(image => {
    const liEl = document.createElement('li');
    const imgEl = document.createElement('img');
    liEl.append(imgEl);
    imgEl.src = image.url;
    imgEl.alt = image.alt;

    return liEl
  });
};

const liEl = makeLiEl(images);

ulEl.append(...liEl);