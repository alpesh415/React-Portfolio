import React from 'react'
import image from "./image.png";
export default function Home() {
  return (
  
    
    
    <div class="bg-white mt-0 border-bottom border-dark " style={{ height: "600px", paddingTop:"100px" }} id="home">
      
      <div class="card mb-3 w-75 mx-auto mt-0 border-0 bg-white" >
  <div class="row g-0">
    
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title fs-1 text-primary-emphasis"><em>Hello,I'm <span class="text-primary-emphasis">Harshit</span> </em></h1>
        <h1 class="card-title text-primary-emphasis"><em>Rathod</em> </h1>
        <h5 class="card-title text-primary-emphasis"><em>Crative  <span>Web Devloper</span></em> </h5>
        <p class="card-text text-primary-emphasis"><em>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</em></p>
       
        <button type="button" class="btn bg-info text-primary-emphasis"><em>View My Work</em></button>
        <button type="button" class="btn bg-info text-primary-emphasis ms-3"><em>Get In Touch</em></button>

         <p class="card-text mt-4"><span>
              <i class="bi bi-twitter-x  border p-2 rounded-circle text-primary-emphasis bg-white  border-dark"></i>
               <i class="bi bi-facebook ms-3  border p-2 rounded-circle text-primary-emphasis bg-white  border-dark"></i>
              <i class="bi bi-instagram ms-3  border p-2 rounded-circle text-primary-emphasis bg-white  border-dark"></i>
              <i class="bi bi-linkedin ms-3  border p-2 rounded-circle text-primary-emphasis bg-white  border-dark"></i></span></p>
      </div>
    </div>
    <div class="col-md-4">
      <img  src={image} alt="profile" class="img-fluid rounded-start"></img>
    </div>
  </div>
</div>

    </div>
  
    
  
      
  )
}
