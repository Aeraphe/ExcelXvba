import { Excel } from "../api/Excel";
import { WorkBook } from "../api/WorkBook";
import { VBComponent } from "../api/VBComponent";

export const tryExcel = async () => {
  try {
    let excel = new Excel();

    excel.Visible();
  
    Excel.CloseAllCOMWithDelay();
  } catch (error) {
    console.log(error);
    Excel.CloseAllCOMWithDelay();
  }
};
