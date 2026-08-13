// import React from "react";
// import "../Assets/Style/About.css";
// import profile from "../Assets/ALPESH.jpeg";

// export default function About() {
//   return (
//     <section className="about" id="about">
//       <div className="container">
//         <div className="row align-items-center">

//           {/* Left Image */}
//           <div className="col-lg-5 text-center">
//             <img src={profile} alt="Profile" className="about-img" />
//           </div>

//           {/* Right Content */}
//           <div className="col-lg-7">

//             <h5>About Me</h5>

//             <h2>
//               Passionate <span>React Developer</span>
//             </h2>

//             <p>
//               Hello! I'm <strong>Alpesh khant</strong>, a Frontend React
//               Developer who enjoys creating clean, responsive, and
//               user-friendly websites. I focus on building modern interfaces
//               using React.js, JavaScript, Bootstrap, HTML, and CSS.
//             </p>

//             <p>
//               I enjoy learning new technologies, solving real-world problems,
//               and creating projects that provide a great user experience. My
//               goal is to become a skilled Full Stack Developer and contribute
//               to meaningful products.
//             </p>

//             <div className="about-info">

//               <div>
//                 <h6>Name</h6>
//                 <span>Alpesh Khnat</span>
//               </div>

//               <div>
//                 <h6>Email</h6>
//                 <span>khantalpesh756@gmail.com</span>
//               </div>

//               <div>
//                 <h6>Location</h6>
//                 <span>Ahmedabad, Gujarat</span>
//               </div>

//               <div>
//                 <h6>Experience</h6>
//                 <span>React Projects</span>
//               </div>

//             </div>

         
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }










import React from "react";
import "../Assets/Style/About.css";
import profile from "../Assets/ALPESH.jpeg";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        {/* Section Title */}
        <div className="about-title text-center">
          <h5>About Me</h5>
          <h2>
            Know More <span>About Me</span>
          </h2>
        </div>


        <div className="row align-items-center mt-5">


          {/* Image Section */}
          <div className="col-lg-4 col-md-12 text-center">

            <div className="profile-card">

              <img 
                src={profile} 
                alt="Alpesh Profile" 
                className="about-img"
              />

              <h3>Alpesh Khant</h3>

              <p>
                Frontend React Developer
              </p>

            </div>

          </div>



          {/* Content Section */}
          <div className="col-lg-8 col-md-12">


            <h2 className="about-heading">
              Passionate <span>React Developer</span>
            </h2>


            <p>
              Hello! I'm <strong>Alpesh Khant</strong>, a Frontend React
              Developer who loves creating modern, responsive and
              user-friendly web applications.
            </p>


            <p>
              I work with React.js, JavaScript, Bootstrap, HTML and CSS.
              I enjoy solving problems, learning new technologies and
              building projects with great user experience.
            </p>



            {/* Information Cards */}

            <div className="about-info">


              <div className="info-box">
                <h6>Name</h6>
                <p>Alpesh Khant</p>
              </div>


              <div className="info-box">
                <h6>Email</h6>
                <p>
                  khantalpesh756@gmail.com
                </p>
              </div>


              <div className="info-box">
                <h6>Location</h6>
                <p>
                  Ahmedabad, Gujarat
                </p>
              </div>


              <div className="info-box">
                <h6>Skills</h6>
                <p>
                  React JS Developer
                </p>
              </div>


            </div>



            <button className="about-btn">
              Download CV
            </button>


          </div>


        </div>

      </div>

    </section>
  );
}