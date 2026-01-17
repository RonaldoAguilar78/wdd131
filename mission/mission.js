let selectElem = document.querySelector('select');
let logo = document.querySelector('img');


selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        document.body.style.background = '#000000';
        document.body.style.color = 'white';

        content.style.background = '#000000';
        content.style.border = '2px solid #ffffff';

        logo.src = 'images/byuiblack.png';

    } else if (current === 'light') {
        document.body.style.background = '#ffffff';
        document.body.style.color = 'black';

        content.style.background = 'white';
        content.style.border = '2px solid #000000';

        logo.src = 'images/logo.png';
    }
}
