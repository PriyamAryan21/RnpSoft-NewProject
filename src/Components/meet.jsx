import "./meet.css";
import vector from "./Images/Vector.png"
function meet() {
  return (
    <div className="homepage">
      <main className="main-content">
        <div className="head">
          <h1 className="Fts">Meet the team members</h1>
        </div>
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus
            nisi, diam elementum <br />
            Amet felis nibh. Pulvinar elementum ornare pharetra leo tellus id.
          </p>
        </div>
        {/* <div className="card">
          <div className="card-body">
            <div className="pic">hi</div>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        <div className="boxes">
          <div className="box">
            <div className="info">
              <img src={vector}></img>
              <p>SATWIK SINGH</p>
              <h1>UI/UX Designer Intern at RnPSoft</h1>
            </div>
          </div>
          <div className="box">
            <div className="info">
              <img src={vector}></img>
              <p>SATWIK SINGH</p>
              <h1>UI/UX Designer Intern at RnPSoft</h1>
            </div>
          </div>
          <div className="box">
            <div className="info">
              <img src={vector}></img>
              <p>SATWIK SINGH</p>
              <h1>UI/UX Designer Intern at RnPSoft</h1>
            </div>
          </div>
          <div className="box">
            <div className="info">
              {" "}
              <img src={vector}></img>
              <p>SATWIK SINGH</p>
              <h1>UI/UX Designer Intern at RnPSoft</h1>
            </div>
          </div>
          <div className="box">
            <div className="info">
              <img src={vector}></img>
              <p>SATWIK SINGH</p>
              <h1>UI/UX Designer Intern at RnPSoft</h1>
            </div>
          </div>
          <div className="box">
            <div className="info">
              <img src={vector}></img>
              <p>SATWIK SINGH</p>
              <h1>UI/UX Designer Intern at RnPSoft</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default meet;
