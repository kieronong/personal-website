import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default class MyGallery extends Component {
    constructor(props) {
      const [imageData, setImageData] = React.useState(null);
      }

    async function fetchData() {
      const res = await axios.get(
        'https://api.airtable.com/v0/app4BO89u16yy0GoG/Table%201/recLcPDhdeLrRDU6A',
        {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
        }
      );
      setBobaData(res.data.records)
    };

  

    render() {
        return (
          <div>
              <ImageGallery 
              items={images}
              showThumbnails={false} />
          </div>
        )
    }
}

