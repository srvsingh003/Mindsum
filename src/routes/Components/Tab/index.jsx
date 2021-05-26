import React from "react";
import "./tab.scss";
import { Session, Homm, Message, Help, Setting, LogOut } from "../../../svgSprite";

export default function Tab({ icon, text, subText, iconClass = "" }) {
  return (
    <ul className="tab-bar">
      <li className="tab-menu">
        <div className="iconn">
          <Homm />
        </div>
      </li>
      <li className="tab-menu">
        <div className="iconn">
          <Session />
        </div>
      </li>
      <li className="tab-menu">
        <div className="iconn">
          <Message />
        </div>
      </li>
      <li className="tab-menu">
        <div className="iconn">
          <Help />
        </div>
      </li>
      <li className="tab-menu">
        <div className="iconn">
          <Setting />
        </div>
      </li>
      <li className="tab-menu">
        <div className="iconn">
          <LogOut />
        </div>
      </li>
    </ul>
  );
}
