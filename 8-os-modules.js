//OS MODULES

//os is a built in module
const os = require("os");
const user = userInfo();
console.log(user);

// console.log(uptime);

setInterval(() => {
    const uptime = os.uptime();
    console.log(uptime);
}, 1000);