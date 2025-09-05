import TiltedCard from './TiltedCard';
  
function Hero() {
  return (
    <>
   <div className="container">
    <div className='text-center pt-5 border-top mt-5 mb-5'>
        <h1 style={{ color: "#ffaa00", fontWeight: "bold", textShadow: "initial" }}>Services we provide!</h1>
        <p className=""> at Epinet Info Pvt.Ltd</p>
      </div>
    <div className="row mb-5">


<div className="col-3">
  <TiltedCard
    imageSrc="https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Software Solutions"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Software Solutions</h5>
          <p className="tilted-card-text">
            We develop powerful enterprise applications and software solutions
            to enhance your business operations and help you improve your
            overall business efficiency.
          </p>
        </div>
      </div>
    }
  />
</div>

     <div className="col-3">
  <TiltedCard
imageSrc={"https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Mobile Apps"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Mobile Apps</h5>
          <p className="tilted-card-text">
            Around 50 percent of the internet traffic comes from mobile, and our mobile app development solutions enable you to reach out to your mobile audience in the best way possible.

          </p>
        </div>
      </div>
    }
  />
</div>
<div className="col-3">
  <TiltedCard
    imageSrc="https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Web Development"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Website Development
</h5>
          <p className="tilted-card-text">
Your website is the hub of your online presence. We build high-performance, visually stunning sites with cutting-edge technologies to give your brand a strong competitive edge.


          </p>
        </div>
      </div>
    }
  />
</div>
<div className="col-3">
  <TiltedCard
    imageSrc="https://images.unsplash.com/photo-1649877508777-1554357604eb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Emerging"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Emerging Technologies
</h5>
          <p className="tilted-card-text">
           Times have changed—businesses now run on technology. From blockchain to automation, we offer a wide range of emerging tech services to boost your efficiency and productivity.

          </p>
        </div>
      </div>
    }
  />
</div>
    </div>
     <div className="row mb-5 border-bottom ">
     <div className="col-3">
  <TiltedCard
imageSrc={"https://images.unsplash.com/photo-1582046989896-db5fc3a2d858?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}    altText="Kendrick Lamar - GNX Album Cover"
    captionText="SMS"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Short message service
</h5>
          <p className="tilted-card-text">
Our platform makes personalization, segmentation, and automation easy—helping creators, small businesses, and entrepreneurs run powerful SMS marketing campaigns without technical skills.

          </p>
        </div>
      </div>
    }
  />
</div>
<div className="col-3">
  <TiltedCard
imageSrc={"https://images.unsplash.com/photo-1619243142206-381c5aeda31c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Managed Services"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Managed Services
</h5>
          <p className="tilted-card-text">
            Running a business can be challenging, and a little expert help never hurts. Epinet provides a suite of managed services to keep your business up and running, so you can focus on core tasks and operations.


          </p>
        </div>
      </div>
    }
  />
</div>
<div className="col-3">
  <TiltedCard
imageSrc={"https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Branding"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Branding</h5>
          <p className="tilted-card-text">
            Powerful branding is essential for your business to establish a unique presence in the market. We cover a comprehensive range of branding services to help your business stand out of the rest and engage better with your prospects.


          </p>
        </div>
      </div>
    }
  />
</div>
<div className="col-3">
  <TiltedCard
imageSrc={"https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}    altText="Kendrick Lamar - GNX Album Cover"
    captionText="Digital Marketing
"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <div className="tilted-card-overlay">
        <div className="tilted-card-overlay-bg"></div>
        <div className="tilted-card-content">
          <h5 className="tilted-card-title ">Digital Marketing
</h5>
          <p className="tilted-card-text">
           We use innovative digital marketing strategies to promote your brand online. We prioritize identifying and analyzing your target audience, along with the best ways to engage and acquire them.


          </p>
        </div>
      </div>
    }
  />
</div>
    </div>
   </div>
        </>
  );
}

export default Hero;
