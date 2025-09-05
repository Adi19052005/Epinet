import BlurText from "./BlurText";


function Provide() {
    const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <>
   <div className="container">
      <div className="row justify-content-center mb-3  border-top">
        <div className="col-12 text-center mt-5 ">
          <h1 style={{ color: "#ffaa00", fontWeight: "bold" }}>
            What we do
          </h1>
          <p>WE TURN HEADS</p>
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-8 mb-5 border-bottom pb-5">
          <p className="mb-3" style={{ lineHeight: "1.7", fontSize: "16px" }}>
            <BlurText
  text="We are creators on a mission to help businesses achieve
their dream digitization goals. To ensure that we fulfil our
core purpose of assisting our clients in finding a bright
future, we are motivated by technology and innovation."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
           

          </p>
          <p><BlurText
  text="We provide expert development and design services in:"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/></p>
<h5 className="mt-3" style={{fontWeight:"bold",textShadow:"inherit" ,color:"#ffaa00"}}>
    <BlurText
  text="UI/UX Design"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/></h5>
<p className="mt-3"
>
    <BlurText
  text="We offer outstanding, user-centred UI/UX designs in order to
create value for your brand."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/></p>
<h5 className="mt-3" style={{fontWeight:"bold",textShadow:"inherit" ,color:"#ffaa00"}}><BlurText
  text="Application Development"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
</h5>
<p className="mt-3"
>
    <BlurText
  text="We offer cutting-edge commercial applications that keep
users engaged at all times."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/></p>
<h5 className="mt-3" style={{fontWeight:"bold",textShadow:"inherit" ,color:"#ffaa00"}}>
    <BlurText
  text="Mobility Technologies"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
</h5>
<p className="mt-3"
>
     <BlurText
  text="We offer a comprehensive set of services for defining, architecting,
implementing, and maintaining mobility solutions for your company"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/></p>
<h5 className="mt-3" style={{fontWeight:"bold",textShadow:"inherit" ,color:"#ffaa00"}}>
     <BlurText
  text="Database"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
</h5>
<p className="mt-3"
>
    <BlurText
  text="Your data storage, organization, and security needs will be met by our database services."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

</p>
        </div>
        

        <div className="col-2"></div>
      </div>
    </div>
        </>
  );
}

export default Provide;
