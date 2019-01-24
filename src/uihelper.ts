import * as vscode from "vscode";
import { window } from "vscode";
import * as fs from "fs";
var parse5 = require("parse5");

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
      `${obj}\nwant some help?link me!\nemail:tangxuele888@gmail.com`,
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
    var syntaxtree = parse5.parseFragment(codetext);
    var csstext = makecss(syntaxtree.childNodes);
    fs.writeFileSync(editor.document.uri.fsPath + ".scss", csstext);
    this._warn(`file:${editor.document.uri.fsPath + ".scss"} is created`);
  }
}
function fltEptLine(nodes: Array<any>) {
  return nodes.filter(i => {
    return i.nodeName !== "#text";
  });
}
function makeselector(node) {
  var attr = node.attrs.find(i => i.name === "class");
  if (attr) {
    return `${node.tagName}.${attr.value}`;
  } else {
    return `${node.tagName}`;
  }
}
function makecss(nodes) {
  nodes = fltEptLine(nodes);
  return nodes
    .map(i => {
      return `${makeselector(i)}{${makecss(i.childNodes)}}`;
    })
    .join("\n");
}