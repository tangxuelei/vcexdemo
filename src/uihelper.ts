import * as vscode from "vscode";
import { window } from "vscode";
import * as fs from "fs";
import HtmlUtil from "./htmlutil";

export default class UIHelper {
  log: vscode.OutputChannel;
  constructor() {
    this.log = vscode.window.createOutputChannel("uihelperlog");
  }
  private _warn(obj: string) {
    vscode.window.showInformationMessage(obj);
  }
  private _alert(obj: string) {
    vscode.window.showErrorMessage(
      `${obj}\nwant some help?link me!\nemail:tangxuelei888@gmail.com`,
      { modal: true }
    );
  }
  html2scss() {
    var editor = window.activeTextEditor;
    if (!editor) {
      return this._alert("errcode:001");
    }
    if (editor.selection.isEmpty) {
      return this._alert("you may not select any xml like code");
    }
    if (editor.document.languageId !== "html") {
      return this._alert("you may not select any xml like code");
    }
    var codetext = editor.document.getText(editor.selection).trim();
    fs.writeFileSync(editor.document.uri.fsPath + ".scss", new HtmlUtil(codetext).toscss());
    this._warn(`file:${editor.document.uri.fsPath + ".scss"} is created`);
  }
}