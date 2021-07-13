const { AIRTABLE } = require("./enum");

describe('AIRTABLE', () => {
    test('Should return correct enum', () => {
        const inputs = [
            {
                in: AIRTABLE.PTTBOutbound.ID,
                out: "appuFoWSGUWJ9yMyq",
            },
            {
                in: AIRTABLE.PTTBOutbound.TABLE.MainShopifyOrders,
                out: "Main Shopify Orders (PTTB)",
            },
        ];

        inputs.forEach(input => {
            expect(input.in).toBe(input.out);
        })
    })
})