import antlr4 from 'antlr4';
import IpCheckListener from './parser/IpCheckListener';
import IpCheckParser from './parser/IpCheckParser';

export default class IpListener extends IpCheckListener {
  constructor() {
    super();
    this.ips = [];
    this.erro = false;
  }
  enterProg(ctx) {
    ctx.ips = [];
    ctx.erro = false;
  }
  exitProg(ctx) {
    this.ips = ctx.ips;
    this.erro = ctx.erro;
  }
  enterIp(ctx) {
    if (ctx.host() != null) {
      ctx.ip = null;
    } else {
      ctx.ip = null;
    }
    ctx.tipo = null;
  }
  exitIp(ctx) {
    if (ctx.children && ctx.parentCtx.parser._syntaxErrors == 0) {
      if (ctx.children[0] instanceof IpCheckParser.IpAContext){ 
        ctx.tipo = "Classe A";
      } else if (ctx.children[0] instanceof IpCheckParser.IpBContext){
        ctx.tipo = "Classe B";
      } else {
        ctx.tipo = "Classe C";
      }
    } else {
      ctx.parentCtx.erro = true;
    }
    
    if (ctx.tipo != null && ctx.parentCtx instanceof IpCheckParser.ProgContext) {
      ctx.parentCtx.ips.push({
        'tipo': ctx.tipo,
        'ip': ctx.getText()
      });
    }
  }
}