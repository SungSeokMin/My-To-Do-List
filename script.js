
const inputInfo = document.querySelector('.inputInfo');
const userInfo = inputInfo.querySelectorAll('input')[0];
const messageInfo = inputInfo.querySelectorAll('input')[1];

const btn = document.querySelector('#btn');

function makeMyList (userName, userMessage) {
  const totalList = document.querySelector('#content');
  
  const ulElement = document.createElement('ul');

  const liElement = document.createElement('li');
  liElement.classList.add('list')

  const user = document.createElement('div');
  user.classList.add('user');
  user.textContent = userName;

  const message = document.createElement('div');
  message.classList.add('message')
  message.textContent = userMessage;

  const createdAt = document.createElement('div');
  createdAt.classList.add('createAt');
  createdAt.textContent = new Date().format();

  const checkList = document.createElement('input');
  checkList.setAttribute('type', 'checkbox')
  checkList.textContent = '완료';
  checkList.onclick = changeBackgroundHandler;

  liElement.append(user, message, createdAt, checkList);
  ulElement.append(liElement);
  totalList.appendChild(ulElement);
}

//등록버튼 클릭 후 DATA에 저장
function inputToDoListHandler (e) {
  let userValue = userInfo.value;
  let messageValue = messageInfo.value;
  
  if(!userValue || !messageValue) {
    return;
  } else {
    makeMyList(userValue, messageValue);
  }

  let newObj = {
    user : userValue,
    message : messageValue,
    createdAt : new Date().format()
  }
  DATA.push(newObj);

  userInfo.value = '';
  messageInfo.value = '';  
}

function changeBackgroundHandler (e) {
  let parent = e.target.parentElement;
  let checkComplete = document.querySelector('.complete');
  const liElement = document.querySelectorAll('li');

  for(let i = 0; i < liElement.length; i++) {
    if(parent) {
      parent.classList.add('complete');  
    }
  }
}
btn.addEventListener('click', inputToDoListHandler);
