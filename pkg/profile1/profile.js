document.addEventListener('DOMContentLoaded', function() {
    const newsletterToggleBtn = document.getElementById('toggle-newsletter');
    const newsletterStatus = document.querySelector('.newsletter-status');
    const saveProfileBtn = document.getElementById('save-profile');
    const editNameInput = document.getElementById('edit-name');
    const editEmailInput = document.getElementById('edit-email');
    const appealStatusFilter = document.getElementById('appeal-status-filter');
    const appealsList = document.querySelector('.appeals-list');
    const newAppealBtn = document.getElementById('new-appeal');

    newsletterToggleBtn.addEventListener('click', function() {
        if(newsletterStatus.classList.contains('enabled')){
            newsletterStatus.classList.remove('enabled');
            newsletterStatus.classList.add('disabled');
            newsletterStatus.textContent = 'Выключена';
            newsletterToggleBtn.textContent = "Включить";

        } else {
            newsletterStatus.classList.remove('disabled');
            newsletterStatus.classList.add('enabled');
            newsletterStatus.textContent = 'Включена';
            newsletterToggleBtn.textContent = "Выключить";
        }
    });

    saveProfileBtn.addEventListener('click', function() {
        const newName = editNameInput.value;
        const newEmail = editEmailInput.value;
        alert('Изменения сохранены! \nИмя: ' + newName + ' \nEmail: '+ newEmail);
      
    });

    appealStatusFilter.addEventListener('change', function(){
       const selectedStatus = appealStatusFilter.value;
       const appealItems = appealsList.querySelectorAll('.appeal-item');

       appealItems.forEach(item => {
          if(selectedStatus === 'all' || item.getAttribute('data-status') === selectedStatus) {
               item.style.display = 'block';
          } else {
               item.style.display = 'none';
          }
       });
    });
    newAppealBtn.addEventListener('click', function(){
     alert('Будет открыто модальное окно для создания обращения');
  });
});