const initialstate = {};

initialstate.authInitial = require("./auth.state.js").default;
initialstate.groupInitial = require("./group.state.js").default;
//initialstate.companyInitial = require('./company.state.js').default;
initialstate.friendInitial = require("./friend.state.js").default;
initialstate.eventInitial = require("./event.state.js").default;
initialstate.groupInitial = require("./group.state.js").default;
initialstate.postInitial = require("./post.state.js").default;
initialstate.orderInitial = require("./order.state.js").default;
initialstate.paymentInitial = require("./payment.state.js").default;
initialstate.relationshipInitial = require("./relationship.state.js").default;
initialstate.relationInitial = require("./relation.state.js").default;
initialstate.userInitial = require("./user.state.js").default;

export default initialstate;
