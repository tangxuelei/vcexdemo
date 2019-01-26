
import * as parse5 from "parse5";
// tslint:disable-next-line:class-name
interface iHtmlnodeattr {
  name: string;
  value: string;
}
// tslint:disable-next-line:class-name
interface iHtmlnode {
  nodeName: string;
  tagName: string;
  attrs: Array<iHtmlnodeattr>;
  childNodes?: Array<iHtmlnode>;
  parentNode?: iHtmlnode;
}


class HtmlUtil {
  treenode: iHtmlnode;
  constructor(cxt:string){
    this.treenode=parse5.parseFragment(cxt);
  }
  private filterEmptyLine(nodes: iHtmlnode[]): iHtmlnode[] {
    return nodes.filter(i=>i.nodeName!=='#text');
  }
  private makecss(node: iHtmlnode): string {
    if(node.attrs&&node.attrs.length>0){
      var id=node.attrs.find(i=>i.name==='id');
      var cls=node.attrs.find(i=>i.name==='class');
      if(id){
        return `#${id.value}`;
      }
      if(cls){
        return `${node.nodeName}.${cls.value}`;
      }
      return `${node.nodeName}`;
    }else{
      return `${node.nodeName}`;
    }
  }
  private _toscss(nodes:Array<iHtmlnode>): string {
    nodes = this.filterEmptyLine(nodes);
    return nodes.map(i=>{
      return `${this.makecss(i)}{${this._toscss(i.childNodes)}}`;
    }).join('\n');
  }
  toscss(): string {
    return this._toscss(this.treenode.childNodes);
  }
}

export default HtmlUtil;