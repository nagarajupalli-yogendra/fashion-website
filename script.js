let search = document.querySelector('.searchbar');

document.querySelector('#search').onclick=()=>{
    search.classList.toggle('active');
    favorite.classList.remove("active");
    checkout.classList.remove("active");
    login.classList.remove("active");
}

let favorite = document.querySelector('.favorite');

document.querySelector('#favorite').onclick=()=>{
    search.classList.remove('active');
    favorite.classList.toggle('active');
    checkout.classList.remove("active");
    login.classList.remove("active");
}

let checkout = document.querySelector('.checkout');

document.querySelector('#checkout').onclick=()=>{
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.toggle('active');
    login.classList.remove("active");
}

let login = document.querySelector('.login');

document.querySelector('#login').onclick=()=>{
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.toggle('active');
}

window.onscroll=()=>{
    search.classList.remove("active");
    favorite.classList.remove("active");
    checkout.classList.remove("active");
    login.classList.remove("active");
}