export default {
  isLoggedIn: false,
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  // token:
  //   typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("token"))
  //     : {},

  error: null,
  loading: false,
  data: null,
};
