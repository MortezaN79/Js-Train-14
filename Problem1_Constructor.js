function Food(name,type,price,deliverTime){
    this.name = name;
    this.type = type;
    this.price = price;
    this.deliverTime = deliverTime;
    this.isReady = false;
    this.rate = 0;
    this.comment = [];
}
function Comment(author,text){
    this.author = author;
    this.text = text;
    this.rate =0;
    this.date = new Date();
}

function order(Food,isSpecial){
    if (isSpecial)
        console.log(`Price is ${0.8 * Food.price} and rate is ${Food.rate}`)
    else
        console.log(`Price is ${Food.price} and rate is ${Food.rate}`)
}
function foodSetRate(food,comment,rate){
    commentSetRate(comment,rate)
    Food.comment.push(comment)
    Food.rate =(( Food.rate * (Food.comment.length-1) ) + rate) /Food.comment.length
}
function addComment(food,author,text,rate){
    const foodComment = new Comment(author,text);
    foodSetRate(food,foodComment,rate)
}
function commentSetRate(comment,rate){
    comment.rate =rate
}

const FoodObj = new Food("pizza","Italian",80000,30);
addComment(FoodObj,'ali','perfect',4)
order(FoodObj,true)

console.log(`Food name: ${FoodObj.name}
Food type: ${FoodObj.type}
Food price: ${FoodObj.price}
Food deliverTime: ${FoodObj.deliverTime}
Food isReady: ${FoodObj.isReady}`)

for (let i in FoodObj.comment) {
    console.log(`author: ${i.author} 
    text: ${i.text}
    rate: ${i.rate}
    date: ${i.date}`)
}