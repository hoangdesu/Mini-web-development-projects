let search = document.querySelector('#search');
let items = document.querySelectorAll('.item');

// console.log(items);

const filterNames = () => {
    let value = search.value.toLowerCase();
    // console.log(value);
    items.forEach(item => {
        let anchor = item.getElementsByTagName('a')[0];
        let name = anchor.innerHTML.toLowerCase();
        // console.log(name);
    
        if (name.indexOf(value) > -1) {
            item.classList.remove('is-hidden');
        } else {
            item.classList.add('is-hidden');
            // item.classList.add('has-background-white');
        }

    })
}

search.addEventListener('keyup', filterNames)
