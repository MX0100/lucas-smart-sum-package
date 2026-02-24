const pkg = require('../package.json');

const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const reset = '\x1b[0m';
const bold = '\x1b[1m';

console.log(`
${cyan}╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   ${green}✨ ${bold}lucas-smart-sum-package${reset}${cyan} installed successfully!    ║
║                                                            ║
║   ${yellow}Version:${reset} ${pkg.version}                                       ${cyan}║
║                                                            ║
║   ${reset}Usage:                                                   ${cyan}║
║   ${green}const { magicSum } = require('lucas-smart-sum-package');${cyan} ║
║   ${green}console.log(magicSum(2, 3)); // 5${cyan}                        ║
║                                                            ║
║   ${yellow}GitHub:${reset} https://github.com/MX0100/lucas-smart-sum-package ${cyan}║
║                                                            ║
╚════════════════════════════════════════════════════════════╝${reset}
`);
