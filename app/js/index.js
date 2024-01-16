let toastBox = document.getElementById('toastBox');
let successMsg =
  '<img src="./app/img/success.png" alt="Success icon"> Successfully submitted';
let errorMsg =
  '<img src="./app/img/error.png" alt="Error icon"> Please fixed the error!';
let invalidMsg =
  '<img src="./app/img/warning.png" alt="Warning icon"> Invalid input, check again';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes('error')) {
    toast.classList.add('error');
  } else if (msg.includes('warning')) {
    toast.classList.add('warning');
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
