const homeRepairs = (req, res) => {
  res.render("repairs/home");
};

const diagnosticView = (req, res) => {
  res.render("repairs/diagnostic", {
    page: "Diagnosticar Equipara para Reparación",
  });
};

export { homeRepairs, diagnosticView };
