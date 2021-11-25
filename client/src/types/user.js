import { string, number, bool } from "prop-types";

const userType = {
  createdAt: string,
  email: string,
  id: number,
  isFetching: bool,
  photoUrl: string,
  updatedAt: string,
  username: string,
};

export default userType;
