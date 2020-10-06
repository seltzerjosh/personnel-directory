//Using strict mode to build good habits, not necessary to run this code.
"use strict";

//Sets maximum number of results per page
const itemsPerPage = 9;

//Search bar
function searchBar() {
    const header = document.querySelector('header');
    const form = document.createElement('form');
    header.appendChild(form);
    const label = document.createElement('LABEL');
    label.htmlFor = ('search');
    label.className = ('student-search');
    form.appendChild(label);
    const input = document.createElement('input')
    input.id = 'search';
    input.placeholder = 'Search by name...';
    label.appendChild(input);
    const button = document.createElement('button')
    button.type = 'button';
    button.id = 'submit';
    label.appendChild(button);
    document.querySelector('#submit').insertAdjacentHTML('afterbegin', '<img src="img/icn-search.svg" alt="Search icon">');
}

//Show any given page
function showPage(list, page) {
    if (list) {
        const startIndex = (page * itemsPerPage) - itemsPerPage;
        const endIndex = lastIndex();
        const ul = document.querySelector('ul.student-list');
        ul.innerHTML = '';

        for (let i = startIndex; (i >= startIndex && i < endIndex); i++) {
            const img = document.createElement('img');
            img.className = 'avatar';
            img.src = list[i].picture.medium;
            img.alt = 'profile picture';
            const h3 = document.createElement('h3');
            h3.textContent = `${list[i].name.first} ${list[i].name.last}`;
            const span = document.createElement('span');
            span.textContent = list[i].email;
            const div = document.createElement('div');
            const li = document.createElement('li');
            li.className = ('student-item of');
            const div2 = document.createElement('div');
            div2.className = ('joined-details');
            const span2 = document.createElement('span');
            span2.className = ('date');
            span2.textContent = `Joined: ${list[i].registered.date}`;
            div2.appendChild(span2);
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(span);
            li.appendChild(div);
            li.appendChild(div2);
            ul.appendChild(li);

        }
        //Inserts a No Results Found message if a search result does not have any results
    } else {
        const ul = document.querySelector('ul.student-list');
        ul.innerHTML = '<span>No Matches Found</span>';

    }
    //Allows for the last page to be dynamic based on number of results
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
                showPage(list, e.target.textContent);
            }
        }
    )
}

// Call functions to set the page
searchBar();
showPage(data, 1);
pagination(data);

//Search functionality setup
const search = document.querySelector('#search');
const submit = document.querySelector('#submit');

//basic search function based on first and last name
function performSearch(searchInput, names) {
    const searchedList = [];
    for (let i = 0; i < names.length; i++) {
        if ((searchInput.value.length !== 0) && (names[i].name.first.toLowerCase().includes(searchInput.value.toLowerCase())) ||
        ((searchInput.value.length !== 0) && (names[i].name.last.toLowerCase().includes(searchInput.value.toLowerCase())))) {

            searchedList.push(names[i]);
        }
    }
    if (searchInput.value.length === 0) {
        return data;
    } else if (searchedList.length === 0) {
        return false;
    } else {
        return searchedList;
    }
}

//event listener for a search by click if not registered by keyup event listener
submit.addEventListener('click', (event) => {
    event.preventDefault();
    showPage(performSearch(search, data), 1);
    pagination(performSearch(search, data));
})

//event listener to search given list and refresh pagination and results w/reset to page1
search.addEventListener('keyup', (event) => {
    event.preventDefault();
    showPage(performSearch(search, data), 1);
    pagination(performSearch(search, data));
})
//TODO: Refactor