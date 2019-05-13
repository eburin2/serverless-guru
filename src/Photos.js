import React from 'react';
import Photo from './Photo';
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
        name: 'Ryan Jones',
        title: 'Founder(CEO) & Lead Cloud Developer'
      },
      {
        id: 2,
        img: 'https://serverlessguru.com/img/fim1.jpg',
        name: 'Nadtakan Jones',
        title: 'Cloud Developer'
      },
      {
        id: 3,
        img: 'https://serverlessguru.com/img/dallas.jpeg',
        name: 'Dallas Slaughter',
        title: 'Senior Cloud Architect'
      },
      {
        id: 4,
        img: 'https://serverlessguru.com/img/josh.jpeg',
        name: 'Josh Linton',
        title: 'Salesforce Cloud Developer'
      },
      {
        id: 5,
        img: 'https://serverlessguru.com/img/yann.jpeg',
        name: 'Yann Stoneman',
        title: 'Full Stack Developer'
      },
      {
        id: 6,
        img: 'https://serverlessguru.com/img/josh.jpg',
        name: 'Josh Proto',
        title: 'Digital Marketing'
      },
      {
        id: 7,
        img: 'https://serverlessguru.com/img/mikaela.jpeg',
        name: 'Mikaela Shé',
        title: 'Content Editor'
      },
      {
        id: 8,
        img: 'https://serverlessguru.com/img/victoria.jpg',
        name: 'Victoria Chavez',
        title: 'Designer'
      },
      {
        id: 9,
        img: 'https://serverlessguru.com/img/luke.png',
        name: 'Luke Vandekieft',
        title: 'Front End Developer'
      }

    ]
  }

      render() {
        const photos = getRandom(this.state.photos, 9)

        return (
          photos.map((photo, index) => {
            return (
                <div>
                  <Photo
                  key={photo.id}
                  image={photo.img}
                  name={photo.name}
                  title={photo.title}
                  />
                </div>

            );
          })
        )
      }
    }

export default Photos;
