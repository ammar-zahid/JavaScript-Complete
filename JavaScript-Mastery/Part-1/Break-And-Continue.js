// break

for (let i = 1; i <= 10; i++) {
    console.log(i); // will print 4 because it will check condition after printing
    if (i === 4) {
        break;
    }
    // console.log(i); will not print 4 because it will check condition before printing
}

// continue

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);
}