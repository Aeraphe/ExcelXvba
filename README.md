# ExcelXvba

- Excel Librar for Read, manipulate and write spreadsheet. (With Auto-Completion)

- See www.xvba.dev, for more info.

## If you want to create your own Windows COM Like this package See xvba-com package

- <a href="https://www.npmjs.com/package/xvba-com">XvbaCom</a> 

## Info - Edit vba on VSCode with XVBA:

- <a href="https://xvba-repository.web.app/"> www.xvba.dev</a> 
## Importing

```javascript

import {ExcelXvba} from "excel-xvba"

const excel = new ExcelXvba();

excel.Visible();

const  xlPath = path.join(__basedir,"index.xlsb");

const Book: WorkBook = excel.WorkBooks.Open(xlPath);

const sheets = excel.Sheets;

const total = sheets.Count();

const exName = excel.Name();

excel.Quit();

//Close C++ COMs 
Excel.CloseAllCOMWithDelay();

```


## Contributions

- Contributions are very welcome!