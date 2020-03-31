const JwtStrategy = require('passport-jwt').Strategy;
const JwtExtract = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const company = mongoose.model('/company');


const options = {
  jwtFromRequest: JwtExtract.fromAuthHeaderBearerToken(),
  secretOrKey: '123',
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const company = await company.findById(payload.companyID).select(companyID);
        if (company) {
          done(null, company);
        } else {
          done(null, false);
        }
      } catch (e) {
        console.log(e);
      }
    }),
  );
};
