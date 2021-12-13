// Generated from IpCheck.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import IpCheckListener from './IpCheckListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\n.\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0006\u0002\u0012\n\u0002\r\u0002\u000e\u0002",
    "\u0013\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u001b\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0003",
    "\u0003\u0002\u0004\b\u0002)\u0002\u0011\u0003\u0002\u0002\u0002\u0004",
    "\u001a\u0003\u0002\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002\b",
    "%\u0003\u0002\u0002\u0002\n\'\u0003\u0002\u0002\u0002\f)\u0003\u0002",
    "\u0002\u0002\u000e+\u0003\u0002\u0002\u0002\u0010\u0012\u0005\u0004",
    "\u0003\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002",
    "\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002",
    "\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u0002",
    "\u0002\u0003\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u001b\u0005\n",
    "\u0006\u0002\u0018\u001b\u0005\f\u0007\u0002\u0019\u001b\u0005\u000e",
    "\b\u0002\u001a\u0017\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002",
    "\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0005\u0006\u0004\u0002\u001d\u0005\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0007\u0003\u0002\u0002\u001f \u0005\b\u0005",
    "\u0002 !\u0007\u0003\u0002\u0002!\"\u0005\b\u0005\u0002\"#\u0007\u0003",
    "\u0002\u0002#$\u0005\b\u0005\u0002$\u0007\u0003\u0002\u0002\u0002%&",
    "\t\u0002\u0002\u0002&\t\u0003\u0002\u0002\u0002\'(\u0007\u0004\u0002",
    "\u0002(\u000b\u0003\u0002\u0002\u0002)*\u0007\u0005\u0002\u0002*\r\u0003",
    "\u0002\u0002\u0002+,\u0007\u0006\u0002\u0002,\u000f\u0003\u0002\u0002",
    "\u0002\u0004\u0013\u001a"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class IpCheckParser extends antlr4.Parser {

    static grammarFileName = "IpCheck.g4";
    static literalNames = [ null, "'.'" ];
    static symbolicNames = [ null, null, "IP_A", "IP_B", "IP_C", "OCTETO", 
                             "DIGIT", "WHITESPACE", "NEWLINE" ];
    static ruleNames = [ "prog", "ip", "host", "bit", "ipA", "ipB", "ipC" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = IpCheckParser.ruleNames;
        this.literalNames = IpCheckParser.literalNames;
        this.symbolicNames = IpCheckParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, IpCheckParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.ip();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IpCheckParser.IP_A) | (1 << IpCheckParser.IP_B) | (1 << IpCheckParser.IP_C))) !== 0));
	        this.state = 19;
	        this.match(IpCheckParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ip() {
	    let localctx = new IpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, IpCheckParser.RULE_ip);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case IpCheckParser.IP_A:
	            this.state = 21;
	            this.ipA();
	            break;
	        case IpCheckParser.IP_B:
	            this.state = 22;
	            this.ipB();
	            break;
	        case IpCheckParser.IP_C:
	            this.state = 23;
	            this.ipC();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 26;
	        this.host();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	host() {
	    let localctx = new HostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, IpCheckParser.RULE_host);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(IpCheckParser.T__0);
	        this.state = 29;
	        this.bit();
	        this.state = 30;
	        this.match(IpCheckParser.T__0);
	        this.state = 31;
	        this.bit();
	        this.state = 32;
	        this.match(IpCheckParser.T__0);
	        this.state = 33;
	        this.bit();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bit() {
	    let localctx = new BitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, IpCheckParser.RULE_bit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IpCheckParser.IP_A) | (1 << IpCheckParser.IP_B) | (1 << IpCheckParser.IP_C) | (1 << IpCheckParser.OCTETO) | (1 << IpCheckParser.DIGIT))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipA() {
	    let localctx = new IpAContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, IpCheckParser.RULE_ipA);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(IpCheckParser.IP_A);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipB() {
	    let localctx = new IpBContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, IpCheckParser.RULE_ipB);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(IpCheckParser.IP_B);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipC() {
	    let localctx = new IpCContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, IpCheckParser.RULE_ipC);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(IpCheckParser.IP_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

IpCheckParser.EOF = antlr4.Token.EOF;
IpCheckParser.T__0 = 1;
IpCheckParser.IP_A = 2;
IpCheckParser.IP_B = 3;
IpCheckParser.IP_C = 4;
IpCheckParser.OCTETO = 5;
IpCheckParser.DIGIT = 6;
IpCheckParser.WHITESPACE = 7;
IpCheckParser.NEWLINE = 8;

IpCheckParser.RULE_prog = 0;
IpCheckParser.RULE_ip = 1;
IpCheckParser.RULE_host = 2;
IpCheckParser.RULE_bit = 3;
IpCheckParser.RULE_ipA = 4;
IpCheckParser.RULE_ipB = 5;
IpCheckParser.RULE_ipC = 6;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IpCheckParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(IpCheckParser.EOF, 0);
	};

	ip = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IpContext);
	    } else {
	        return this.getTypedRuleContext(IpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.exitProg(this);
		}
	}


}



class IpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IpCheckParser.RULE_ip;
    }

	host() {
	    return this.getTypedRuleContext(HostContext,0);
	};

	ipA() {
	    return this.getTypedRuleContext(IpAContext,0);
	};

	ipB() {
	    return this.getTypedRuleContext(IpBContext,0);
	};

	ipC() {
	    return this.getTypedRuleContext(IpCContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.enterIp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.exitIp(this);
		}
	}


}



class HostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IpCheckParser.RULE_host;
    }

	bit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BitContext);
	    } else {
	        return this.getTypedRuleContext(BitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.enterHost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.exitHost(this);
		}
	}


}



class BitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IpCheckParser.RULE_bit;
    }

	DIGIT() {
	    return this.getToken(IpCheckParser.DIGIT, 0);
	};

	IP_A() {
	    return this.getToken(IpCheckParser.IP_A, 0);
	};

	IP_B() {
	    return this.getToken(IpCheckParser.IP_B, 0);
	};

	IP_C() {
	    return this.getToken(IpCheckParser.IP_C, 0);
	};

	OCTETO() {
	    return this.getToken(IpCheckParser.OCTETO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.enterBit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.exitBit(this);
		}
	}


}



class IpAContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IpCheckParser.RULE_ipA;
    }

	IP_A() {
	    return this.getToken(IpCheckParser.IP_A, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.enterIpA(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.exitIpA(this);
		}
	}


}



class IpBContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IpCheckParser.RULE_ipB;
    }

	IP_B() {
	    return this.getToken(IpCheckParser.IP_B, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.enterIpB(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.exitIpB(this);
		}
	}


}



class IpCContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = IpCheckParser.RULE_ipC;
    }

	IP_C() {
	    return this.getToken(IpCheckParser.IP_C, 0);
	};

	enterRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.enterIpC(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof IpCheckListener ) {
	        listener.exitIpC(this);
		}
	}


}




IpCheckParser.ProgContext = ProgContext; 
IpCheckParser.IpContext = IpContext; 
IpCheckParser.HostContext = HostContext; 
IpCheckParser.BitContext = BitContext; 
IpCheckParser.IpAContext = IpAContext; 
IpCheckParser.IpBContext = IpBContext; 
IpCheckParser.IpCContext = IpCContext; 
