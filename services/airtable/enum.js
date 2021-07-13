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
    }
};

module.exports = {
    AIRTABLE,
}
