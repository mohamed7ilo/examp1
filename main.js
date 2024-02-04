//מבחן 1 
//ex1
function multiplyBy5(arr) {
    let resarr = [];

    for (let x = 0; x < arr.length; x++) {
        let mul = arr[x] * 5;
        resarr.push(mul);
    }

    console.log(resarr);
}

//ex2
function findIndexBigger12(arr1) {
    let resarr = [];
    for (let x = 0; x < arr1.length; x++) {
        if (arr1[x] > 12) {
            console.log(x);
        }
    }
}
//ex3
function divideBy6Check(arr2) {
    let res = true;
    for (let x = 0; x < arr2.length; x++) {
        if (arr2[x] % 6 !== 0) {
            res = false;
        }
    }
    console.log(res);
}
//ex4
function biggerThan20(arr3) {
    let res = false;
    for (let x = 0; x < arr3.length; x++) {
        if (arr3[x] > 20) {
            res = true;
        }
    }
    console.log(res);
}
//ex5
function filterArrString(arr) {
    let filteredStrings = arr.filter(item => typeof item === 'string');
    console.log(filteredStrings);
}

//ex6
function findNumberBigger5(arr1) {
    for (let x = 0; x < arr1.length; x++) {
        if (typeof arr1[x] === 'number' && arr1[x] > 5) {
            console.log(arr1[x]);
        }
    }
}
//ex7
function multiplyBy2(arr) {
    let resarr = [];

    for (let x = 0; x < arr.length; x++) {
        let mul = arr[x] * 2;
        resarr.push(mul);
    }

    console.log(resarr);
}

//ex8
function smallerThan9(arr3) {
    let res = true;
    for (let x = 0; x < arr3.length; x++) {
        if (arr3[x] > 9) {
            res = false;
        }
    }
    console.log(res);
}

//ex9
function returnEzugiArr(arr) {
    let resarr = []
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] % 2 != 0) {
            resarr.push(arr[x])
        }
    }
    console.log(resarr);
}
//ex10

function stringConnect(arr) {
    let newArray = []
    for (let x = 0; x < arr.length; x++) {
        newArray = arr.map(str => str + "-java");
    }
    console.log(newArray);
}
//ex11
function towLettersCheck(arr) {
    let index = arr.findIndex(str => str.length > 2);
    console.log(index);
}

//ex12 
function tallArr(arr) {
    let allLength = arr.every(word => word.length >= 4);
    console.log(allLength);
}
//ex13

function checkBcharacter(arr) {
    let WithB = []
    WithB = arr.some(str => str.startsWith('b'));
    console.log(WithB);

}
//ex14
function endsWithE(arr) {
    let withE = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x].endsWith('e')) {
            withE.push(arr[x]);
        }
    }
    console.log(withE);
}
//ex15
function startsWithB(arr){
        let StartsWithB = []
        for (let x = 0; x < arr.length; x++){
            if(arr[x].startsWith('b')){
                StartsWithB.push(arr[x])
            }
        }
        console.log(StartsWithB);
}
