import { XvbaCOM } from "xvbacomjs";

export class VBComponent extends XvbaCOM {
  private _Name: string;

  private _Type: number;

  public get Name(): string {
    if (this._Name == undefined) {
      this._Name = this.GetStrValue("Name");
    }
    return this._Name;
  }

  public get Type(): number {
    if (this._Type == undefined) {
      this._Type = this.GetNumbValue("Type");
    }
    return this._Type;
  }

  constructor(param?: any) {
    super(param);
  }


  Export(compFilePath:string){
      return this.CallMethodToGetNumber("Export",compFilePath)
  }



}
