import SplitText from "./SplitText";

function LandingPage() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="container-fluid position-relative p-0 mb-5" style={{ minHeight: "70vh" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("/landingpage.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.7
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.2)",
          zIndex: 0
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
          <div className="col-12 col-md-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              <SplitText
                text="Welcome to Epinet Info Pvt.Ltd!"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h1>
            <p className="text-2xl font-semibold text-white">
              <SplitText
                text="Experience and Expertise to facilitate powerful digital solutions"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
