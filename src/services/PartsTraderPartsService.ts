import { uuid } from "uuidv4";
import faker from "faker";

//there was mention of an IPartsTraderPartsService in the email
//However there was no interface to implement and I don't like using
//Dependency Injection in javascript, so I've implement as an object
//Also I would normally cache using something like redux but I felt this
//the benefits outweights the cost for this very small demo
export const PartsTraderPartsServiceCache: { [key: string]: any } = {};

export const PartsTraderPartsService = {
  getPartsByPartNumber: (_partNumber: string) =>
    new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve([
          { id: uuid(), cost: faker.commerce.price() },
          { id: uuid(), cost: faker.commerce.price() },
          { id: uuid(), cost: faker.commerce.price() },
        ]);
      }, 1000);
    }),
};
