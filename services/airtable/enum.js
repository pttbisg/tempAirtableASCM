'use strict';

const AIRTABLE = {
    API_KEY: process.env.AIRTABLE_API_KEY || "",
    PTTBOutbound: {
        ID: "appuFoWSGUWJ9yMyq",
        TABLE: {
            MainShopifyOrders: "Main Shopify Orders (PTTB)",
            ISGOrderSource: "ISGOrderSource",
            ASCMLogistics: "ASCM_Logistics",
        }
    },
    DEFAULT_DELAYER_MS: 200,
};

module.exports = {
    AIRTABLE,
}
