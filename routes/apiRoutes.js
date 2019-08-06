var path = require("path");
var tables = [
    {
    routeName: "duderoute",
    name: "dude",
    email: "dude@email.com",
    time: "10am"
    }];
module.exports = function(app) {

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../reserve.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
  });

  // Create New Reservations - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
  });
  
  
};

