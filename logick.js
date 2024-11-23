function showForm() {
    const shape = document.getElementById('shape').value;
    const forms = document.querySelectorAll('.shape-form');
    
    forms.forEach(form => form.style.display = 'none');
    
    if (shape === 'cube') {
      document.getElementById('cube-form').style.display = 'block';
    } else if (shape === 'sphere') {
      document.getElementById('sphere-form').style.display = 'block';
    } else if (shape === 'cylinder') {
      document.getElementById('cylinder-form').style.display = 'block';
    }
  }
  
  function calculateCube() {
    const side = parseFloat(document.getElementById('cube-side').value);
    if (!isNaN(side) && side > 0) {
      const area = 6 * Math.pow(side, 2);
      const volume = Math.pow(side, 3);
      document.getElementById('cube-result').innerHTML = `Площа: ${area} м², Об'єм: ${volume} м³`;
    } else {
      document.getElementById('cube-result').innerHTML = '';
    }
  }
  
  function calculateSphere() {
    const radius = parseFloat(document.getElementById('sphere-radius').value);
    if (!isNaN(radius) && radius > 0) {
      const area = 4 * Math.PI * Math.pow(radius, 2);
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      document.getElementById('sphere-result').innerHTML = `Площа: ${area.toFixed(2)} м², Об'єм: ${volume.toFixed(2)} м³`;
    } else {
      document.getElementById('sphere-result').innerHTML = '';
    }
  }
  
  function calculateCylinder() {
    const radius = parseFloat(document.getElementById('cylinder-radius').value);
    const height = parseFloat(document.getElementById('cylinder-height').value);
    if (!isNaN(radius) && radius > 0 && !isNaN(height) && height > 0) {
      const area = 2 * Math.PI * radius * (radius + height);
      const volume = Math.PI * Math.pow(radius, 2) * height;
      document.getElementById('cylinder-result').innerHTML = `Площа: ${area.toFixed(2)} м², Об'єм: ${volume.toFixed(2)} м³`;
    } else {
      document.getElementById('cylinder-result').innerHTML = '';
    }
  }
  
  window.onload = showForm;  // Відображення початкової форми
  

       // Получаем элементы
        const modelViewer = document.getElementById('viewer');
        const fileInput = document.getElementById('file-input');

        // Добавляем слушатель для загрузки файлов
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                // Создаём URL для загруженного файла
                const objectURL = URL.createObjectURL(file);

                // Устанавливаем src для model-viewer
                modelViewer.src = objectURL;

                // Убираем URL из памяти после завершения
                modelViewer.addEventListener('load', () => {
                    URL.revokeObjectURL(objectURL);
                });
            }
        });
        