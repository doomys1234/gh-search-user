import React from "react";
import { useSelector } from "react-redux";
import { getUserInfoSelector } from "../../redux/selectors/userSelector";
import { RootState } from "../../redux/store/store";
import "./UserInfoCard.scss";

const UserInfoCard: React.FC = () => {
  const userInfo = useSelector((state: RootState) =>
    getUserInfoSelector(state)
  );
  return (
    <div className="card-wrapper">
      <div className="user-card">
        <img
          className="avatar"
          src={userInfo?.avatar_url}
          alt={`${userInfo?.login}'s avatar`}
        />
        <h2 className="username">{userInfo?.login}</h2>
        <p className="bio">{userInfo?.bio}</p>
        <a className="profile-link"
          href={userInfo?.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default UserInfoCard;
