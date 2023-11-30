import React from "react";
import "~/assets/css/Profile.css";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const history = useHistory();
  return (
    <>
      <Navbar></Navbar>
      <div className="profile-page">
        <div className="profile-container">
          <h1 className="profile-age-title">Edit Profile</h1>

          <div className="profile-container-info">
            <div className="profile-container-ava-email">
              <img
                onClick={() => history.push("/profile")}
                alt=""
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/017lok-ons-mas-dsk-02-0-1574179195.jpg"
                className="header__navbar-user-img"
              />
              <input className="profile-email" type="text" value="s@mail.com" />
            </div>
            <h2 className="profile-current-plan">
              Plans(Current Plan: premium)
            </h2>
            <p className="profile-renew-date">Renewal date: 9/9/2024</p>
            <ul>
              <li className="profile-list-item">
                <div className="profile-list-item-left">
                  <p>Netflix Standard</p>
                  <span className="resolution">1080p</span>
                </div>

                <button className="profile-list-item-subbtn">Subscribe</button>
              </li>
              <li className="profile-list-item">
                <div className="profile-list-item-left">
                  <p>Netflix Basic</p>
                  <span className="resolution">480p</span>
                </div>

                <button className="profile-list-item-subbtn">Subscribe</button>
              </li>
              <li className="profile-list-item">
                <div className="profile-list-item-left">
                  <p>Netflix</p>
                  <span className="resolution">4K+HDR</span>
                </div>

                <button className="profile-list-item-current-pack">
                  Current Package
                </button>
              </li>
            </ul>
            <button
              className="profile-signout-btn"
              onClick={() => {
                history.push("/");
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
