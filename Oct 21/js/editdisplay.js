

async function editDisplay(myid)
{
  let api=`http://localhost:3000/mobile/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  
  myForm=`
          Edit Mobile Name: <input type="text" value="${Data.mobilename}">
          <br>
           Edit Model Name: <input type="text" value="${Data.model}">
          <br>
           Edit Launch year: <input type="text" value="${Data.launchyear}">
          <br>
           Edit Book Price: <input type="text" value="${Data.price}">
          <br>
          <button> Edit Save! </button>
  `
  document.getElementById("demo1").innerHTML=myForm;
}




async function dataDisplay()
{
 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="orange">
                <th> Mobile name </th>
                <th> Model name  </th>
                <th> Launch Year </th>
                <th> Price </th>
                <th></th>
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
                   
                   <a href="#" onclick="editDisplay(${key.id})">
                     <img src="images/edit.png" width="30" height="30" >
                   </a>
                   </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();


async function editSave(id){

  let mname= document.getElementById("mname").value ;
  let mdnm=document.getElementById("modl").value ;
  let lyear=document.getElementById("lyear").value ;
  let price=document.getElementById("mprice").value ;

  let api=`http://localhost:3000/mobile/${id}`;

  fetch(api, {
    method: "PATCH",
    headers: {
        "Content-Type" : "application/json"
      },
    body: JSON.stringify(
      {
        mobilenamename: mname,
        model: mdnm,
        launchyear: lyear,
        price: price,

      }
    )
  })
  .then(json => {
    alert("Data updated!!!");
  });
}

async function editDisplay(myid)
{
  let api=`http://localhost:3000/mobile/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  
  myForm=`
          Edit Mobile Name: <input type="text" id="mname" value="${Data.mobilename}">
          <br>
           Edit Model Name: <input type="text" id="modl" value="${Data.model}">
          <br>
           Edit Launch year: <input type="text" id="lyear" value="${Data.launchyear}">
          <br>
           Edit Mobile Price: <input type="text" id="mprice" value="${Data.price}">
          <br>
          <button onclick="editSave(${Data.id})"> Edit Save! </button>
  `
  document.getElementById("demo1").innerHTML=myForm;
}




async function dataDisplay()
{
 let Table=`<table width="90%" border="1" bgcolor="skyblue">
             <tr bgcolor="orange">
                <th> Mobile name </th>
                <th> Model </th>
                <th> Launch Year </th>
                <th> Price </th>
                <th> Adit  </th>
                <th>  </th>
                
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
                   
                   <a href="#" onclick="editDisplay(${key.id})">
                     <img src="images/add.png" width="30" height="30" >
                   </a>
                   </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();