const topMenuItemsPublic = (user) => [
  {
    title: "Timeline",
    path: `/home/?userId=${user?.UserId}`,
    icon: `fa fa-clock-four`,
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
    title: "Friends",
    path: `/friend/?userId=${user?.UserId}`,
    icon: "fa fa-users-gear",
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
];

export { topMenuItemsPublic };
