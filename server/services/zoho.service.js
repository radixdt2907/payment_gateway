const { v4: uuidv4 } = require("uuid");

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

  // Customers
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

  // Plans
  async getPlanAsync() {
    try {
      return await this.axios
        .get("/plans")
        .then((response) => {
          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch (error) {
      throw new Error("Failed to fetch plans from Zoho API: " + error.message);
    }
  }

  // Addons
  async getAddonsAsync() {
    try {
      return await this.axios
        .get("/addons")
        .then((response) => {
          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch (error) {
      throw new Error("Failed to fetch Addons from Zoho API: " + error.message);
    }
  }

  // Subscription with Hosted Page
  async createSubscriptionHostedPageAsync(data) {
    try {
      // Injecting random reference Id
      data = {
        ...data,
        reference_id: uuidv4(),
      };
      return await this.axios
        .post("/hostedpages/newsubscription", data)
        .then((response) => {
          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch (error) {
      throw new Error(
        "Failed to create Hosted Page for subscription from Zoho API: " +
          error.message
      );
    }
  }

  // Fetch all Subscription based on Customer Id
  async fetchAllSubscriptionAsync(params) {
    try {
      return await this.axios
        .get("/subscriptions", { params })
        .then((response) => {
          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch (error) {
      throw new Error(
        "Failed to fetch Subscription from Zoho API: " + error.message
      );
    }
  }

  // Payment
  async getPaymentHistoryAsync(customer_id) {
    try {
      // TODO REMOVE
    } catch (error) {
      throw new Error(
        "Failed to fetch Payment Info from Zoho API: " + error.message
      );
    }
  }

  // Token
  async generateAccessTokenFromRefreshTokenAsync(data) {
    try {
      return await this.axios
        .post("/token", data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          return response;
        })
        .catch(({ response }) => {
          return response;
        });
    } catch (error) {
      throw new Error(
        "Error while Generating the Access Token From Refresh Token: " +
          error.message
      );
    }
  }
}

module.exports = ZohoService;
