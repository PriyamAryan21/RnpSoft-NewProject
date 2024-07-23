import React from "react";
import ques from "./Images/ques.svg"; 
import "./popular.css";

const cardContents = [
  { title: "What is Deupload?", description: "Zoho WorkDrive is a secure online file storage and collaboration platform for modern teams, small businesses, and large enterprises." },
  { title: "What is payment method accept?", description: "We accept payments via Visa, MasterCard, Discover, American Express, and PayPal. You can also make payments through bank transfer or check transfer." },
  { title: "Can I buy additional storage?", description: "You can select the number of units you need for the required storage add-on. For example, if you need 50 GB, you can choose the 10 GB add-on." },
  { title: "What is a Deupload for teams user?", description: "A user is any person on your team with their own unique email address. Each team member should have his or her own user license." },
  { title: "How much space does my team get?", description: "Dropbox provides three plans to fit your team’s needs. The Standard plan gives your team 5,000 GB of shared storage. For teams needing more space." },
  { title: "Do you have any discounts for nonprofits?", description: "Yes! Please contact our sales team for more information. To provide the discount, a sales rep will need a copy of your 501(c)3." }
];

export default function Popularques() {
  return (
    <div className="wrapper1">
      <div className="container1">
        <p className="popularp1">POPULAR QUESTIONS</p>
        <div className="cards-container1">
          {cardContents.map((content, index) => (
            <div key={index} className="card1">
              <div className="image-container1">
                <img src={ques} alt="Question1" />
              </div>
              <div className="text-container1">
                <p className="title1">{content.title}</p>
                <p className="description1">{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}