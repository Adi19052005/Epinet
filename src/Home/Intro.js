import TextType from './TextType';

function Intro() {
  return (
    <div className="container">
      <div className="row justify-content-center mb-5  border-top">
        <div className="col-12 text-center mt-5 ">
          <h1 style={{ color: "#ffaa00", fontWeight: "bold" }}>
            About Epinet
          </h1>
          <p>DIGITAL SOLUTION PARTNER</p>
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-8">
          <p className="mb-5" style={{ lineHeight: "1.7", fontSize: "16px" }}>
            <TextType 
              text={[
                `We support efficient digital transformations to assist you in achieving your
company goals in a sophisticated and appealing manner. What matters most
in today's fast-paced world is an online presence that caters to clients round
the clock. We at Epinet help you build a wholesome online brand for your
business. We have cutting-edge technology to help companies to succeed
online. We aim to give you best-in-class digital solutions by utilising several channels
and tried-and-true tactics. We provide expert services in digital marketing,
short message service, website development, branding, software solutions,
mobile apps, managed services, and UI/UX designs for building a wholesome
online brand for your business.`
              ]}
              typingSpeed={7}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Intro;
