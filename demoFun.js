var fs = require('fs');

var pushCode = function pushCode(msg) {
try {

      const spawn = require('child_process').spawn;

     var ls = spawn('git', ['add','.'])
     spawn('git', ['commit','-m',msg])
     spawn('git', ['push'])


    ls.on('close', code => {
         console.log(`child process exited with code ${code}`);

     });
 } catch (ex) {
     console.log('Error')
 }

 }

 pushCode("add files")

