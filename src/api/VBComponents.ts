import { XvbaCOM } from "xvba-com";
import { VBComponent } from "./VBComponent";

export class VBComponents extends XvbaCOM {
    private _Count: any;
  
    public get Count(): any {
      this._Count = this.GetNumbValue("Count");
      return this._Count;
    }
  
    constructor(prop?: any) {
      super(prop);
    }

    Item(value:number):VBComponent{
      return this.CallMethodToGetObject("Item",VBComponent,value);
    }
  }
  