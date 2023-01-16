import moment from "moment";
import React from "react";
import BirthdayItemWidget from "../widget/bithday.item.widget";

const Birthday = ({ user }) => {
  const tBday = user?.filter((b) =>
    b.DOB.indexOf(moment(Date.now()).format("MM-DD"))
  );
  const rBday = user?.filter((b) =>
    b.DOB.indexOf(moment(Date.now()).subtract(6, "days").format("MM-DD"))
  );

  const cBday = user?.filter((b) =>
    b.DOB.indexOf(moment(Date.now()).add(6, "days").format("MM-DD"))
  );
  return (
    <>
      <div className="widget widget-birthday">
        <div className="birthday-title d-flex justify-content-between align-items-center">
          <h3>Today Birthdays</h3>

          <>
            <span>{tBday ? <a href="#">See All</a> : ""}</span>
          </>
        </div>
        <h7>There are no birthdays today</h7>
        {tBday
          ? tBday.map((celebrant) => <BirthdayItemWidget user={celebrant} />)
          : ""}

        <div className="birthday-title d-flex justify-content-between align-items-center">
          <h3>Recent Birthdays</h3>
          {rBday ? (
            <>
              <span>
                <a href="#">See All</a>
              </span>
            </>
          ) : (
            <span>There are no recent birthdays listing</span>
          )}
        </div>
        {rBday
          ? rBday.map((celebrant) => <BirthdayItemWidget user={celebrant} />)
          : ""}

        <div className="birthday-title d-flex justify-content-between align-items-center">
          <h3>Coming Birthdays</h3>
          {cBday ? (
            <>
              <span>
                <a href="#">See All</a>
              </span>
            </>
          ) : (
            <span>There are no upcoming birthdays listing</span>
          )}
        </div>
        {cBday
          ? cBday.map((celebrant) => <BirthdayItemWidget user={celebrant} />)
          : ""}
      </div>
    </>
  );
};

export default Birthday;
