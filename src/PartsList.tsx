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
    <div>
      {list ? (
        list.map((el) => <div key={el.id}> x</div>)
      ) : (
        <div> Loading </div>
      )}
    </div>
  );
};
