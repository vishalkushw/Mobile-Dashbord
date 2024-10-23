function mydel(myid)
{
  let api=`http://localhost:3000/mobile/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}


async function Display()
{


 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="orange">
                <th> Mobile name </th>
                <th> Model </th>
                <th> Launch Year </th>
                <th> Price </th>
                <th> Delete</th>
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
                  <td>
                  <a href="#" onclick="mydel('${key.id}')">

                    <img src="images/delet.jpg" width="30" height="30" >
                  </a>
                  </td>
                </tr>  
            `
        
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

Display();


