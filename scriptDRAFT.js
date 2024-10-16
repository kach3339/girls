document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  const name = document.getElementById('name').value;
  const hobby = document.getElementById('hobby').value;
  const place = document.getElementById('place').value;
  const color = document.getElementById('color').value;
  const description = document.getElementById('description').value;

  // Сохраняем данные в LocalStorage
  localStorage.setItem('name', name);
  localStorage.setItem('hobby', hobby);
  localStorage.setItem('place', place);
  localStorage.setItem('color', color);
  localStorage.setItem('description', description);

  alert(`Спасибо за ответы, ${name}! Данные сохранены.`);

  // Чтобы проверить сохранение:
  console.log('Данные сохранены в LocalStorage:');
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('hobby'));
  console.log(localStorage.getItem('place'));
  console.log(localStorage.getItem('color'));
  console.log(localStorage.getItem('description'));
});