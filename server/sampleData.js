const clients = [
  {
    id: "1",
    name: "Spencer Cecil",
    email: "spencer@gmail.com",
    phone: "0735678939"
  },
  {
    id: "2",
    name: "Benson Magollo",
    email: "benson@gmail.com",
    phone: "0135678939"
  }
];

const projects = [
  {
    id: "1",
    clientId: "1",
    title: "Web application",
    description: "Application to get regular monthly bills",
    status: "Not completed"
  },
  {
    id: "2",
    clientId: "2",
    title: "Desktop application",
    description: "Inventory management system",
    status: "completed"
  }
];

module.exports = { projects, clients };
