import React, { useState } from "react";
const GIPHY_API="https://api.giphy.com/v1/gifs/search?api_key=SOZ8W6gfVTI4a3b8yj5TySNMCcvEr46D&limit=20&offset=0&q=";

const Giphyapi =()=>{
    const [search,setSearch]=useState("");
    const [gifs,setGifs]=useState([]);
    const searchGif=()=>{
        if(search.length>0){
            fetch(GIPHY_API+search)
            .then((res)=>{
                return res.json();
            })
            .then((result)=>{
                setGifs(result.data.map((gif)=>{
                    return gif.images.fixed_height.url;
                }))
            })
            .catch(()=>{
                alert("Something Went Wrong");
            })
        }
    }
    return(
      <>
      <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="card">
          <div className="card-header">
           <h1>search GIFs</h1>
          </div>
          <div className="card-body">
          <input
          type="text"
          placeholder="search GIFs"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="form-control"
          />
          <br/>
          <button className="btn btn-lg btn-success" onClick={searchGif}>Search</button>
          <br/>
          <div className="row">
              
              {gifs.map((gif)=>{
              return(
                <div className="col-lg-4">
                  <div className="card-body">
                     <img src={gif}/>
                  </div>
                </div>
              )
              })}
              
          </div>
          
          </div>
      </div>
      </div>
      </div>
      </>
    );
}

export default Giphyapi