var fs = require('fs');

var pushCode = function pushCode(msg,your_branch) {

const spawn = require('child_process').spawn


try {
     var ls = spawn('git', ['add','.'])
     spawn('git', ['commit','-m',msg])
     spawn('git', ['push','origin',your_branch])



    ls.on('close', code => {
         console.log(`child process exited with code ${code}`);

     });
 } catch (ex) {
     console.log('Error')
	
     var ls = spawn('git', ['add','.'])
     spawn('git', ['commit','-m',msg])
     spawn('git', ['push','origin',your_branch])
 }

 }

 pushCode("add files","https://github.com/abid72rizvi/userDetails.git")
