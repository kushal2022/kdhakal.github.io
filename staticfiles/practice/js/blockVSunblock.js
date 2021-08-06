setTimeout(() => { console.log('timeout'); }, 0);
setImmediate(() => { console.log('immediate'); });
setTimeout(() => { console.log('timeout1'); }, 0);
setImmediate(() => { console.log('immediate1'); });
process.nextTick(()=> console.log('nextTick'));
process.nextTick(()=> console.log('nextTick1'));