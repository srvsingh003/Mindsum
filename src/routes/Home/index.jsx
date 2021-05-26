//import src from "*.avif";
import React, { Fragment } from "react";
import {
  MLogo,
  IBell,
  IUser,
  Button,
  Doctor,
  Appointmnet,
  MessageBox,
  Profile,
} from "../../svgSprite";
import Appointment from "../../svgSprite/Appointment";
import HealthRecord from "../../svgSprite/HealthRecord";
import Week from "../../svgSprite/Week";
import Card from "../Components/Card";
import FloatCard from "../Components/FloatCard";
import RecentCard from "../Components/RecentCard";
import RecentCardN from "../Components/RecentCardN";
import Tab from "../Components/Tab";
// const logopink = require("/assets/logopink.png");
import icon1 from "./../../assets/logoIc.png";
import icon2 from "./../../assets/logoWhite.png";

import "./home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="icon-main">
          <MLogo />
        </div>
        <div className="searchBar">
          <input
            className="search-bar"
            type="text"
            id="serch"
            placeholder="search by keywords"
          ></input>
          <div className="icon-box">
            <span className="icon">
              <IBell />
            </span>
            <span className="icon">
              <IUser />
            </span>
          </div>
        </div>
      </header>
      <h2>Welcome back olivia</h2>
      <div className="main-container">
        {/* TAB BAR */}
        <Tab />
        <div className="content-box">
          <section className="calander">
            <h3 className="sessions"> My Upcoming session</h3>
          </section>
          <div className="dateElement">
            <ul>
              <li className="dateItem">
                <Card
                  text="15 May"
                  icon={<Button />}
                  iconClass=""
                  subText="7:00AM "
                  duration="45 min Session"
                />
              </li>
              <li className="dateItem">
                <Card
                  text="2 June"
                  icon={<Button />}
                  iconClass="brown"
                  subText="3:00 PM"
                  duration="45 min Session"
                />
              </li>
              <li className="dateItem">
                <Card
                  text="15 May"
                  icon={<Button />}
                  iconClass="green"
                  subText="9:00AM "
                  duration="30 min Session"
                />
              </li>
              <li className="dateItem">
                <Card
                  text="15 May"
                  icon={<Button />}
                  iconClass="red"
                  subText="9:00AM "
                  duration="30 min Session"
                />
              </li>
            </ul>
            <div className="recent-card">
              {
                <RecentCard
                  header="Recommended Videos and Article"
                  content={[
                    {
                      text: "5 tips to overcome the anxiety",
                      subText: "National care for Mental Health",
                      photoUrl: icon1,
                    },
                    {
                      text: "Causes of anxiety & 10 steps to..",
                      subText: "National Anxiety Center",
                      photoUrl: icon2,
                    },
                  ]}
                ></RecentCard>
              }
              {
                <RecentCardN
                  header="Upcomig Events and Webinars"
                  content={[
                    {
                      web: "webinar",
                      dateTime: "12 June 2021| 11:00 AM",
                      text: "Managing anxiety during the lock-down",
                      //subText: "12 june 2021",
                      duration: "Mindsum | 50 Mins",
                    },
                    {
                      web: "Event",
                      text: "Orchestra-virtual performance ",

                      //subText: "7 june 2021",
                      dateTime: "7 July 2021| 11:00 AM",
                      duration: "MANCHESTER OPERA HOUSE  | 50 Mins",
                    },
                  ]}
                ></RecentCardN>
              }
            </div>
          </div>

          <section className="event">
            <FloatCard icon={<Appointmnet />} subText=" Book Appointment" />
            <FloatCard icon={<HealthRecord />} subText="Health Record" />
            <FloatCard icon={<Doctor />} subText=" Your Doctor" />
            <FloatCard
              icon={<MessageBox />}
              subText="You Have Five New Messages"
            />
            <FloatCard icon={<Profile />} subText="Complete Your Profile" />
            <FloatCard icon={<Week />} subText="Your Read For This Week" />
          </section>
        </div>
      </div>

      <footer className="footer-pin">
        <li>About</li>
        <li>Terms</li>
        <li>Privacy Policy</li>
        <li>Contact </li>
      </footer>
    </div>
  );
}
