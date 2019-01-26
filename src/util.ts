import * as vscode from "vscode";
var log = vscode.window.createOutputChannel("uihelperlog");

log.append(`want need some new feature or help?link me!\nemail:tangxuelei888@gmail.com`);
log.show();
export const warn = (obj: string) => {
  vscode.window.showInformationMessage(obj);
  log.append(obj);
};
export const alert = (obj: string) => {
  vscode.window.showErrorMessage(
    `${obj}\nwant some help?link me!\nemail:tangxuelei888@gmail.com`,
    { modal: true }
  );
  log.append(`${obj}\nwant some help?link me!\nemail:tangxuelei888@gmail.com`);
};
