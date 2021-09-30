import { XvbaCOM } from "xvbacomjs";


export class Sheets extends XvbaCOM {

    constructor(param?:any) {
      super(param);
    }
  
    Count(){
      return this.GetNumbValue("Count");
    }
  }
  