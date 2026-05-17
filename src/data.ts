// Data extracted from the VBC PDFs

export const importantDates = [
  { date: "May 27", event: "Volunteer Training Night from 6:00PM to 7:30PM. (MANDATORY)" },
  { date: "June 6", event: "Shepherds are invited to decorate classrooms and doors from 9:00 AM to 12:00 PM." },
  { date: "June 7", event: "Additional classroom decorating time is available from 12:00 PM to 4:00 PM." },
  { date: "June 8", event: "Vacation Bible Camp officially begins." },
  { date: "June 11", event: "VBC Block Party 12PM-1PM" },
  { date: "June 11", event: "Volunteer and Serve Team Appreciation Party/Clean up 1PM-3PM" }
];

export const dailySchedule = [
  { time: "8:15 AM", activity: "Volunteer Check-In", desc: "Volunteers check in when they arrive and get ready for their assigned area." },
  { time: "8:30 AM", activity: "Volunteers in Assigned Areas", desc: "All volunteers should be in place and ready for kids and families." },
  { time: "8:40 AM", activity: "Participants Arrive", desc: "Kids begin arriving. Shepherds and team members should be ready to welcome and help." },
  { time: "9:00 AM", activity: "Worship Begins", desc: "Everyone begins the day with worship and large group in the Sanctuary." },
  { time: "9:50 AM", activity: "Rotations Begin", desc: "Groups begin moving to their assigned stations." },
  { time: "11:50 AM", activity: "Daily Wrap Up", desc: "Groups return for wrap-up before dismissal." },
  { time: "12:00 PM", activity: "Dismissal", desc: "Kids are dismissed according to the correct pickup and checkout procedures." }
];

export const rotations = [
  { grade: "PreK", t1: "Worship & Music", t2: "Small Group Bible Time", t3: "Snacks then Rec", t4: "Crafts", t5: "Daily Wrap Up" },
  { grade: "Kinder", t1: "Worship & Music", t2: "Small Group Bible Time", t3: "Rec then Snacks", t4: "Crafts", t5: "Daily Wrap Up" },
  { grade: "1st Grade", t1: "Worship & Music", t2: "Snacks then Rec", t3: "Crafts", t4: "Small Group Bible Time", t5: "Daily Wrap Up" },
  { grade: "2nd Grade", t1: "Worship & Music", t2: "Rec then Snacks", t3: "Crafts", t4: "Small Group Bible Time", t5: "Daily Wrap Up" },
  { grade: "3rd Grade", t1: "Worship & Music", t2: "Crafts", t3: "Small Group Bible Time", t4: "Snacks then Rec", t5: "Daily Wrap Up" },
  { grade: "4th Grade", t1: "Worship & Music", t2: "Crafts", t3: "Small Group Bible Time", t4: "Rec then Snacks", t5: "Daily Wrap Up" },
];

export const stationLocations = [
  { name: "Worship & Music", location: "Sanctuary" },
  { name: "Small Group Bible Time & Daily Wrap Up", location: "Classroom" },
  { name: "Recreation", location: "Back Porch / Parking Lot West Side of Bldg. A" },
  { name: "Snacks", location: "Gym" },
  { name: "Crafts", location: "Loft Common Area" },
  { name: "First Aid", location: "Check-in Desk Bldg. A" }
];

export const snacks = [
  { day: "Monday", name: "Goldfish", items: "Goldfish crackers", note: "Goldfish may be served in individual bags or poured into cups since snack will not be served outside." },
  { day: "Tuesday", name: "Jesus Walks on Water Snack", items: "Graham crackers, Teddy Grahams, and blue icing", note: "" },
  { day: "Wednesday", name: "Trail Mix", items: "Pretzels, Raisins, Ritz crackers, Marshmallows, M&Ms", note: "Trail mix will be pre-made before snack time." },
  { day: "Thursday", name: "Popcorn", items: "Popcorn", note: "" }
];

export const safetyInfo = {
  guidelines: [
    "A dedicated safety team will be present on campus wearing orange vests.",
    "Staff members can be identified by their green shirts.",
    "If you see anything unusual or concerning, report it immediately to a safety team member or a staff member."
  ],
  emergencies: [
    { type: "Fire", action: "Take the red evacuation bag and your Check-In/Sign-In sheet with you. Evacuate immediately through the nearest safe exit. Guide children to the rally point at Building D. Check in with staff upon arrival." },
    { type: "Severe Weather", action: "Take your red evacuation bag and Check-In/Sign-In sheet. Building A classes move to nursery hallway/approved rooms. Building C classes move to rooms C8, C9, or restrooms. Sanctuary groups move to restrooms or front rooms. Stay away from windows." },
    { type: "Stranger on Campus", action: "Politely direct unfamiliar adults to Building D where someone can assist them. Never allow unauthorized adults to remain without an escort. Send a volunteer to alert a staff member." },
    { type: "Campus-Wide Evacuation", action: "Take your red evacuation bag and Check-In/Sign-In sheet. Walk your group safely to Worley Middle School across the parking lot. Keep children calm and together." },
    { type: "Lost Child", action: "Quickly scan your area. Notify the nearest staff member in a GREEN shirt immediately to initiate emergency protocol. Do not leave the rest of your group unsupervised." }
  ],
  injuries: [
    { type: "Minor injuries", action: "Bring the child to the nurse's station at the Check-in Desk in Building A. Fill out an 'Incident Report' and give it to staff." },
    { type: "Major injuries", action: "Remain with the injured child. Send a volunteer to notify staff and the nurse. Keep the area clear and reassure the child." }
  ],
  allergies: "All children with allergies are marked on your attendance sheet. They must wear a pink allergy bracelet. Children with food allergies should bring their own snack in a drawstring bag, or give it to their shepherd."
};

export const daysOverview = [
  { day: 1, theme: "Space Explorer Day", wear: "Wear galaxy colors, stars, astronaut gear, alien headbands, or anything space-themed!", story: "Jesus Calls His Disciples", reference: "Luke 5:1-11", line: "Jesus is the way.", pastor: "Pastor Mike" },
  { day: 2, theme: "Adventure Day", wear: "Wear camo, safari hats, hiking gear, binoculars, or bright outdoor clothes!", story: "Jesus Walks on Water", reference: "Matthew 14:22-23", line: "Jesus is with me.", pastor: "Pastor Thomas" },
  { day: 3, theme: "Kingdom Day", wear: "Wear crowns, knight armor, royal colors (purple, gold, red), capes, or royal dresses!", story: "Crucifixion and Resurrection", reference: "Luke 23:32-45, 55-56", line: "Jesus is alive.", pastor: "Pastor Michelle" },
  { day: 4, theme: "Power-Up Day", wear: "Wear your favorite video game character shirts, superhero gear, or neon colors!", story: "Peter's Denial and Restoration", reference: "Matthew 26:31-35, 69-75", line: "Jesus makes me new.", pastor: "Pastor David" }
];

export const shepherdDuties = {
  arrival: [
    "Wear your name tag",
    "Review your rotation schedule",
    "Grab your folder with: Attendance Sheets, Wristbands, Parent Pick-Up Sheet",
    "Fill out pick-up sheet and hand to parent",
    "Take attendance on both sheets",
    "Write each child's name and group number on their wristband",
    "Apply wristbands (use pink allergy band if applicable)",
    "Leave one attendance sheet in the pew; take the other with you"
  ],
  dismissal: [
    "Clean up classroom (remove trash, push in chairs)",
    "Student sign-out is required with an adult volunteer only",
    "Leave attendance sheet, Shepherd Bag, handheld sign, and materials in your classroom."
  ]
};
