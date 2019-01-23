import * as vscode from "vscode";
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("uihelper.test", async () => {
      //弹框
       vscode.window.showInformationMessage("Hello World!");
      //   vscode.window.showErrorMessage("error world");
      //   vscode.window.showWarningMessage("warn message");
      //   var input=await vscode.window.showInputBox();
      //   if(input){
      // 	vscode.window.showInformationMessage(input);
      //   }
      //读配置
      //   var cf=vscode.workspace.getConfiguration("uihelper");
      //   var tangxuelei=cf.get("tangxuelei");
	  //   console.log(tangxuelei);
	  
    })
  );
}
export function deactivate() {}

function alert(str: string) {
  vscode.window.showInformationMessage(str);
}
