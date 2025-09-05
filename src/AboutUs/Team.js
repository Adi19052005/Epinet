import ProfileCard from "./ProfileCard";

function Team() {
  const teamMembers = [
    {
      name: "Javi A. Torres",
      title: "Software Engineer",
      handle: "javicodes",
      status: "Online",
      contactText: "Contact Us",
      avatarUrl: "https://via.placeholder.com/150", // sample image
    },
    {
      name: "Alex Morgan",
      title: "Project Manager",
      handle: "alexpm",
      status: "Offline",
      contactText: "Contact Us",
      avatarUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Sophia Lee",
      title: "UI/UX Designer",
      handle: "sophiaui",
      status: "Online",
      contactText: "Contact Us",
      avatarUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Daniel Kim",
      title: "Full Stack Developer",
      handle: "danieldev",
      status: "Online",
      contactText: "Contact Us",
      avatarUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Carter",
      title: "QA Engineer",
      handle: "emilyqa",
      status: "Offline",
      contactText: "Contact Us",
      avatarUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Brown",
      title: "DevOps Engineer",
      handle: "mikeops",
      status: "Online",
      contactText: "Contact Us",
      avatarUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container" style={{ backgroundColor: "white" }}>
        <div className="row justify-content-center mb-3 border-top">
          <div className="col-12 text-center mt-5">
            <h1 style={{ color: "#ffaa00", fontWeight: "bold", textShadow: "inherit" }}>
              TEAM
            </h1>
            <p style={{ color: "black" }}>
              Our portfolio represents more than 110 projects successfully
              managed by our team. Handling projects valued over 500,000
              dollars for 30+ clients, we provide digital solutions coupled
              with innovation and vision.
            </p>
          </div>
        </div>

        {/* Dynamically render team members */}
        <div className="row mt-3">
          {teamMembers.map((member, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <ProfileCard
                {...member}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log(`${member.name} Contact clicked`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
