const process = require('process');
// 현재 동작하고 있는 노드 프로세스에 대한 정보를 얻을 수 있다.

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage);
