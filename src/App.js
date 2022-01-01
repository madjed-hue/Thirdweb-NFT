import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import PunkList from "./components/PunkList";
import Banner from "./components/Banner";

function App() {
  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNft = async () => {
      const openseaData = await axios.get(`${process.env.REACT_APP_API_URL}`);
      const results = openseaData.data.assets;
      setpunkListData(results);
      return results;
    };
    getMyNft();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData && punkListData.length > 0 && (
        <>
          <Banner punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
