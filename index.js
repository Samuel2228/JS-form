// Targetting existing html Elements 
const submitBtn = document.querySelector('input[type="submit"]')
const form = document.getElementById('form');
const formChildren = form.children;

// existing html container TO append node elements
const divCont = document.getElementById('divCont');

// new element to hold name & lastName of user
const userName = document.createElement('p');

// Node elements  delete and edit Btn
const delBtn = document.createElement('button')
const editBtn = document.createElement('button')
delBtn.innerText = 'delete';
editBtn.innerText = 'edit';
delBtn.className = 'delete'
editBtn.className = 'edit'

// appending delete & edit btn 
divCont.appendChild(delBtn);
divCont.appendChild(editBtn)


    // REMOVING buttons if no names 
    if (!formChildren[0].value) {
        divCont.removeChild(delBtn)
        divCont.removeChild(editBtn)
    } 

    // edit userName 
    editBtn.addEventListener('click', editName);
    function editName() {
        const item = userName.textContent;
        const name1 = formChildren[0];
        const name2 = formChildren[2];
        // spliting UserName 
        const newItem = item.split(' ')

        if (newItem) {
            name1.value = newItem[0]
            name2.value = newItem[1]
        }
    }

// delete name in form 
delBtn.addEventListener('click', deleteUser);

function deleteUser(e) {
    if (e.id = 'deleteName') {
        userName.innerText = ''
        divCont.removeChild(delBtn);
        divCont.removeChild(editBtn);
    }
}

// Form event listener 
form.addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()

    const name = formChildren[0].value; 
    const lastName = formChildren[2].value;
    const fullName = `${name} ${lastName}`

    // setting new element to user's full name 
    userName.innerText = fullName;

    // appending node elements to the dom
    const nameCont = document.getElementById('nameCont')
    nameCont.appendChild(userName);

    // Adding back buttons 
    if (formChildren[0].value.length > 0) {
        divCont.appendChild(delBtn);
        divCont.appendChild(editBtn)
    }

    // formChildren[0].value = '';
    // formChildren[2].value = ''; 

    if (formChildren[0].value.length <= 0) {
        alert('firstName empty');
    } else {
        formChildren[0].value = '';
    }

    if (formChildren[2].value.length <= 0) {
        alert('lastName empty');
    } else {
        formChildren[2].value = '';
    }

    if (userName.innerText !== fullName) {
        console.log('BIG ERROR')
        userName.innerText = ''
    }
}