const menuItemsPublic = (user) => [
  {
    title: "Timeline",
    path: `/timeline/?userId=${user?.UserId}`,
    icon: `fa fa-clock-four`,
  },
  {
    title: "Friends",
    path: `/friend/?userId=${user?.UserId}`,
    icon: `fa fa-users-gear`,
  },
  {
    title: "Groups",
    path: `/group/?userId=${user?.UserId}`,
    icon: "fa fa-people-group",
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
    icon: "fa fa-message",
  },
  {
    title: "Chats",
    path: `/chat/?userId=${user?.UserId}`,
    icon: "fa fa-message",
  },
  {
    title: "Videos",
    path: `/video/?userId=${user?.UserId}`,
    icon: "fa fa-video",
  },
];

export { menuItemsPublic };
