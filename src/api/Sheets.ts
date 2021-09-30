import { XvbaCOM } from "xvba-com";


export class Sheets extends XvbaCOM {

    constructor(param?:any) {
      super(param);
    }
  
    Count(){
      return this.GetNumbValue("Count");
    }
  }
  