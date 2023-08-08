import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUsername } from "../../redux/reducers/userSlice";
import "./UserSearchForm.scss";

const UserSearchForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (username.trim() !== "") {
      dispatch(saveUsername(username));
    }
    setUsername("");
  };

  return (
    <div className="user-search-form">
      <input
        className="user-search-form__input"
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="user-search-form__button"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default UserSearchForm;
