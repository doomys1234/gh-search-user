import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetUserInfoQuery } from "../../redux/reducers/usersApi";
import { UserSearchControlProps } from "../../types/types";
import { saveUser } from "../../redux/reducers/userSlice";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { ErrorResponse } from "../../types/types";
import "react-toastify/dist/ReactToastify.css";

export const UserSearchControl: React.FC<UserSearchControlProps> = ({
  username,
}) => {
  const {
    data: user,
    error,
    isFetching,
    isSuccess,
    isError,
  } = useGetUserInfoQuery(username!, { refetchOnMountOrArgChange: true });
  const dispatch = useDispatch();
  const isEmpty = isSuccess && Object.keys(user).length <= 0;
  useEffect(() => {
    if (isSuccess&& !isEmpty) {
      dispatch(saveUser(user));
    }
    if (isError) {
      const { data } = error as ErrorResponse;
      notifyErrorHandler(data.message);
      dispatch(saveUser(null));
    }
  }, [isEmpty, user, isSuccess, isError, dispatch, error]);

  const notifyErrorHandler = (message: string) => {
    toast(message);
  };
  return (
    <div>
      {isFetching && <BeatLoader color="#36d7b7" />}
      {isSuccess && !isFetching && !isEmpty && <UserInfoCard />}
      {(isError || isEmpty) && (
        <>
          <NotFoundPage />
          <ToastContainer
            position={"top-right"}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={"dark"}
          />
        </>
      )}
    </div>
  );
};

export default UserSearchControl;
