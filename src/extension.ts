import * as vscode from "vscode";
import UIHelper from "./uihelper";
export function activate(context: vscode.ExtensionContext) {
  var uihelper=new UIHelper();
  context.subscriptions.push(
    vscode.commands.registerCommand("uihelper.html2scss", async () => {
      uihelper.html2scss();
    })
  );
}
export function deactivate() { }