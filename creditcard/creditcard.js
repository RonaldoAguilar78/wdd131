document.addEventListener('DOMContentLoaded', () => {
    

    function displayError(msg) {
        document.querySelector('.errors').textContent = msg;
    }

    function isCardNumberValid(number) {
        return number === '1234123412341234';
    }


    const cardInput = document.getElementById('creditCardNumber');
    const monthField = document.getElementById('month');
    const yearField = document.getElementById('year');
    const cvcField = document.getElementById('cvc');

    if(cardInput) {
        cardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value.match(/.{1,4}/g)?.join(' ') || value;
        });
    }

    if(cvcField) {
        cvcField.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    if(monthField && yearField) {
        monthField.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
            if(e.target.value.length === 2) {
                yearField.focus();
            }
        });
        yearField.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }


    function submitHandler(event) {
        event.preventDefault();
        
        let errorMsg = '';
        displayError('');

        const rawValue = cardInput.value.trim();
        const cardNum = rawValue.replace(/\s/g, '');

        if (!/^\d{16}$/.test(cardNum)) {
            errorMsg += 'Card number must be 16 digits.\n';
        } else if (!isCardNumberValid(cardNum)) {
            errorMsg += 'Card number is not valid (Test with: 1234 1234 1234 1234).\n';
        }

        const expMonth = Number(monthField.value);
        const expYear = Number(yearField.value);
        
        const currentDate = new Date();
        const currentYearTwoDigits = Number(currentDate.getFullYear().toString().substr(-2));
        const currentMonth = currentDate.getMonth() + 1;

        if (expYear < currentYearTwoDigits || (expYear === currentYearTwoDigits && expMonth < currentMonth)) {
            errorMsg += 'Card is expired.\n';
        }
        
        if (expMonth < 1 || expMonth > 12) {
            errorMsg += 'Invalid month.\n';
        }

        if (errorMsg !== '') {
            displayError(errorMsg);
            return;
        }

        const formContainer = document.getElementById('checkoutForm');
        formContainer.innerHTML = '<h2 style="text-align:center; margin-top: 50px;">Thank you for your purchase.</h2>';
    }

    document.querySelector('#checkoutForm').addEventListener('submit', submitHandler);
});