import React from 'react';
import accountimg from "./Images/account.svg";
import fileimg from "./Images/files.svg";
import teamimg from "./Images/team.svg";
import billingimg from "./Images/billing.svg";
import groupimg from "./Images/groupimg.svg";
import "./Faq.css";

export default function Faq() {
  return (
    <div className='wrapper'>
      <div className="containers">
        <p className='heading'>FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <div className="wrappercont">
        <div className="infocontainer">
          <div className="infolines">
            Sometimes you need a quick answer to yourquestion. You can get it right away here.
          </div>
          <div className="infocards">
            <div className="card">
              <div className='card-img'>
                <img src={accountimg} alt="Accountimage" />
              </div>
              <div className="card-text">
                <p>Account</p>
              </div>
            </div>
            <div className="card">
              <div className='card-img'>
                <img src={fileimg} alt="Fileimage" />
              </div>
              <div className="card-text">
                <p>Files</p>
              </div>
            </div>
            <div className="card">
              <div className='card-img'>
                <img src={teamimg} alt="Teamimage" />
              </div>
              <div className="card-text">
                <p>Team</p>
              </div>
            </div>
            <div className="card">
              <div className='card-img'>
                <img src={billingimg} alt="Billingimage" />
              </div>
              <div className="card-text">
                <p>Billing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="imgcontainer">
          <img src={groupimg} alt='Groupimage' />
        </div>
      </div>
    </div>
  );
}