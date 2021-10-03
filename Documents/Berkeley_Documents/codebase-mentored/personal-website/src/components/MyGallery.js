import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import axios from 'axios';

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

export default function MyGallery() {
  const [imageData, setImageData] = React.useState(null);

  async function fetchData() {
    const res = await axios.get(
        'https://api.airtable.com/v0/app4BO89u16yy0GoG/Table%201?maxRecords=3&view=Grid%20view',
        {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
        }
    );
    setImageData(res.data.records);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
      <div>
        <ImageGallery 
        items={images}
        showThumbnails={false} />
      </div>
  )
}

