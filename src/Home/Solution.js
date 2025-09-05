import SpotLightCard from './SpotLightCard.js';
import './SpotlightCard.css';

function Solution() {
  return (
    <>
      <div className="container ">
        <div className="row mt-3 mb-5">
            <div className='text-center pt-5 border-top mb-3'>
          <h1 style={{ color: "white", fontWeight: "bold",textShadow:"initial" }}>Solutions we provide!</h1>
          
        </div>
          <div className="col-4">
            <SpotLightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center' }}>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Technology Transformation" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <h4>Technology Transformation</h4>
                <p style={{fontSize:"12px"}}>
                  We are equipped with cutting-edge technologies to empower businesses online. 
                  Our team of technical experts is skilled and experienced in utilizing these technologies 
                  to automate your business, thereby reducing human effort and enhancing your brand's performance.
                </p>
              </div>
            </SpotLightCard>
          </div>
          <div className="col-4"> <SpotLightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center' }}>
                <img 
                  src="https://images.unsplash.com/photo-1630659509436-7397fbda30e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Technology Transformation" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <h4>Product 
                    <br/>Development</h4>
                <p style={{fontSize:"12px"}}>
                 We provide end-to-end product development services from design to development and delivery. Got an idea? That's all we need to create a next-gen, winning product solution for your business.
                </p>
              </div>

            </SpotLightCard></div>
          <div className="col-4"> <SpotLightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center' }}>
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Technology Transformation" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <h4>Experience<br/> Design</h4>
                <p style={{fontSize:"12px"}}>
                 Your brand’s design is one of the primary representatives of your brand's personality. Our UI UX design solutions ensure your brand looks stunning, attractive, unique, and responsive to guarantee more users and engagement.
                </p>
              </div>
            </SpotLightCard></div>
        </div>
      </div>
    </>
  );
}

export default Solution;
