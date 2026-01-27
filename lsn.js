// Shadowrocket Rewrite Script

const body = {
  Locale: "vi",
  messageKey: "paygate.success",
  data: {
    count: 5,
    message: "Thành công",
    items: [
      {
        requestTime: 1769522929389,
        amount: 2000000,
        statusDescription: "Hoàn thành",
        notes: "",
        responseTime: 1769505161643,
        bankReceive: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "44325477",
          type: 1
        },
        id: 902719002,
        bankSent: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "",
          type: 1
        },
        transactionCode: "BK8DI91C",
        type: 6,
        slipType: 1,
        status: 2
      },
      {
        requestTime: 1769522310389,
        amount: 400000,
        statusDescription: "Hoàn thành",
        notes: "",
        responseTime: 1769505161643,
        bankReceive: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "44325477",
          type: 1
        },
        id: 902719002,
        bankSent: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "",
          type: 1
        },
        transactionCode: "P098HQUU7",
        type: 6,
        slipType: 1,
        status: 2
      },
      {
        requestTime: 1769505115389,
        amount: 290000,
        statusDescription: "Hoàn thành",
        notes: "",
        responseTime: 1769505161643,
        bankReceive: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "44325477",
          type: 1
        },
        id: 902719001,
        bankSent: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "",
          type: 1
        },
        transactionCode: "Z8DRQT7J",
        type: 6,
        slipType: 1,
        status: 2
      },
      {
        requestTime: 1769504148062,
        amount: 377000,
        statusDescription: "Hoàn thành",
        notes: "",
        responseTime: 1769504204393,
        bankReceive: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "44117137",
          type: 1
        },
        id: 902712122,
        bankSent: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "",
          type: 1
        },
        transactionCode: "V0DRQQ7V",
        type: 6,
        slipType: 1,
        status: 2
      },
      {
        requestTime: 1769406177627,
        amount: 50000,
        statusDescription: "Hoàn thành",
        notes: "",
        responseTime: 1769406270503,
        bankReceive: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "",
          publicRss: 0,
          accountNumber: "43774727",
          type: 1
        },
        id: 902126787,
        bankSent: {
          bankId: "5c4f2c84606041e424f47423",
          accountName: "LE DINH NHAT HOANG",
          publicRss: 0,
          accountNumber: "2688888999",
          type: 1
        },
        transactionCode: "E1DJ2CAN",
        type: 6,
        slipType: 1,
        status: 2
      }
    ]
  },
  status: 0
};

$done({ body: JSON.stringify(body) });
