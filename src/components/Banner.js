import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Banner.css";

const Banner = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
    // console.log(setActivePunk(selectedPunk));
    // console.log(activePunk);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHeighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              // src="https://nftlabs.mypinata.cloud/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="titleAndNumber">
            <div className="title">{activePunk.name}</div>
            <span className="titleNumber">#{activePunk.token_id} </span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner["profile_img_url"]} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">
                  <div>{activePunk.owner["address"]}</div>
                  <div className="ownerHandle">
                    @{activePunk.owner.user["username"]}
                  </div>
                </div>
              </div>
              <div className="ownerLinks">
                <div className="ownerLink">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={moreLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
