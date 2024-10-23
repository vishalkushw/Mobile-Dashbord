
document.getElementById("btnsave").addEventListener("click", mobileSave);

async function mobileSave(){
    let mnme=document.getElementById("mname").value;
    let mdnm=document.getElementById("modl").value;
    let lyear=document.getElementById("lyear").value;
    let price=document.getElementById("mprice").value;


    let api="http://localhost:3000/mobile";

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "mobilename":mnme,
          "model":mdnm,
          "launchyear":lyear,
          "price":price   
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    console.log(response);
    alert("data save!!!");

}