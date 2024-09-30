import { useEffect, useState } from "react";

function color(){


    let[typeofcolor,settypeofcolor]=useState("hex");
    let[color,setcolor]=useState("black");

let colorhub=(length)=>{
    let number=Math.floor(Math.random()*length);
    console.log(number);
    return number;

}



    let handlecolorhex=()=>{
        let arr=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let hex="#";
for(let i=0;i<6;i++){
    hex+=arr[colorhub(arr.length)];

}
console.log(hex)
setcolor(hex);

    }


    let handlecolorrgb=()=>{
const r=colorhub(256);
const g=colorhub(256);
const b=colorhub(256);
console.log(`rgb(${r},${g},${b})`);
setcolor(`rgb(${r},${g},${b})`);
    }


    // useEffect(()=>{
    //     if(typeofcolor==="rgb") handlecolorrgb();
    //         else handlecolorhex()
    // },[typeofcolor])
    return(
        <div style={
            
            {backgroundColor:color,
            height:"480px"


            }
        
        }>
            <button onClick={()=>{settypeofcolor("hex")}}>Hex color</button>
            <button onClick={()=>{settypeofcolor("rgb")}}>Rgb color</button>
            <button onClick={typeofcolor==="hex"?handlecolorhex:handlecolorrgb}>Random color</button>





            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                color:"white",
                fontSize:"60px",
                marginTop:"50px",
                gap:"20px"
            }}>
                <h3>{typeofcolor==="rgb"?"RGB color":"Hex color"}</h3>
                <h3>{color}</h3>

            </div>
        </div>



    )
}

export default color;