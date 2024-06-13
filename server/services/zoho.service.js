const axiosFactory = require("./axios.service");

class ZohoService {
  constructor(baseURL, authToken, organizationId) {
    this.baseURL = baseURL;
    this.authToken = authToken;
    this.organizationId = organizationId;
    this.axios = axiosFactory(baseURL, {
      Authorization: `Zoho-oauthtoken ${authToken}`,
      "X-com-zoho-subscriptions-organizationid": organizationId,
    });
  }

  async getCustomersAsync() {
    try {
      return await this.axios
        .get("/customers")
        .then((response) => {
          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch (error) {
      throw new Error(
        "Failed to fetch customers from Zoho API: " + error.message
      );
    }
  }

  async createCustomerAsync(customer) {
    try {
      return await this.axios
        .post("/customers", customer)
        .then((response) => {
          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch (error) {
      throw new Error(
        "Failed to create a new Customer in Zoho API: " + error.message
      );
    }
  }
}

module.exports = ZohoService;
