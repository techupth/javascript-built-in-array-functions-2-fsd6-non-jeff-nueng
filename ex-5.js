// สมมุติว่าเรามี Array ชื่อcrimeRecordNames เป็น Array ที่บรรจุชื่อบุคคลที่มีประวัติอาชญากรรม
// ให้เขียน Function ที่ชื่อว่า searchCrimeRecord ซึ่งมีคุณสมบัติต่อไปนี้
// รับ Parameter ชื่อ name ซึ่งเป็น String
// ถ้าชื่อคนที่เข้าเมือง มีประวัติอาชญากรรม โปรแกรมควรจะแสดงผลลัพธ์ออกมาทางหน้าจอว่าเป็นข้อความว่า “<ชื่อ> has a crime record!!!”
// ถ้าชื่อคนที่เข้าเมือง ไม่มีประวัติอาชญากรรม โปรแกรมควรจะแสดงผลลัพธ์ออกมาทางหน้าจอว่าเป็นข้อความว่า “<ชื่อ> has no crime record.”

let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(name) {
  // Start coding here

  if(!crimeRecordNames.includes(name)){
    console.log(`${name} has no crime record`);
  } else {
    console.log(`${name} has crime record!!!`);
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
searchCrimeRecord("Dilan Sandra"); //"Dilan Sandra has no crime record"
//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
searchCrimeRecord("Tinashe Benigno");//"Tinashe Benigno has crime record !!!"

searchCrimeRecord("Cassandre123");