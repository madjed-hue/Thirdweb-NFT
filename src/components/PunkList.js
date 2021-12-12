import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => {
        return (
          <div
            onClick={() => {
              setSelectedPunk(punk.token_id);
            }}
          >
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
