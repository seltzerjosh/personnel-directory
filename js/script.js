const itemsPerPage = 9;

//Search bar
function searchBar () {
    const header = document.querySelector('header');

    const form = document.createElement('form');

    const label = document.createElement('LABEL');
    label.htmlFor = ('search');
    label.className = ('student-search');

    const input = document.createElement('input')
    input.id = 'search'
    input.placeholder = 'Search by name...';

    const button = document.createElement('button')
    button.type = 'button'

    const image = document.createElement('IMG')
    image.src = 'img/icn-search.svg';

    //TODO: insert image to button
    label.appendChild(input);
    label.appendChild(button);
    form.appendChild(label);
    header.appendChild(form);
}



/*label
*   input
*   button*/
// Create the `showPage` function
function showPage(list, page) {
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = lastIndex();
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

    function lastIndex() {
        const defaultEnd = (page * itemsPerPage);
        const dynamicEnd = (list.length);
        if (dynamicEnd < defaultEnd) {
            return dynamicEnd
        } else {
            return defaultEnd
        }
    }
}
// Create the `addPagination` function
function pagination(list) {
    const pages = Math.ceil(list.length / 9);
    const linkList = document.querySelector('ul.link-list');
    linkList.innerHTML = '';
    for (let i = 1; i <= pages; i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = i;
        const li = document.createElement('li');
        li.appendChild(button);
        linkList.appendChild(li);
    }
    let activePage = linkList.querySelector('button');
    activePage.className = 'active';
    linkList.addEventListener('click', (e) => {
            if (e.target.tagName == 'BUTTON') {
                const ul = e.target.parentNode.parentNode;
                const lis = ul.children;
                for (let i = 0; i < lis.length; i++) {
                    lis[i].firstElementChild.className = '';
                }
                e.target.className = 'active';
                showPage(data, e.target.textContent);
            }
        }
    )
}
// Call functions
searchBar();
showPage(data, 1);
pagination(data);
/*
TODO: Make search bar functional
  */