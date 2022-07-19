import {parse} from "csv-parse"
import fs from 'fs'
import getStream from "get-stream";
import path from "path"

export default async function csvfunc() {

  //const parseStream = await parse({ delimiter: ",", relaxColumnCount: true });
  const parseStream = await parse({  delimiter: ",",relax: true, escape: '\\' });
  
  
      console.log("parseStream");
  
      const csvData = await getStream.array(
        fs
          .createReadStream(
            //'./testdata.csv.xlsx'
             path.resolve(`./csv/testdata.csv`)
          )
          .pipe(parseStream)
      );
      console.log("csvData", csvData);
  
      await csvData.shift();
  
      console.log("csvData", csvData);

      return csvData;
}

//csvfunc()

