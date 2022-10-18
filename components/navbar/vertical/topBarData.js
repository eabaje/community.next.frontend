const topMenuItemsPublic = (user) => [
  {
    title: "Timeline",
    path: `/timeline/?userId=${user?.UserId}`,
    icon: `fa fa-clock-four`,
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
];

export { topMenuItemsPublic };
