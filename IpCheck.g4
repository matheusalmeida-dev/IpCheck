grammar IpCheck;

prog :ip+ EOF;
ip : (ipA | ipB | ipC) host;
host: '.' bit '.' bit '.' bit;
bit:(DIGIT | IP_A | IP_B | IP_C | OCTETO);

fragment NUMBER:[0-9];
fragment A:(NUMBER NUMBER | '0' NUMBER NUMBER | '1' [0-1] NUMBER | '12' [0-6]);
fragment B:('12' [89] | '1' [3-8] NUMBER | '19' [0-1]);
fragment C:('19' [2-9] | '2' [0-1] NUMBER | '22' [0-3]);

ipA:IP_A;
ipB:IP_B;
ipC:IP_C;

IP_A:(DIGIT | A);
IP_B:B;
IP_C:C;

OCTETO:
      '22' [4-9]
      |'2' [3-4] DIGIT
      |'25'[0-5]
;
DIGIT: NUMBER;

WHITESPACE: ('\t') -> skip;
NEWLINE: ('\r'? '\n' | '\r')+ -> skip;