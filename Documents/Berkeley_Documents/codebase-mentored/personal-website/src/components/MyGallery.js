import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import axios from 'axios'

export default function MyGallery(props) {

  const [imageData, setImageData] = React.useState(null);

  async function fetchData() {
    const view_map = ["Street", "Landscape", "Urban"]
    let url = "https://api.airtable.com/v0/app4BO89u16yy0GoG/tbllpIBJa7ZCrfmJh?fields%5B%5D=Attachments&filterByFormula=%7BCategory%7D+%3D+%22" + view_map[props.view - 1] + "%22";
    const result = await axios.get(
        url,
        {
            headers: {
                authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },
        }
    );
    setImageData(result.data.records);
  }


  React.useEffect(() => {
    fetchData();
  });

  function createImages() {
    let result = [];
    if (imageData != null) {
      for (let record of imageData) {
        result.push({original: record.fields.Attachments[0].url})
      }
    }
    console.log(result)
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

