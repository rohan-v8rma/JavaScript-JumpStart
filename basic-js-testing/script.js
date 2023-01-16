function promiseGen() {
    let number = Math.floor(Math.random() * 1000);

    return new Promise( (resolve, reject) => {
        if (number % 2) {
            setTimeout(() => reject(number), 1000);
        }
    
        // If number is even.
        setTimeout(() => resolve(number), 1000);
    } );
}

async function test() {
    try {
        while(true) {
            const num = await promiseGen();
            console.log(num);
        }
    }
    catch(e) {
        console.log("Random number generated was odd so promise rejected.");
        console.log("Catch block executed...");
    }
}

test();