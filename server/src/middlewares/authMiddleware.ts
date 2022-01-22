import passport from "passport";

export const authMiddleware = passport.authenticate("jwt", { session: false });
