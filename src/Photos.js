import React from 'react';
import Photo from './Photo'
import './App.css';

const getRandom = (arr, n) => {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


class Photos extends React.Component {
  state = {
    photos: [
      {
        id: 1,
        img: 'https://serverlessguru.com/img/ryan.jpg',
      },
      {
        id: 2,
        img: 'https://serverlessguru.com/img/fim1.jpg',
      },
      {
        id: 3,
        img: 'https://serverlessguru.com/img/dallas.jpeg',
      },
      {
        id: 4,
        img: 'https://serverlessguru.com/img/josh.jpeg',
      },
      {
        id: 5,
        img: 'https://serverlessguru.com/img/yann.jpeg',
      },
      {
        id: 6,
        img: 'https://serverlessguru.com/img/josh.jpg',
      },
      {
        id: 7,
        img: 'https://serverlessguru.com/img/mikaela.jpeg',
      },
      {
        id: 8,
        img: 'https://serverlessguru.com/img/victoria.jpg',
      },
      {
        id: 9,
        img: 'https://serverlessguru.com/img/luke.png',
      }

    ]
  }

      render() {
        const photos = getRandom(this.state.photos, 9)

      return (
        photos.map((photo, index) => {
          return (
            <Photo
            image={photo.img}
            />

          );
        })
    )
  }
}

export default Photos;
