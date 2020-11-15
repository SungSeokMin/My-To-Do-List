
const inputInfo = document.querySelector('.inputInfo');
const userInfo = inputInfo.querySelectorAll('input')[0];
const messageInfo = inputInfo.querySelectorAll('input')[1];

const btn = document.querySelector('#btn');

function createUl () {
  const totalList = document.querySelector('#content');
  const ulElement = document.createElement('ul');
  totalList.appendChild(ulElement);
}

function makeMyList (userName, userMessage) {

  const ulElement = document.querySelector('ul');

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
  checkList.onclick = changeBackgroundHandler;

  const button = document.createElement('button');
  button.classList.add('completeBtn');
  button.textContent = '완료';
  button.onclick = checkRemoveListHandler;

  liElement.append(user, message, createdAt, checkList, button);
  ulElement.append(liElement);
  // totalList.appendChild(ulElement);
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

  // checked가 false -> li에 complete 클래스를 remove
  // checked가 true -> li에 complete 클래스를 add

  if(this.checked) {
    parent.classList.add('complete');
  } else {
    parent.classList.remove('complete');
  }
}

function checkRemoveListHandler (e) {
  //버튼 클릭 시 ul 태그를 remove.
  let parent = e.target.parentElement;
  parent.remove();
}

btn.addEventListener('click', inputToDoListHandler);
window.onload = createUl;