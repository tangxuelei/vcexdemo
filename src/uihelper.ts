import * as vscode from "vscode";
import { window } from "vscode";
import * as fs from "fs";
import * as path from "path";
var parse5=require("parse5");

export default class UIHelper {
    log: vscode.OutputChannel;
    constructor() {
        this.log= vscode.window.createOutputChannel("uihelperlog");
    }
    private _warn(obj:string) {
        vscode.window.showInformationMessage(obj);
    }
    private _alert(obj:string){
        vscode.window.showErrorMessage(`${obj}\nwant some help?link me!\nemail:tangxuele888@gmail.com`,{modal:true});
    }
    run(){
        var editor=window.activeTextEditor;
        if(!editor){
            return this._alert("errcode:001");
        }
        if(editor.selection.isEmpty){
            return this._alert("you may not select any xml like code");
        }
        if(editor.document.languageId!=="html"){
            return this._alert("you may not select any xml like code");
        }
        var codetext=editor.document.getText(editor.selection).trim();
        var syntaxtree=parse5.parseFragment(codetext);
        var nodes=syntaxtree.childNodes;
        console.log(nodes);
        nodes.forEach(i=>{
            delete i.parentNode;
            delete i.namespaceURI;
        });
        var csstext=this._makecss(nodes);
        fs.writeFileSync(editor.document.uri.fsPath+".scss",csstext);
        this._warn(`file:${editor.document.uri.fsPath+".scss"} is created`);
    }
    private _makecss(sourceNds:Array<any>) {
        var nodes=fltEptLine(sourceNds);
        return `${s(nodes[0])}{
             ${fltEptLine(nodes[0].childNodes).map(i=>s(i)+'{}').join('\n')}
        }`;
    }
}

function fltEptLine(node:Array<any>){
    return node.filter(i=>{
         return i.nodeName!=="#text";
     });
}


function s(node){
    var attr=node.attrs.find(i=>i.name=='class');
    if(attr){
        return `${node.tagName}.${attr.value}`;
    }else{
        return `${node.tagName}`;
    }
}

function ispnode(node){

}

