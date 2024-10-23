const viewClient = (req, res) => {
  res.render("client/create", {
    page: "Crear Cliente",
  });
};

export { viewClient };
