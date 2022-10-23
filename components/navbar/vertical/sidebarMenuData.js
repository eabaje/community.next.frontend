const sideBarMenuItems = (user) => [
  {
    title: "Timeline",
    path: `/timeline/?userId=${user?.UserId}`,
    icon: `fa fa-clock-four`,
  },
  {
    title: "Friends",
    path: `/friend/?userId=${user?.UserId}`,
    icon: `flaticon-friends`,
  },
  {
    title: "Groups",
    path: `/group/?userId=${user?.UserId}`,
    icon: "flaticon-team",
  },
  {
    title: "Spousal Links",
    path: `/relation/?userId=${user?.UserId}&type=spousal`,
    icon: "fa fa-female",
  },
  {
    title: "Paternal Links",
    path: `/relation/?userId=${user?.UserId}&type=paternal`,
    icon: "fa fa-male",
  },
  {
    title: "Maternal Links",
    path: `/relation/?userId=${user?.UserId}&type=maternal`,
    icon: "fa fa-female",
  },

  {
    title: "Classmates",
    path: `/classmate/?userId=${user?.UserId}`,
    icon: "fa fa-graduation-cap",
  },
  {
    title: "Colleagues",
    path: `/colleague/?userId=${user?.UserId}`,
    icon: "fa fa-building-user",
  },
  {
    title: "Neighbours",
    path: `/neighbour/?userId=${user?.UserId}`,
    icon: "fa fa-house-user",
  },
  {
    title: "Notifications",
    path: `/notification/?userId=${user?.UserId}`,
    icon: "flaticon-bell",
  },
  {
    title: "Chats",
    path: `/chat/?userId=${user?.UserId}`,
    icon: "flaticon-comment-1",
  },
  {
    title: "Videos",
    path: `/video/?userId=${user?.UserId}`,
    icon: "flaticon-live-chat",
  },
];

export { sideBarMenuItems };
