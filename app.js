const express = require("express");
const fs = require('fs');
const EventEmitter = require('events');
const fsp = require("fs/promises");
const cp = require('child_process');
const stream = require('stream');
const { stdout } = require("process");
const os = require('os');

const app = express();

const arr = [];
arr.push(os.hostname());

cp.exec('python --version', (err, out) => {
    if (err){
        arr.push(err);
    }
    console.log(out);
    arr.push(out);
});

// cp.exec('pip3 install --user --upgrade pillow python-slugify psutil pyqt5 raven', (err, out) => {
//     if (err){
//       arr.push(err);
//     }
//     arr.push(out);
// });

app.use('/', (req, res) => {
    res.send(arr);
})

app.listen(3000);






// const stream = require('stream');

// process.stdin.on('data', (data) => {
//     if (data.toString().trim() == "aaa"){
        
//     }
//         console.log(data.toString().trim());
        
// })


// const st = stream.Readable.from(url()).on('error', (err) => console.error(err));
// // const costream = fs.createWriteStream(process.stdout);
// // st.pipe(process.stdout);
// // process.stdout.pipe(st);
// st.pipe(process.stdout)
// process.stdout.write("dfdfdf");
// st.on('data', (data) =>{
//     console.log(data);
// } )

// const writer = fs.createWriteStream("./m.txt", {
//     highWaterMark: 1000000
// });
// const reader = fs.createReadStream("mo.txt");

// let counter = 0;

// reader.on('data', (data) => {
//     const canWrite = writer.write(data);

//     if (!canWrite){
//         reader.pause();
//         console.log(++counter);
//     } 

// })


// writer.on('drain', () => {
//     reader.resume();
//     console.log("hmmm");
// })

// reader.on('end', () => {
//     reader.close();
// })

// writer.on('finish', () => {
//     writer.close();
// })

// for (ele of arr){

//   if (canWrite == false){
//     writer.
//   }
// }







// const app = express();

// const main = require("./m");

// fs.appendFile('mo', "uufbufbefb", (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// app.get("/", (req, res) => {
//     console.log("hhhhhhhhh");
//     res.send("hi");
// })




// fsp.readFile('mo').then(data => console.log(data.toString()));

// let arr = new Array();
// let event = new EventEmitter();

// fs.readFile('mo', "utf-8", (err, data) => {
//     console.log(data);
// });

// event.on('go', () => {
//     console.log(arr);
// })

// console.log(arr + "wwww");
// let server = app.listen(3000);

// event.emit('SIGTERM');

// process.emit('SIGKILL');
process.on('beforeExit', () =>{
    console.log("Fffff");
});

// exec("node -v", (err, data) => {
//     if (err){
//         console.dir(err);
//     }
//     process.stdout.write(process.cwd() + "\n");
//     process.stdout.write(data);
   
// });

process.on('SIGTERM', () => {
    console.log("jjj");
})

// app.listen(3000);



// server.close();
// process.exit(0);






