const TokenService = require("../services/token.service");
const ZohoService = require("../services/zoho.service");

const tokenService = new TokenService("", Date.now());
const zohoService = new ZohoService(process.env.ZOHO_BASE_URL_OAUTH_V2, "", "");

const validateToken = async (_req, res, next) => {
  try {
    const isTokenValid = tokenService.tokenIsValid();

    if (isTokenValid) return next();

    const data = {
      refresh_token: process.env.REFRESH_TOKEN,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "refresh_token",
    };

    await zohoService
      .generateAccessTokenFromRefreshTokenAsync(data)
      .then(({data}) => {
        if(data) 
            tokenService.updateValue(data.access_token, data.expires_in);
        next();
      })
      .catch((err) => {
        return res.status(500).send({ msg: err.message });
      });

    
  } catch {
    console.log(err);
    return res.status(500).send({ msg: err.message });
  }
};

module.exports = { validateToken, tokenService };
