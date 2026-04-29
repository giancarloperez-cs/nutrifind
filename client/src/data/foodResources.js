/*
  Seeded food resource data for SE Los Angeles (Compton, Watts, Lynwood,
  South Gate, Huntington Park, Paramount).

  Sources cross-referenced with: LA Regional Food Bank partner directory,
  211 LA County, community fridge social networks, parish websites.

  verified: true  = confirmed active as of research date
  verified: false = location is plausible / historically active but
                    operating days/hours should be confirmed before launch.
                    Call or check the org's website before going live.

  directionsUrl uses the Google Maps Directions API format so it works
  on both iOS and Android Google Maps apps without requiring an API key.
*/

const foodResources = [
  {
    id: "wlcac-watts",
    name: "WLCAC Community Food Pantry",
    type: "Food Pantry",
    address: "10950 S Central Ave, Los Angeles, CA 90059",
    zip: "90059",
    schedule: [
      { day: "Tuesday", hours: "9:00 AM – 12:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 12:00 PM" },
    ],
    alwaysOpen: false,
    description:
      "Watts Labor Community Action Committee offers fresh produce, canned goods, and dry staples to Watts-area residents. No appointment needed.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=10950+S+Central+Ave+Los+Angeles+CA+90059",
    verified: true,
  },
  {
    id: "salvation-army-compton",
    name: "Salvation Army Compton Corps",
    type: "Food Pantry",
    address: "1524 N Long Beach Blvd, Compton, CA 90221",
    zip: "90221",
    schedule: [
      { day: "Monday", hours: "8:30 AM – 11:30 AM" },
      { day: "Wednesday", hours: "8:30 AM – 11:30 AM" },
      { day: "Friday", hours: "8:30 AM – 11:30 AM" },
    ],
    alwaysOpen: false,
    description:
      "Emergency food boxes with canned goods, bread, and household staples. Bring a photo ID and proof of address.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1524+N+Long+Beach+Blvd+Compton+CA+90221",
    verified: false,
  },
  {
    id: "watts-community-fridge",
    name: "Watts Community Fridge",
    type: "Community Fridge",
    address: "9623 S Grape St, Los Angeles, CA 90002",
    zip: "90002",
    schedule: [],
    alwaysOpen: true,
    description:
      "Community-stocked refrigerator and pantry shelf available around the clock. Take what you need, leave what you can.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=9623+S+Grape+St+Los+Angeles+CA+90002",
    verified: false,
  },
  {
    id: "st-lawrence-watts",
    name: "St. Lawrence of Brindisi Food Pantry",
    type: "Church Giveaway",
    address: "1905 E 109th St, Los Angeles, CA 90059",
    zip: "90059",
    schedule: [
      { day: "Saturday", hours: "8:00 AM – 11:00 AM" },
    ],
    alwaysOpen: false,
    description:
      "Weekly Saturday distribution of fresh produce boxes and canned goods. Open to all — no documentation required.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1905+E+109th+St+Los+Angeles+CA+90059",
    verified: false,
  },
  {
    id: "st-francis-rome-lynwood",
    name: "St. Francis of Rome Free Groceries",
    type: "Church Giveaway",
    address: "11065 Atlantic Ave, Lynwood, CA 90262",
    zip: "90262",
    schedule: [
      { day: "Wednesday", hours: "10:00 AM – 1:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 12:00 PM" },
    ],
    alwaysOpen: false,
    description:
      "Bi-weekly grocery distribution with produce, dairy, and protein items. Multilingual volunteers available.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=11065+Atlantic+Ave+Lynwood+CA+90262",
    verified: false,
  },
  {
    id: "south-gate-rec-pantry",
    name: "South Gate Recreation Center Pantry",
    type: "Free Groceries",
    address: "9210 Park Dr, South Gate, CA 90280",
    zip: "90280",
    schedule: [
      { day: "Tuesday", hours: "3:00 PM – 6:00 PM" },
      { day: "Friday", hours: "3:00 PM – 6:00 PM" },
    ],
    alwaysOpen: false,
    description:
      "Afternoon food distribution run in partnership with the LA Regional Food Bank. Fresh produce, bread, and shelf-stable items.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=9210+Park+Dr+South+Gate+CA+90280",
    verified: false,
  },
  {
    id: "st-emydius-south-gate",
    name: "St. Emydius Parish Food Ministry",
    type: "Church Giveaway",
    address: "9140 Juniper St, South Gate, CA 90280",
    zip: "90280",
    schedule: [
      { day: "Thursday", hours: "5:00 PM – 7:00 PM" },
    ],
    alwaysOpen: false,
    description:
      "Thursday evening food ministry providing hot meals and grocery bags to families in need. No residency requirement.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=9140+Juniper+St+South+Gate+CA+90280",
    verified: false,
  },
  {
    id: "hp-united-methodist",
    name: "Huntington Park UMC Free Groceries",
    type: "Free Groceries",
    address: "6200 Miles Ave, Huntington Park, CA 90255",
    zip: "90255",
    schedule: [
      { day: "Monday", hours: "9:00 AM – 12:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 12:00 PM" },
    ],
    alwaysOpen: false,
    description:
      "Twice-weekly grocery distribution for Huntington Park families. Boxes include fresh fruit and vegetables when available.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=6200+Miles+Ave+Huntington+Park+CA+90255",
    verified: false,
  },
  {
    id: "paramount-community-fridge",
    name: "Paramount Community Fridge",
    type: "Community Fridge",
    address: "15200 Paramount Blvd, Paramount, CA 90723",
    zip: "90723",
    schedule: [],
    alwaysOpen: true,
    description:
      "Outdoor refrigerator and dry goods shelf stocked by community volunteers. Available 24 hours — take what you need.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=15200+Paramount+Blvd+Paramount+CA+90723",
    verified: false,
  },
  {
    id: "pat-food-distribution",
    name: "Paramount Action Team Food Box",
    type: "Food Distribution",
    address: "16400 Colorado Ave, Paramount, CA 90723",
    zip: "90723",
    schedule: [
      { day: "Saturday", hours: "7:00 AM – 10:00 AM" },
    ],
    alwaysOpen: false,
    description:
      "Drive-thru and walk-up food box distribution. Pre-packed boxes with produce, protein, and pantry staples for up to 4 people.",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=16400+Colorado+Ave+Paramount+CA+90723",
    verified: false,
  },
];

export default foodResources;
