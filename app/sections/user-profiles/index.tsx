import React, { forwardRef, useState } from 'react';

const UserCard = () => {
  return (
    <div
      className="container-hero-desktop"
      data-v0-t="container-hero-desktop"
      style={{
        position: 'relative', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0px',
      }}
    >
      <a href="/collections/unity" style={{ width: '100%' }}>
        <img
          alt="Unity Collection"
          className="object-cover w-full"
          src="https://cdn.shopify.com/s/files/1/0654/5358/8719/files/3400X1326-Cover-WEB-4.avif?v=1727778974"
          style={{ width: '100%', height: '100%', display: 'flex' }} 
        />
      </a>
      <div
        style={{
          position: 'absolute',
          bottom: '20px', // Place near the bottom of the image
          width: '100%',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <a className="desktop-hero-section-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>
          Unity Collection
        </a>
        <br />
        <button
          className="hero-link-btn"
          style={{
            marginTop: '8px',
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '15px',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

const HoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="hero-link-btn"
      style={{
        padding: '10px 20px',
        backgroundColor: isHovered ? 'darkred' : 'red',
        color: 'white',
        fontSize: '15px',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Shop Now
    </button>
  );
};

interface UserProfilesProps extends HydrogenComponentProps {}

const UserProfiles = forwardRef<HTMLDivElement, UserProfilesProps>((props, ref) => {
  return (
    <div ref={ref} className="p-4">
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
