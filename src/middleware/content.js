'use strict';

import fs from 'fs';

const returnInfo = () => {
  let test = fs.readFileSync(`${__dirname}/public/content.json`).toString();
  return test;
};
export default returnInfo;
