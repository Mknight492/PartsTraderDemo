import React, { useEffect, useState } from "react";
import {
  PartsTraderPartsServiceCache,
  PartsTraderPartsService,
} from "./services/PartsTraderPartsService";

export const PartsList = ({ partNumber }: { partNumber: string }) => {
  var [list, setList] = useState(PartsTraderPartsServiceCache[partNumber]);

  useEffect(() => {
    setList(PartsTraderPartsServiceCache[partNumber]);
  }, [partNumber]);

  if (!list) {
    PartsTraderPartsService.getPartsByPartNumber(partNumber).then((res) => {
      PartsTraderPartsServiceCache[partNumber] = res;
      setList(res);
    });
  }

  return (
    <>
      <h3>Available Parts:</h3>
      <div>
        {list ? (
          list.map((el) => (
            <div style={{ margin: 10 }}>
              <div key={el.id}> Part Id: {el.id} </div>
              <div>Part Price: {el.cost}</div>
            </div>
          ))
        ) : (
          <div> Loading </div>
        )}
      </div>
    </>
  );
};
