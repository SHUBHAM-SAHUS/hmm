import React from "react";
import "../style/modalform/progress.scss";
export const Progressbar=()=>{
    return(
        <>
           <div className="container pt-4">
              <p className="text-center cclr"> Your video resume is uploading...</p>
              <Progressbar/>

           </div> 

        </>
    );
}