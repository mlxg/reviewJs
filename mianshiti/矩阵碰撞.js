const isOverlap = (rect1, rect2) => /* TODO */ {
    let r1 = rect1.x > rect2.x + rect2.width || rect1.y > rect2.y + rect2.height;
    let r2 = rect2.x > rect1.x + rect1.width || rect2.y > rect1.y + rect1.height;
    return !(r1 || r2);
};

const rect1 = {x: 100, y: 100, width: 100, height: 100};
const rect2 = {x: 150, y: 150, width: 100, height: 100};
console.log(isOverlap(rect1, rect2)); // => true