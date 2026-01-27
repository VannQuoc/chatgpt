// Shadowrocket Rewrite Script

const body = {
  message: "Success",
  code: 0,
  data: {
    count: 8,
    items: [
      {
        closingValue: 600,
        createdTime: 1769523780,
        description: "Ticket: sbt_008, Home - Liverpool (V) vs Inter Milan (V)",
        exchangeValue: -300000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      },
      {
        closingValue: 300600,
        createdTime: 1769523600,
        description: "Ticket: sbt_007, Home - Liverpool (V) vs Inter Milan (V)",
        exchangeValue: -550000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      },
      {
        closingValue: 850600,
        createdTime: 1769523420,
        description: "Ticket: sbt_006, Home - PSG (V) vs Manchester City (V)",
        exchangeValue: -509000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      },
      {
        closingValue: 1359600,
        createdTime: 1769523240,
        description: "Ticket: sbt_005, Home - PSG (V) vs Manchester City (V)",
        exchangeValue: -500000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      },
      {
        closingValue: 1859600,
        createdTime: 1769523060,
        description: "Ticket: sbt_004, Home - Real Madrid (V) vs Bayern Munich (V)",
        exchangeValue: 99000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      },
      {
        closingValue: 1750600,
        createdTime: 1769523180,
        description: "Ticket: sbt_003, Home - Real Madrid (V) vs Bayern Munich (V)",
        exchangeValue: -300000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      },
      {
        closingValue: 2050600,
        createdTime: 1769523000,
        description: "Ticket: sbt_002, Home - Arsenal (V) vs Chelsea (V)",
        exchangeValue: 150000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      },
      {
        closingValue: 1900600,
        createdTime: 1769522880,
        description: "Ticket: sbt_001, Home - Arsenal (V) vs Chelsea (V)",
        exchangeValue: -100000,
        activityType: 0,
        serviceName: "Volta K-Sport"
      }
    ]
  },
  status: 0
};

$done({ body: JSON.stringify(body) });
