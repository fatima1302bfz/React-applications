import './App.css'
import { useState, useEffect } from "react";
const App = () => {
  const [photos, setPhoto] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos")
      const data = await response.json();
      data.length = 20;
      setPhoto(data);
          } catch (error) {
               throw Error("No Data Found")
      }

  }
  return (
    <div className="app">
      {photos.map((photo, index) => {
        return (
          <div key={index} className="box">
            <img src={photo.thumbnailUrl} alt="" />
            <p>{photo.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
