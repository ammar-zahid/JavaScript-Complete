const info = {
    personName: 'Captain',
    personAge: 19
}

const info2 = Object.assign({}, info)
info.address = 'somewhere'
console.log(info);
console.log(info2);