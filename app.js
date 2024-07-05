document.querySelector('#file').addEventListener('change', function() {
  document.querySelector('.text-file').textContent = this.files[0].name;
})