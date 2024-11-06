const searchPanel = document.querySelector("#search");
const searchDevice = document.querySelector("#search-device");

const searchClient = (search, link) => {
  if (search.value === "") {
    window.location.href = link;
  }
};

if (searchPanel) {
  searchPanel.addEventListener("input", () =>
    searchClient(searchPanel, "/client/panel")
  );
}

if (searchDevice) {
  searchDevice.addEventListener("input", () =>
    searchClient(searchDevice, "/device/received")
  );
}
