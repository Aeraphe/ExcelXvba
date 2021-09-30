import { XvbaCOM } from "xvba-com";
import { VBProject } from "./VBProject";

export class WorkBook extends XvbaCOM {
  private _VBProject:VBProject;

  public get VBProject(): VBProject {
 
    if (this._VBProject == undefined) {
      this._VBProject = this.CreateObject(VBProject);
      return this._VBProject
    } else {
      return this._VBProject;
    }
  }

  public set VBProject(ss:any) {

       this._VBProject =ss

  }

  public get Activate(): any {
    return this.GetNumbValue("Activate");
  }

  constructor(prop?: any) {
    super(prop);
  }

  FullName = () => this.GetStrValue("FullName");
}
