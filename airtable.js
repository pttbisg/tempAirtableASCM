"use strict";

const {
  AirtablePTTBOutboundMainShopifyOrdersService,
} = require("./services/airtable");

const airtablePTTBOutboundMainShopifyOrdersService =
  new AirtablePTTBOutboundMainShopifyOrdersService();

const isgOrderSourceToASCMLogistics = async (event) => {
  try {
    console.log({
      message: "Incoming request",
      data: event,
    });

    const { total, data } =
      await airtablePTTBOutboundMainShopifyOrdersService.MigrateISGOrderSourceToASCMLogistics();

    // let res = {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         total: total,
    //         data: data,
    //     }),
    // };

    let res = {
      statusCode: 200,
      body: JSON.stringify({
        total: total,
        data: data,
      }),
    };

    console.log({
      message: "Outgoing response",
      data: res,
    });

    return res;
  } catch (err) {
    console.log(err);
    //console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "INTERNAL_SERVER_ERROR",
      }),
    };
  }
};

module.exports = {
  isgOrderSourceToASCMLogistics,
};
