

async function dataDisplay()
{
 let Table=`<table width="90%" border="1" bgcolor="skyblue">
              <tr bgcolor="orange">
                <th> Mobile name </th>
                <th> Model </th>
                <th> Launch Year </th>
                <th> Price </th>
               </tr> 
           `

  let api="http://localhost:3000/mobile";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
       Table+=` <tr>
                  <td> ${key.mobilename} </td>
                  <td> ${key.model} </td>
                  <td> ${key.launchyear} </td>
                  <td> ${key.price} </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();