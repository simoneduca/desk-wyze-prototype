/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

*/

module.exports = {
  {
    "blocks": [
      {
        "A": [
          {
            "id": "1",
            "isBooked": true,
            "properties": ["phone", "thin client"]
          },
          {
            "id": "2",
            "isBooked": false,
            "properties": ["phone", "raiser"]
          },
          {
            "id": "2",
            "isBooked": false,
            "properties": ["phone"]
          }
        ]
      }
    ]
  }
}
