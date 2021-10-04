import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import axios from 'axios'

export default function MyGallery(props) {

  const [imageData, setImageData] = React.useState(null);

  async function fetchData() {
    const view_map = ["Street", "Landscape", "Urban"]
    console.log(view_map[props.view - 1]);
    let url = "https://api.airtable.com/v0/app4BO89u16yy0GoG/tbllpIBJa7ZCrfmJh?fields%5B%5D=Attachments&filterByFormula=%7BCategory%7D+%3D+%22Street%22";
    const result = await axios.get(
        url,
        {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
        }
    );
    console.log(result);
    setImageData(result.data.records);
  }


  React.useEffect(() => {
    fetchData();
  });

  function createImages() {
    let result = [];
    for (let record of imageData) {
      result.push({original: record.url})
    }
    return result;
  }

  return (
      <div>
        <ImageGallery 
        items={createImages()}
        showThumbnails={false} />
      </div>
  )
}

