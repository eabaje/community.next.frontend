const menuItemsPublic = (user) => [
  {
    title: "Timeline",
    path: `/home/?userId=${user?.UserId}`,
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
    title: "Spousal Relations",
    path: `/relation/?userId=${user?.UserId}&type=spousal`,
    icon: "fa fa-female",
  },
  {
    title: "Paternal Relations",
    path: `/relation/?userId=${user?.UserId}&type=paternal`,
    icon: "fa fa-male",
  },
  {
    title: "Maternal Relations",
    path: `/relation/?userId=${user?.UserId}&type=maternal`,
    icon: "fa fa-female",
  },

  {
    title: "Relationship Check",
    path: `/relation-check/?userId=${user?.UserId}`,
    icon: "fa fa-female",
  },

  {
    title: "Schoolmates",
    path: `/classmate/?userId=${user?.UserId}`,
    icon: "fa fa-graduation-cap",
  },
  {
    title: "Workmates",
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
  {
    title: "Event",
    path: `/event/?userId=${user?.UserId}`,
    icon: "fa fa-gift",
  },
  {
    title: "Weather",
    path: `/weather/?userId=${user?.UserId}`,
    icon: "fa fa-cloud-rain",
  },
];

export { menuItemsPublic };
