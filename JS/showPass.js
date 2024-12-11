
const ipnElement = document.getElementById('password');
const btnElement = document.getElementById('btnPassword');

btnElement.addEventListener('click', function() {
    const currentType = ipnElement.getAttribute('type')

    ipnElement.setAttribute(
      'type',
      currentType === 'password' ? 'text' : 'password'
    )
});