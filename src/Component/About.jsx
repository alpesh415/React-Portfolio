import React from 'react'
import image from "./image.png";

export default function About() {
  return (
    <div class=" text-primary-emphasis bg-white border-bottom border-dark" id="About">
      <h1 class="pt-5 text-center" ><em>About</em></h1>
      <h5 class="mt-3 text-center"><em>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis</em></h5>
      <h5 class="mt-1 text-center"><em>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</em></h5>


      <div class="card mb-3 w-75 mx-auto mt-5 border-0 bg-white" >
        <div class="row g-0">


        <div class="col-md-4">
           <img  src={image} alt="profile" class="img-fluid rounded-start"></img>
          </div>
          
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text text-primary-emphasis"><em>HELLO THERE</em></p>
              <h1 class="card-title fs-1 text-primary-emphasis"><em>Hi, I'm Harshit - a calm-minded</em></h1>
              <h1 class="card-title text-primary-emphasis"><em>creative developer crafting serene</em> </h1>
              <h1 class="card-title text-primary-emphasis"><em>digital journeys</em> </h1>
              <h5 class="card-text text-primary-emphasis mt-3"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus. Sed interdum, nunc non feugiat tempor, orci lorem luctus ligula, vitae rutrum nisl lorem non nulla.</em></h5>
              <h5 class="card-text text-primary-emphasis mt-3"><em>Integer posuere lacus in mi fringilla, eget luctus risus pulvinar. Curabitur a arcu a nisl tempus sagittis. Aenean varius, tortor sed porttitor dictum, augue eros viverra lectus, at efficitur magna lacus in risus.</em></h5>

              <button type="button" class="btn bg-white border border-dark text-primary-emphasis mt-5"><em>View My Work <i class="bi bi-arrow-up-right"></i></em></button>
              <button type="button" class="btn bg-white   border-bottom border-dark  text-primary-emphasis ms-3 mt-5"><em>Download My Resume <i class="bi bi-download"></i></em></button>

            </div>
          </div>
          
        </div>
      </div>

      <div class="d-flex p-5">
        <div class="card border-info mb-3 w-25 pb-4 bg-white">

          <div class="card-body">
            <p class="ms-2  fs-2 "><i class="bi bi-layout-text-window"></i></p>
            <h5 class="card-title">HTML/CSS</h5>
            <p class="card-text ">Vivamus sagittis lacus molestie placerat..</p>
          </div>
        </div>

        <div class="card border-info mb-3 w-25 pb-4 bg-white ms-3">

          <div class="card-body">
            <p class="ms-2  fs-2 "><i class="bi bi-code-slash"></i></p>
            <h5 class="card-title">React.JS</h5>
            <p class="card-text "> sagittis lacus molestie placerat..</p>
          </div>
        </div>

        <div class="card border-info mb-3 w-25 pb-4 bg-white ms-3">

          <div class="card-body">
            <p class="ms-2  fs-2 "><i class="bi bi-phone"></i></p>
            <h5 class="card-title">Javascript</h5>
            <p class="card-text ">Vivamus sagittis lacus molestie placerat..</p>
          </div>
        </div>

        <div class="card border-info mb-3 w-25 pb-4 bg-white ms-3">

          <div class="card-body">
            <p class="ms-2  fs-2 "><i class="bi bi-camera"></i></p>
            <h5 class="card-title">Node.JS</h5>
            <p class="card-text ">Vivamus sagittis lacus molestie placerat..</p>
          </div>
        </div>
      </div>


      <div class="d-flex ps-5 pe-5">
        <div class="card border border-info mb-1 w-25 pb-4 bg-white">

          <div class="card-body">
            <p><i class="bi bi-record-circle fs-5 text-info"></i> 2022</p>
            <h5 class="card-title">B.C.A</h5>
            <p class="card-text ">Quisque euismod turpis ut sapien luctus bibendum.</p>
          </div>
        </div>

        <div class="card border border-info mb-1 w-25 pb-4 bg-white ms-3" >

          <div class="card-body">
            <p><i class="bi bi-record-circle fs-5 text-info"></i> 2025</p>
            <h5 class="card-title">M.S.C in IT</h5>
            <p class="card-text ">Mauris non arcu non urna convallis vulputate.</p>
          </div>
        </div>
        <div class="card border border-info mb-1 w-25 pb-4 bg-white ms-3">

          <div class="card-body">
            <p><i class="bi bi-record-circle fs-5 text-info"></i> 2026</p>
            <h5 class="card-title">FreeLance Start</h5>
            <p class="card-text ">Nunc sed nibh et libero fermentum posuere.

            </p>
          </div>
        </div>
        <div class="card border border-info mb-1 w-25 pb-4 bg-white ms-3">

          <div class="card-body">
            <p><i class="bi bi-record-circle fs-5 text-info"></i> 2026-27</p>
            <h5 class="card-title">Joined Company</h5>
            <p class="card-text ">Quisque euismod turpis ut sapien luctus bibendum.</p>
          </div>
        </div>
      </div>
      <h3 class="mt-3 text-center"><em>"Building clean and meaningful experiences through</em></h3>
      <h3 class="mt-1 text-center"><em>thoughtful code and quiet design."</em></h3>

      <div class="text-center mt-5"><button type="button" class="btn btn-info"><i class="bi bi-magic"></i> Minimalisam</button>
        <button type="button" class="btn btn-info ms-4"><i class="bi bi-headphones"></i> Lo-fi Beast</button>
        <button type="button" class="btn btn-info ms-4"><i class="bi bi-geo-alt"></i> city walks</button>
        <button type="button" class="btn btn-info ms-4"><i class="bi bi-brush"></i> sketching</button></div>

      <div class="text-center mt-5 pt-5">
        <h1>Skills</h1>
         <h5 class="mt-4 text-center"><em>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis</em></h5>
      <h5 class="mt-1 text-center"><em>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</em></h5>
      </div>

      
      <div class="d-flex p-5">
        <div class="card border border-info  w-25  bg-white mb-5">

          <div class="card-body">
            
            <h5 class="card-title">HTML</h5>
            <p class="card-text ">Quisque euismod turpis ut sapien luctus bibendum.</p>
            <div class="text-end">90%</div>
                  <p class="progress rounded-pill bg-light">
            <p class="progress rounded-pill bg-info" style={{ width: "90%" }}></p></p>
          </div>
        </div>

         <div class="card border border-info  w-25  bg-white mb-5 ms-3">

          <div class="card-body">
            
            <h5 class="card-title">CSS</h5>
            <p class="card-text ">Quisque euismod turpis ut sapien luctus bibendum.</p>
            <div class="text-end">80%</div>
                  <p class="progress rounded-pill bg-light">
            <p class="progress rounded-pill bg-info" style={{ width: "80%" }}></p></p>
          </div>
        </div>
         <div class="card border border-info  w-25  bg-white mb-5 ms-3">

          <div class="card-body">
            
            <h5 class="card-title">BOOSTRAP</h5>
            <p class="card-text ">Quisque euismod turpis ut sapien luctus bibendum.</p>
            <div class="text-end">70%</div>
                  <p class="progress rounded-pill bg-light">
            <p class="progress rounded-pill bg-info" style={{ width: "70%" }}></p></p>
          </div>
        </div>
         <div class="card border border-info  w-25  bg-white mb-5 ms-3">

          <div class="card-body">
            
            <h5 class="card-title">MEDIAQUERY</h5>
            <p class="card-text ">Quisque euismod turpis ut sapien luctus bibendum.</p>
            <div class="text-end">64%</div>
                  <p class="progress rounded-pill bg-light">
            <p class="progress rounded-pill bg-info" style={{ width: "64%" }}></p></p>
          </div>
        </div>
      </div>



    </div>
  )
}
