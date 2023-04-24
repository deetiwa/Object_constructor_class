//extract value as an array from an array of objects

// function array1(arr, prop)
//  {

//     // extract value from property
//     let extValue = arr.map(item => item[prop]);

//     return extValue;

// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// // passing an array of objects and property 'a' to extract
// const result = extValue(objArray, 'a');
// console.log(result);


function app(arr1, pro)

{
    let ext = arr1.map(item1 => item1[pro]);

    return ext;
}
 const objarr1 = [{a:1,b:2},{a:3,b:4},{a:5,b:6}];

 const result1 = ext (objarr1, 'b');

 console.log(result);