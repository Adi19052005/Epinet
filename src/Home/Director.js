import AnimatedContent from './AnimatedContent';

function Director() {
  return (
    <div className='w-100' style={{ backgroundColor: "white", color: "black" }}>
      <div className='text-center pt-5 border-top'>
        <h1 style={{ color: "#ffaa00", fontWeight: "bold", textShadow: "initial" }}>Director</h1>
        <p className="text-muted">Epinet Info Pvt.Ltd</p>
      </div>

      <div className='container py-5'>
        <div className='row'>

          {/* Image from Left */}
          <div className="col-12 col-md-5 d-flex justify-content-start mb-4 mb-md-0">
            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={false} // slide from left
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.2}
            >
              <div className="text-left">
                <img 
                  src="/lokeshsir.png" 
                  alt="Lokesh Pawar" 
                  style={{ 
                    borderRadius: "100%", 
                    height: "400px", 
                    width: "400px", 
                    objectFit: "cover" 
                  }} 
                />
                <h4 className="mt-4 mb-1">Lokesh Pawar</h4>
                <h6>Founder/Director Epinet Info</h6>
              </div>
            </AnimatedContent>
          </div>

          {/* Text from Right */}
          <div className='col-12 col-md-7 d-flex justify-content-end'>
            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={true} // slide from right
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0}
              animateOpacity
              scale={1.05}
              threshold={0.2}
              delay={0.4}
            >
              <div style={{ maxWidth: "600px", textAlign: "right" }}>
                <p style={{ fontSize: "16px" }}>
                  Lokesh Pawar is an innovative leader and tech visionary, driving Epinet Info towards creating cutting-edge digital solutions. With years of experience in software development and business strategy, he has been instrumental in shaping the company’s mission and vision.
                </p>
                <p style={{ fontSize: "16px" }}>
                  Under his guidance, Epinet Info has successfully delivered numerous projects, combining technical expertise with creative problem-solving to serve clients effectively. Lokesh thrives at the intersection of technology, leadership, and entrepreneurship.
                </p>
                <p style={{ fontSize: "16px" }}>
                  He is also a mentor and community advocate, always encouraging young talent to innovate, learn, and make an impact in the tech industry.
                </p>
                <p>
                  Connect on <a href="/" style={{ textDecoration: "none" }}>Instagram</a> / <a href="https://www.linkedin.com/in/lokesh-pawar-a01745b4/?originalSubdomain=in" style={{ textDecoration: "none" }}>LinkedIn</a>
                </p>
              </div>
            </AnimatedContent>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Director;
