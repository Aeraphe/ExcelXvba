# ExcelXvba (excel-xvba)

- Call Excel COM on Nodejs for Read, manipulate and write spreadsheet

- See www.xvba.dev, for more info

# If you want to create your own Windows COM Like this package See xvbacomjs package

- <a href="https://www.npmjs.com/package/xvbacomjs">XvbaComjs</a> 

# Info - Edit vba on VSCode with XVBA:

- <a href="https://xvba-repository.web.app/"> www.xvba.dev</a> 
# Importing[?]

```javascript

import {ExcelXvba} from "excel-xvba"

const excel = new ExcelXvba();

excel.Visible();

const  xlPath = path.join(__basedir,"index.xlsb");

const Book: WorkBook = excel.WorkBooks.Open);

const sheets = excel.Sheets;

const total = sheets.Count();

const exName = excel.Name();

excel.Quit();

//Close C++ COMs 
Excel.CloseAllCOMWithDelay();

```