import React, { forwardRef } from 'react';

const UserCard = () => {
  return (
<div
  className="container-hero-desktop"
  data-v0-t="container-hero-desktop"
    style={{
      position: 'absolute',
      left: '75%',
      top: '62.5%',
      transform: 'translate(-50%, -50%)',
      width: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '40px',
      padding: '0px',
      backgroundColor: 'transparent',
      borderBottom: '1px solid grey',
      borderRadius: '0px',
      textDecoration: 'none',
      fontSize: '15px',
      color: 'green',
      fontWeight: '500',
      cursor: 'pointer',
    }}
    >
  <a className="desktop-hero-section-title">
    <span> Unity Collection</span>
  </a>
  <a href="/collections/unity">
    <img
      alt="Profile picture"
      className="object-cover w-full"
      src="https://cdn.shopify.com/s/files/1/0654/5358/8719/files/3400X1326-Cover-WEB-4.avif?v=1727778974"
    />
  </a>
  <button
    className="hero-link-btn"
    href="/collections/unity"
    style={{
      position: 'absolute',
      left: '75%',
      top: '62.5%',
      transform: 'translate(-50%, -50%)',
      width: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '40px',
      padding: '0px',
      backgroundColor: 'transparent',
      borderBottom: '1px solid grey',
      borderRadius: '0px',
      textDecoration: 'none',
      fontSize: '15px',
      color: 'red',
      fontWeight: '500',
      cursor: 'pointer',
    }}
  >
    Shop Now
  </button>
</div>

import React, { useState } from 'react';

const HoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="hero-link-btn"
      style={{
        position: 'absolute',
        left: '75%',
        top: '62.5%',
        transform: 'translate(-50%, -50%)',
        width: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '40px',
        padding: '0px',
        backgroundColor: 'transparent',
        borderBottom: '1px solid grey',
        borderRadius: '0px',
        textDecoration: 'none',
        fontSize: '15px',
        color: isHovered ? 'darkred' : 'red', // Change color on hover
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'color 0.2s ease', // Smooth transition for color change
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Shop Now
    </button>
  );
};

export default HoverButton;



interface UserProfilesProps extends HydrogenComponentProps {}

const UserProfiles = forwardRef<HTMLDivElement, UserProfilesProps>((props, ref) => {
  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <UserCard />
    </div>
  );
});

UserProfiles.displayName = 'UserProfiles';

export default UserProfiles;

export const schema: HydrogenComponentSchema = {
  title: 'User Profiles',
  type: 'user-profiles',
  inspector: [],
};
