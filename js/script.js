const form = document.querySelector("#generator");
const qr = document.querySelector("#qrcode");

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
  qr.innerHTML = "";
  const saveButton = document.querySelector("#save");
  if (saveButton) {
    saveButton.remove();
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;

  clear();

  if (url === "") {
    alert("Enter the link, please");
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateCode(url, size);
      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        createSaveButton(saveUrl);
        console.log("gen", saveUrl);
      }, 50);
    }, 1000);
  }
};

const createSaveButton = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save";
  link.classList =
    "bg-indigo-700 hover:bg-indigo-600 text-white font-bold p-2 rounded mt-2 m-auto block w-1/4";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save as image";
  document.querySelector("#generation").appendChild(link);
};

form.addEventListener("submit", handleSubmit);
