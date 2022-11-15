const form = document.querySelector("#generator");
const output = document.querySelector("#qrcode");

const showSpinner = () => {
  document.querySelector("#spinner").style.display = "block";
};

const hideSpinner = () => {
  document.querySelector("#spinner").style.display = "none";
};

const generateCode = (url, size) => {
  const QR = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
    colorDark: "#312e81",
    colorLight: "#ffffff",
  });
};

const clear = () => {
  output.innerHTML = "";
};

const handleSubmit = (e) => {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;

  clear();

  showSpinner();
  setTimeout(() => {
    hideSpinner();
    generateCode(url, size);
  }, 1000);
};

form.addEventListener("submit", handleSubmit);
