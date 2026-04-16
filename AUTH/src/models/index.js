import User from "./user.model.js";
import Session from "./session.model.js";

//  Define relationships here
User.hasMany(Session, { foreignKey: "userId" });
Session.belongsTo(User, { foreignKey: "userId" });

// export models
export { User, Session };