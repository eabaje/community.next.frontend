const reducer = {};

reducer.authReducer = require("./auth.reducer.js").default;
reducer.advertReducer = require("./advert.reducer.js").default;
reducer.relationReducer = require("./relation.reducer.js").default;
reducer.relationshipReducer = require("./relationship.reducer.js").default;
//reducer.company = require('./company.reducer.js').default;
reducer.eventReducer = require("./event.reducer.js").default;
reducer.groupReducer = require("./group.reducer.js").default;
reducer.postReducer = require("./post.reducer.js").default;

reducer.orderReducer = require("./order.reducer.js").default;
reducer.paymentReducer = require("./payment.reducer.js").default;

reducer.profileReducer = require("./profile.reducer.js").default;
reducer.userReducer = require("./user.reducer.js").default;

export default reducer;
