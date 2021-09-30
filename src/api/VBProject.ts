import { XvbaCOM } from "xvbacomjs";
import { VBComponents } from "./VBComponents";

export class VBProject extends XvbaCOM {
    private _VBComponents: VBComponents;
  
    public get VBComponents(): VBComponents {
      if(this._VBComponents==undefined){
        this._VBComponents = this.CreateObject(VBComponents);
      }
     
      return this._VBComponents;
    }
  
    constructor(prop?: any) {
      super(prop);
        
    }

    
  }
  