const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
   .::::                                 .::          .::      .::\n\
 .:    .::                               .::           .::   .::  \n\
.::           .::       .::       .::    .::   .::      .:: .::   \n\
.::         .::  .::  .::  .::  .::  .:: .:: .:   .::     .::     \n\
.::   .::::.::    .::.::    .::.::   .:: .::.::::: .::  .:: .::   \n\
 .::    .:  .::  .::  .::  .::  .::  .:: .::.:         .::   .::  \n\
  .:::::      .::       .::         .:: .:::  .::::   .::      .::\n\
                                 .::                              \n");
console.info("\n\
=========================================\n\
BotName: LINE VK JS\n\
Version: JAVA VERSION\n\
Thanks to @AVENGRES @VK_TEAMHACK\n\
=========================================\n\
\nNOTE : This bot is made by @VK @VK_TEAM and has been forked by @AVENGRES !\n\
***Copyright belongs to the author***");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
