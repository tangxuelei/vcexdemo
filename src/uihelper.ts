import { window, workspace } from "vscode";
import * as fs from "fs";
import HtmlUtil from "./htmlutil";
import { alert, warn } from "./util";

export default class UIHelper {
  constructor() {
    
  }
  async html2scss() {
    var editor = window.activeTextEditor;
    var filetypes=['html','htm','jsp','php','vue','jsx','tsx','wxml','javascriptreact','typescriptreact'];
    if (!editor) {
      return alert("errcode:001");
    }
    if (editor.selection.isEmpty) {
      return alert("you may not select any xml like code");
    }
    if (filetypes.indexOf(editor.document.languageId)==-1) {
      return alert(`you may not select any xml like code,\nsupprot filetype ${filetypes.map(i=>'*.'+i).join(' ')}`);
    }
    var codetext = editor.document.getText(editor.selection).trim();
    fs.writeFileSync(
      editor.document.uri.fsPath + ".scss",
      new HtmlUtil(codetext).toscss()
    );
    var doc=await workspace.openTextDocument(editor.document.uri.fsPath + ".scss");
    var doc1=await window.showTextDocument(doc);
    console.log(doc,doc1);
    
    warn(`file:${editor.document.uri.fsPath + ".scss"} is created`);
  }
}
