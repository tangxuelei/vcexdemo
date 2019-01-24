import * as vscode from "vscode";
import { window } from "vscode";
import UIHelper from "./uihelper";

var ochannel = vscode.window.createOutputChannel("uihelper日志");
export function activate(context: vscode.ExtensionContext) {
  var uihelper=new UIHelper();

  context.subscriptions.push(
    vscode.commands.registerCommand("uihelper.test", async () => {
      uihelper.run();

      //弹框
      //vscode.window.showInformationMessage("Hello World!");
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

      //剪切板
      // await vscode.env.clipboard.writeText("aaasdasdasd");
      // var text=await vscode.env.clipboard.readText();
      // alert(text)

      //顶部ibox
      // var ibox=vscode.window.createInputBox();
      // ibox.busy=true;
      // ibox.placeholder="placeholder......";
      // ibox.title="title.....";
      // ibox.onDidChangeValue((e)=>{
      //   alert(e);
      // });
      // ibox.onDidAccept(e=>{
      //   alert('ibox.onDidAccept(e=>{');
      // });
      // ibox.show();

      //客户端的输出日志
      // ochannel.append("aaa");
      // ochannel.appendLine("bbb");
      // ochannel.show();

      ///顶部输入框和ibox差不多
      // var qp=vscode.window.createQuickPick();
      // qp.title="qptitle";
      // qp.busy=true;
      // qp.show()

      //底部状态栏
      // var sbar=vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
      // sbar.text="texttext...";
      // sbar.tooltip="tooltip...";
      // sbar.show();
      // for (let index = 0; index < 1000; index++) {
      //   setTimeout(() => {
      //     sbar.text="t"+(1000-index);
      //   }, 300*index);
      // }

      //自定义终端
      // var tml=vscode.window.createTerminal("uihelper终端");
      // tml.sendText(`ls`,true);
      // tml.show();

      //浏览器相关操作
      // var webviewpanel = vscode.window.createWebviewPanel("type..", "title...", vscode.ViewColumn.Beside);
      // webviewpanel.webview.html = `<div id="haha">哈哈哈</div>`;

      //进度条
      // vscode.window.withProgress({ location: vscode.ProgressLocation.Notification, title: "加载中哈哈哈...", cancellable: true }, (progress, token) => {
      //   token.onCancellationRequested((e) => {
      //     alert('取消了');
      //     clearInterval(timeid);
      //   });
      //   var max = 100;
      //   var min = 0;
      //   var timeid = setInterval(() => {
      //     min++;
      //     if (min === max) {
      //       clearInterval(timeid);
      //     }
      //     var message=min/max*100+"%";
      //     progress.report({ increment: 1, message });
      //   }, 100);
      //   return progress;
      // });


      //顶部工作区选择器
      // var fd=await window.showWorkspaceFolderPick({placeHolder:"hahahahah"});
      // if(fd){
      //   alert(fd)
      // }else{
      //   alert("none")
      // }

      //modal
      // var modal=await window.showWarningMessage("hahaha",{modal:true},'1111','2222','3333','44444','55555','66666');
      // if(modal){
      //   alert(modal)
      // }

      //打开保存文件
      // await window.showOpenDialog({
      //   defaultUri:vscode.Uri.parse('file:/Users/txl/Desktop/editor')
      // })
      // await window.showSaveDialog({
      //   defaultUri:vscode.Uri.parse('file:/Users/txl/Desktop/editor')
      // })

      //左下状态栏
      // window.setStatusBarMessage("adadadadad")

      // window.showTextDocument(vscode.Uri.parse('file:/Users/txl/Desktop/editor/index.js');
    
     //执行cmd
     // vscode.commands.executeCommand("uihelper.test")

    })
  );
}
export function deactivate() { }

function alert(str: string) {
  vscode.window.showInformationMessage(str);
  ochannel.appendLine(str);
  ochannel.show();
}
