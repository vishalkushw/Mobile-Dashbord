document.getElementById("btn1").addEventListener("click", searchBymodel);


async function  searchBymodel()
{
    let Table=`<table border="1" width="90%"  height= "60%" bgcolor="skyblue">
               <tr bgcolor="orange">
                 <th> Mobile name </th>
                <th> Model </th>
                <th> Launch Year </th>
                <th> Price </th>
               </tr>  
                 `
    let txtval= document.getElementById("txt1").value;
    let api=`http://localhost:3000/mobile/?model=${txtval}`;

    let Obj= await  fetch(api);
    let Data= await Obj.json();               
    console.log(Data);

    Data.map((key)=>{
        Table+=`<tr>
                    <td> ${key.mobilename} </td>
                  <td> ${key.model} </td>
                  <td> ${key.launchyear} </td>
                  <td> ${key.price} </td>
                 </tr>         
               `
    })

     Table+="</table>";

     document.getElementById("demo").innerHTML=Table;
}