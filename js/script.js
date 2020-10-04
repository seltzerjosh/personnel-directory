const itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function displayPage(list, page){
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = (page * itemsPerPage);
    const ul = document.querySelector('ul.student-list');
    ul.innerHTML = '';

    for (let i = startIndex; (i >= startIndex && i < endIndex); i++) {
        const img = document.createElement('img');
        img.className = 'avatar';
        img.src = data[i].picture.medium;
        img.alt = 'profile picture';
        const h3 = document.createElement('h3');
        h3.textContent = `${data[i].name.first} ${data[i].name.last}`;
        const span = document.createElement('span');
        span.textContent = data[i].email;
        const div = document.createElement('div');
        const li = document.createElement('li');
        li.className = ('student-item of');
        const div2 = document.createElement('div');
        div2.className = ('joined-details');
        const span2 = document.createElement('span');
        span2.className = ('date');
        span2.textContent = `Joined: ${data[i].registered.date}`;
        div2.appendChild(span2);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(span);
        li.appendChild(div);
        li.appendChild(div2);
        ul.appendChild(li);

    }
}


/*
Create the `addPagination` function
*/


// Call functions
displayPage(data, 1);
