import React, {useState } from "react";
const Upload = ()=>{
const[selectedImg,setSelectedImg]=useState([]);

const imgHandleChange=(e)=>{
if(e.target.files){
    const fileArray=Array.from(e.target.files).map((file)=> URL.createObjectURL(file));
    console.log(fileArray);

    setSelectedImg((prevImages)=>prevImages.concat(fileArray));
    Array.from(e.target.files).map(
        (file)=>URL.revokeObjectURL(file)
    )
}
}
const renderPhotos=(source)=>{
    return source.map((photo)=>{
        return <img style={{height:"200px",width:"200px",padding:"10px"}} src={photo} key={photo}/>
    })
}
    return(
     <>
    <section className="signup">
       <div className="row jumbotron bg-light">
         <div className="col-sm-12">
         <div className="container">
            <h2 className="form-title text-center">Uploadgif</h2>
            <hr></hr>
            <div className="form-group row">
               <div className="col-lg-12 col-sm-12">
               <label>upload gif Images</label>
               <input type="file" className="form-control" name="image" id="image"  multiple onChange={imgHandleChange}/>
               </div>
               <div className="col-lg-1 col-sm-1"></div>
               <div className="col-lg-11 col-sm-11">
               <div className="container">
               {renderPhotos(selectedImg)}
               </div>
               </div>
            </div>
         </div>
         </div>
       </div>
       </section>
     </>
    );
}

export default Upload