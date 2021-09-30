import { XvbaCOM } from "xvba-com";
import { WorkBook } from "./WorkBook";

export class WorkBooks extends XvbaCOM {
  
  
  constructor() {
    
    super();
 
  }

  /**
   * Open Excel file
   * @param filePath :string
   * @returns
   */
  Open(filePath: string) {
    return this.CallMethodToGetObject("Open", filePath,WorkBook);
  }
}
