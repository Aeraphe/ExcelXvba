import { XvbaCOM } from "xvbacomjs";
import { Sheets } from "./Sheets";
import { WorkBooks } from "./WorkBooks";

export class Excel extends XvbaCOM {
  public WorkBooks: WorkBooks;
  private _Sheets: Sheets;

  public get Sheets(): Sheets {
    if (this._Sheets == undefined) {
      this._Sheets = this.CreateObject(Sheets);
      return this._Sheets;
    } else {
      return this._Sheets;
    }
  }

  constructor() {
    super("Excel.Application");
    this.WorkBooks = new WorkBooks();
  }

  Visible = () => this.SetBooleanValue("Visible", true);

  Name = () => this.GetStrValue("Name");

  Quit = () => this.CallMethodToGetVoid("Quit");
}
