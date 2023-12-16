export const getDeg = (index: number, arr: number[]) => {
    const leftHalfArr = arr.slice(0, arr.length/2);
    const rightHalfArr = arr.slice(arr.length/2).reverse();

    let isRight = false;

/*     if (leftHalfArr.find((elem) => elem === index)) {
        console.log('left half', index, leftHalfArr.indexOf(index));
    } */
    if (rightHalfArr.find((elem) => elem === index)) {
        isRight = true;
        //console.log('right half', index, rightHalfArr.indexOf(index));
    }

    return {
        elemIndex: isRight ? rightHalfArr.indexOf(index) + 1 : leftHalfArr.indexOf(index),
        isRight
    }
}