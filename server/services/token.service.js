class TokenService {
  constructor(OAUTH_TOKEN, expires_in) {
    this.OAUTH_TOKEN = OAUTH_TOKEN;
    this.expires_in = this.updateTime(expires_in);
  }

  updateValue(OAUTH_TOKEN, expires_in) {
    this.OAUTH_TOKEN = OAUTH_TOKEN;
    this.expires_in = this.updateTime(expires_in);
  }

  tokenIsValid() {
    if (!this.OAUTH_TOKEN) return false;

    const timeIsLessThanCurrTime = Date.now() < this.expires_in;
    console.log("timeIsLessThanCurrTime >> ", timeIsLessThanCurrTime); // TODO REMOVE
    return timeIsLessThanCurrTime;
  }

  updateTime(expires_in) {
    const expires_in_ms = (expires_in - 2) * 1000;
    return Date.now() + expires_in_ms;
  }
}

module.exports = TokenService;
