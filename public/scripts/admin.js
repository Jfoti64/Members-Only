document.addEventListener('DOMContentLoaded', function () {
  const adminCheckbox = document.getElementById('admin');
  if (adminCheckbox) {
    adminCheckbox.addEventListener('change', function () {
      adminCheckbox.form.submit();
    });
  }
});
