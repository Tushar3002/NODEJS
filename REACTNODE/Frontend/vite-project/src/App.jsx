import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  // GET request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data");
        setData(res.data.message); 
        console.error(err);
      }catch{
        
      }
    }

    fetchData();
  }, []);

  // POST request
  useEffect(() => {
    const sendData = async () => {
      try {
        await axios.post("http://localhost:5000/api/name", {
          name: "TJ",
        });
      } catch (err) {
        console.error(err);
      }
    };

    sendData();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;