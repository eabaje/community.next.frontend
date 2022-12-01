import React from "react";
import UserWidget from "./user.widget";
import Dropdown from 'react-bootstrap/Dropdown'

const RelationWidget = ({ users, title }) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <aside className="widget-area">
          <div className="moreSpace">
            <div className="widget widget-page-you-like">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="widget-title">{title}</h3>
                <span className="d-flex justify-content-between align-items-center">
                  <a href="#">See All</a> 
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">See All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cousin</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Father</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                </span>
              </div>
              {users.map((user, index) => (
                <UserWidget user={user} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
export default RelationWidget;
