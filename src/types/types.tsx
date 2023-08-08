export interface User {
  avatar_url: string;
  login: string;
  bio: string;
  html_url: string;
}

export interface UserState {
  userControl: InitialState;
}
export interface InitialState {
  username: string;
  userInfo: User | null;
}

export interface UserSearchControlProps {
  username: string | null;
}

export interface ErrorResponse {
  data: {
    message: string;
  };
  status: number;
}
