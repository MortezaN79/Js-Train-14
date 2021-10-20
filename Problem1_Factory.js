function createFood(name,type,price,deliverTime){
    return{
        name,
        type,
        price,
        deliverTime,
        isReady : false,
        rate : 0,
        comment : [],
    }
}
function createComment(author,text){
    return{
        author,
        text,
        rate : 0,
        date : new Date(),
    }
}
function order(Food,isSpecial){
    if (isSpecial)
        console.log(`Price is ${0.8 * Food.price} and rate is ${Food.rate}`)
    else
        console.log(`Price is ${Food.price} and rate is ${Food.rate}`)
}
function addComment(food,author,text,rate){
    const foodComment = createComment(author,text);
    foodSetRate(food,foodComment,rate)
}
function foodSetRate(food,comment,rate){
    commentSetRate(comment,rate)
    Food.comment.push(comment)
    Food.rate =(( Food.rate * (Food.comment.length-1) ) + rate) /Food.comment.length
}
function commentSetRate(comment,rate){
    comment.rate =rate
}
const Food1 = createFood("pizza","Italian",80000,30);
addComment(Food1,'ali','perfect')

console.log(Food1)
order(Food1,true)
