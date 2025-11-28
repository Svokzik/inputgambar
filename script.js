function addImage() {
  const url = document.getElementById('imageUrl').value.trim();
  const preview = document.getElementById('imagePreview');
  preview.innerHTML = '';
  if (url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Preview Gambar';
    preview.appendChild(img);
  }
}

function addVideo() {
  const url = document.getElementById('videoUrl').value.trim();
  const preview = document.getElementById('videoPreview');
  preview.innerHTML = '';
  if (url) {
    const video = document.createElement('video');
    video.src = url;
    video.controls = true;
    video.width = 500;
    preview.appendChild(video);
  }
}
