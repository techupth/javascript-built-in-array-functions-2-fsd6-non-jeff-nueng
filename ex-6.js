// สมมุติว่าเรามี Array ชื่อcarCollection เป็น Array ที่มี Value เป็น String ที่เก็บข้อมูลยี่ห้อของรถยนต์
// และเรามี Function ที่ชื่อว่า updateCarCollection ซึ่งมีคุณสมบัติดังค่อไปนี้
// รับ Parameter carBrand ซึ่งเป็น String เก็บข้อมูลยี่ห้อรถ
// หากเพิ่มยี่ห้อรถยนต์เข้าไปในคอลเลคชั่นสำเร็จ โปรแกรมควรจะแสดงผลลัพธ์ออกมาเป็นข้อความว่า New car collection is: Toyota, Fiat, Honda, BMW, <ยี่ห้อรถใหม่>.
// หากผู้ใช้งานเพิ่มยี่ห้อรถที่มีอยู่แล้วในคอลเลคชั่นโปรแกรมควรจะแสดงผลลัพธ์ออกมาเป็นข้อความว่า <car-brand> already exists in position <position> of the car collection.
// <car-brand> คือยี่ห้อรถที่มีอยู่แล้วใน Collection
// <position> คือตำแหน่งใน Collection


const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    return `new car collection is : ${carCollection}`
  } else {
    return `${carBrand} has already existed in the ${carCollection.indexOf(carBrand) + 1} position of car collection` ;
  }
  
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.