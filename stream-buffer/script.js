async function uploadFile() {
  const fileInput = document.getElementById("fileInput");

  if (!fileInput.files.length) {
    alert("Please select a text file");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  const response = await fetch("/analyze", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  document.getElementById("words").textContent = data.words;
  document.getElementById("lines").textContent = data.lines;
  document.getElementById("chars").textContent = data.characters;
}