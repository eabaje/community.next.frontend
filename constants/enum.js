export const TITLE = [
  { value: "chief", text: "Chief" },
  { value: "dr", text: "Dr" },
  { value: "clergy", text: "Clergy" },
  { value: "mr", text: "Mr" },
  { value: "mrs", text: "Mrs" },
];
export const RELATION_TYPE = [
  { value: "sp", text: "Spouse" },
  { value: "ch", text: "Child" },
  { value: "sib", text: "Sibling" },
  { value: "pa", text: "Parent" },
  { value: "pasib", text: "Parent Sibling" },
  { value: "gp", text: "Grand Parent" },
  { value: "ggp", text: "Great Grand Parent" },
];
export const RELATION_TYPE_2 = (dt) => [
  dt?.filter((m) => m.Level === "-2").length > 0 && (
    <>
      <option key={"-2,child"} value={"-2,child"}>
        {"Grand Child"}
      </option>
    </>
  ),
  dt?.filter((m) => m.Level === "-1").length > 0 && (
    <>
      <option key={"-1,child"} value={"-1,child"}>
        {"Child"}
      </option>
    </>
  ),
  dt?.filter((m) => m.Level === "0").length > 0 && (
    <>
      <option key={"0,child"} value={"0,child"}>
        {"Reference Node(Me)"}
      </option>
    </>
  ),

  dt?.filter((m) => m.Level === "1").length > 0 && (
    <>
      <option key={"0,child"} value={"0,parent"}>
        {"My Siblings"}
      </option>
      <option key={"1,parent"} value={"1,parent"}>
        {"Parent"}
      </option>
    </>
  ),
  dt?.filter((m) => m.Level === "2").length > 0 && (
    <>
      <option key={"2,parent"} value={"2,parent"}>
        {"Grand Parent"}
      </option>
    </>
  ),
  dt?.filter((m) => m.Level === "3").length > 0 && (
    <>
      <option key={"3,parent"} value={"3,parent"}>
        {"Great Grand Parent"}
      </option>
    </>
  ),
  // { value: "1,child", text: "Cousin" },
  // { value: "1,parent", text: "Parent" },
  // { value: "1,sibling", text: "Parent's Sibling" },
  //  { value: "2,parent", text: "Grand Parent" },
  // { value: "2,parent", text: "Grand Mother" },
  // { value: "2,sibling", text: "Grand Father's Sibling" },
  // { value: "2,sibling", text: "Grand Mother's Sibling" },
  // { value: "3,parent", text: "Great Grand Parent" },
  //  { value: "3,parent", text: "Great Grand Mother" },
  //  { value: "3,sibling", text: "Great Grand Father's Sibling" },
  // { value: "3,sibling", text: "Great Grand Mother's Sibling" },
];

export const RELATION_TYPE_AS = [
  { value: "child", text: "Child" },
  { value: "spouse", text: "Spouse" },
  { value: "parent", text: "Parent" },
];

export const RELATION_TYPE_LINK_PATERNAL = (userId) => [
  {
    value: `/profile/?userId=${userId}`,
    text: "Create New Relation",
  },
  {
    value: `/relation-all/?userId=${userId}&level=0&type=partner&gender=3`,
    text: "Wife",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=children`,
    text: "Cousin",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=parent`,
    text: "Parent",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=sibling&gender=2`,
    text: "Uncle",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=sibling&gender=3`,
    text: "Aunty",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=parent&gender=2`,
    text: "Grand Father",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=parent&gender=3`,
    text: "Grand Mother",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=sibling`,
    text: "Grand Father's Sibling",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=sibling&gender=3`,
    text: "Grand Mother's Sibling",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=parent&gender=2`,
    text: "Great Grand Father",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=parent&gender=3`,
    text: "Great Grand Mother",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=sibling`,
    text: "Great Grand Father's Sibling",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=sibling`,
    text: "Great Grand Mother's Sibling",
  },
];

export const SCHOOL_TYPE_LINK = (userId) => [
  {
    value: `/colleague-all/?userId=${userId}&level=0&type=partner&gender=3`,
    text: "Wife",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=children`,
    text: "Cousin",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=parent`,
    text: "Parent",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=sibling&gender=2`,
    text: "Uncle",
  },
  {
    value: `/relation-all/?userId=${userId}&level=1&type=sibling&gender=3`,
    text: "Aunty",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=parent&gender=2`,
    text: "Grand Father",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=parent&gender=3`,
    text: "Grand Mother",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=sibling`,
    text: "Grand Father's Sibling",
  },
  {
    value: `/relation-all/?userId=${userId}&level=2&type=sibling&gender=3`,
    text: "Grand Mother's Sibling",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=parent&gender=2`,
    text: "Great Grand Father",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=parent&gender=3`,
    text: "Great Grand Mother",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=sibling`,
    text: "Great Grand Father's Sibling",
  },
  {
    value: `/relation-all/?userId=${userId}&level=3&type=sibling`,
    text: "Great Grand Mother's Sibling",
  },
];
export const RELATION_TYPE_3 = [
  { value: "-1,child", text: "Child" },
  { value: "-2,child", text: "Grand Child" },
  { value: "-3,child", text: "Great Grand Child" },
];

export const PAYMENT_METHOD = [
  { value: "Cash", text: "Cash" },
  { value: "CreditCard", text: "Credit Card" },
  { value: "DebitCard", text: "Debit Card" },
  { value: "Paypal", text: "Paypal" },
  { value: "Stripe", text: "Stripe" },
  { value: "PayStack", text: "PayStack" },
];

export const ORDER_STATUS = [
  { value: "OrderMade", text: "Order Made" },
  { value: "Processed", text: "Processed" },
  { value: "Delivered", text: "Delivered" },
];

export const ROLES = [
  { value: "admin", text: "Administrator" },
  { value: "auditor", text: "Auditor" },
  { value: "user", text: "user" },
];
