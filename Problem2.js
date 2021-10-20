function isEqual(object1,object2){
    if (Object.keys(object1).length !== Object.keys(object2).length){
        return false;
    }
    else{
        for (let key in object1){
            if (!(key in object2)) return false;
            else if (typeof object1[key] === 'object'){
                isEqual(object1[key], object2[key])
            }
        }
        return true;
    }
}

const obj1 = {
    key0 : false,
    key1 : 'val1',
    key2 : 20,
    key3 : [0, 1, 2],
    key4 : {name: 'mohammad'},
}
const obj2 = {
    key0 : false,
    key1 : 'val1',
    key2 : 20,
    key3 : [0, 1, 2],
    key4 : {name: 'mohammad'},
}
console.log(isEqual(obj1, obj2))

const obj3 = {
    key0 : false,
    key1: 'val1',
    key2 : 10,
    key3 : [0],
}
const obj4 = {
    key0 : false,
    key1: 'val1',
    key2 : 20,
    key3 : [1],
    key4 : {},
}
console.log(isEqual(obj3,obj4))

///////////////////////////////

function isSame(object1,object2){
    if (Object.keys(object1).length !== Object.keys(object2).length){
        return false;
    }
    else{
        return object1 === object2;
    }
}

const obj5 = {
    key0 : false,
    key1: 'val1',
    key2 : 10,
}
const obj6 = {
    key0 : false,
    key1: 'val1',
    key2 : 10,
}
const obj7 = obj5;

console.log(isSame(obj5,obj6))
console.log(isSame(obj5,obj7))
