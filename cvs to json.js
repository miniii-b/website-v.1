const CSVToJSON = (data, delimiter = ',') =>
  JSON.stringify(CSVtoObject(data, delimiter));
CSVToJSON('col1,col2\na,b\nc,d');
// '[{"col1":"a","col2":"b"},{"col1":"c","col2":"d"}]'
CSVToJSON('col1;col2\na;b\nc;d', ';');
// '[{"col1":"a","col2":"b"},{"col1":"c","col2":"d"}]'
//don't know about this function, but it is rec by https://www.30secondsofcode.org/js/s/convert-csv-to-array-object-or-json/#csv-to-json//