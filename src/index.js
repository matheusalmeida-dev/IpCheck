import antlr4 from 'antlr4';
import IpCheckLexer from './parser/IpCheckLexer';
import IpCheckParser from './parser/IpCheckParser';
import IpListener from './IpListener';

export let parse = (input) => {
  const stream = new antlr4.InputStream(input);
  const lexer = new IpCheckLexer(stream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new IpCheckParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.prog();

  const listener = new IpListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  return [listener.ips, listener.erro];
}