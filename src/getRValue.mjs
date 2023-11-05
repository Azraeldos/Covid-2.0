// Import the necessary libraries
import fetch from 'node-fetch';
import { parse } from 'csv-parse';
import * as fs from 'fs';

let fname = 'src\ca_daily_cases_ww_and_r.csv';
const records = [];
const csvStream = fs.createReadStream(fname);

const parsedCsvStream = parse(csvStream);
