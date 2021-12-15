class Help {
    print() {
        console.log('Usage: make [command]');
        console.log('');
        console.log('  build: build the application');
        console.log('');
        console.log('  dev: run the application in development mode');
        console.log('');
        console.log('  fmt: format the source code');
        console.log('');
        console.log('  help: show this help');
        console.log('');
        console.log('  start: run the application');
        console.log('');
    }
}

function main() {
    const help = new Help();
    help.print();
}

main();
