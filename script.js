document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const materialType = document.getElementById("materialType").value;
    const fileUpload = document.getElementById("fileUpload").files[0];

    if (fileUpload) {
        document.getElementById("uploadMessage").textContent = `${fileUpload.name} uploaded successfully as ${materialType} material.`;
    } else {
        document.getElementById("uploadMessage").textContent = "Please select a file to upload.";
    }
});

function downloadMaterial(type) {
    alert(`Downloading ${type} materials...`);
}
