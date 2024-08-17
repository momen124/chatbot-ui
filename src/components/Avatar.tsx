import React from 'react';

type AvatarProps = {
  imageUrl: string;
  altText: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
  return (
    <div className="avatar w-10 h-10 rounded-full overflow-hidden mr-2">
      <img src={imageUrl} alt={altText} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
