import type { userType, usersType } from "./types";

export const containUser = (user: userType, users: usersType) => {
  if (users.length === 0) return false;
  return users.some((elem) => elem.userId === user.userId);
};
