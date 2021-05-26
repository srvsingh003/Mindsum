import React from "react";
import "./recent.scss";

export default function RecentCard({ photoUrl, header, content }) {
  return (
    <div className="recent-cards">
      <h4>{header}</h4>
      <ul>
        {content &&
          content.map(({ photoUrl, text, subText }) => {
            return (
              <li>
                <div>
                  <span className="circular">
                    <img src={photoUrl} alt="No Found" />
                  </span>
                  <section>
                    <p className="txt">{text}</p>
                    <p className="sxt">{subText}</p>
                  </section>
                </div>
              </li>
            );
          })}
      </ul>

      <a href="">View All</a>
    </div>
  );
}
