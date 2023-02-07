import React from 'react';
import img from '../assets/images/avatar_hat.jpeg';
const Profile = () => {
  const skills = [
    {
      name: 'Photoshop',
      percent: 90,
    },
    {
      name: 'Photography',
      percent: 80,
    },
    {
      name: 'Illustrator',
      percent: 75,
    },
    {
      name: 'Media',
      percent: 50,
    },
  ];

  const languages = [
    {
      name: 'English',
      percent: 100,
    },
    {
      name: 'Spanish',
      percent: 50,
    },
    {
      name: 'German',
      percent: 25,
    },
  ];

  return (
    <>
      <div className="w3-display-container">
        <img src={img} style={{ width: '100%' }} alt="Avatar" />
        <div className="w3-display-bottomleft w3-container w3-text-black">
          <h2>Jane Doe</h2>
        </div>
      </div>
      <div className="w3-container">
        <p>
          <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer
        </p>
        <p>
          <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK
        </p>
        <p>
          <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com
        </p>
        <p>
          <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534
        </p>
        <hr />

        <p className="w3-large">
          <b>
            <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills
          </b>
        </p>

        {skills.map((item) => {
          return (
            <>
              <p>{item.name}</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: `${item.percent}%` }}>
                  {item.percent}%
                </div>
              </div>
            </>
          );
        })}

        <br />

        <p className="w3-large w3-text-theme">
          <b>
            <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages
          </b>
        </p>

        {languages.map((item) => {
          return (
            <>
              <p>{item.name}</p>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: `${item.percent}%` }}></div>
              </div>
            </>
          );
        })}

        <br />
      </div>
    </>
  );
};

export default Profile;
