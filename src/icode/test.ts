import  { exec } from 'child_process'; 


exec('cd /targetApp', (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    console.log("Output: \n", output)
})