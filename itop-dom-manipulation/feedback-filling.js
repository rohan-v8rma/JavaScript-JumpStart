// Run this after logging in

function fillFeedback(num) {
    const button = document.querySelector('td > button.btn-warning');
    
    if(button.innerText.trim() === 'Post') {
        button.click();
        setTimeout(() => {
            const inputs = document.querySelectorAll('input[type="radio"][value="5"].form-control');
            inputs.forEach((input) => input.click());
            const textBox = document.querySelector('textarea.form-control');
            if(textBox !== null) {
                let msg;
                switch(num) {
                case 0:
                    msg = 'Great. Learnt a lot.';
                    break;
                case 1:
                    msg = 'Good';
                    break;
                case 2:
                    msg = 'Thanks for teaching with such passion.';
                    break;
                case 3:
                    msg = 'Learnt concepts thoroughly';
                    break;
                default:
                    msg = 'Learnt concepts thoroughly';
                    break;
                }   

                textBox.value += msg;
            }
            const submitButton = document.querySelector('button.btn-success');
            submitButton.click();
        
            setTimeout(() => {
                if(document.querySelector('td > button.btn-warning') !== null) {
                    fillFeedback((num + 1) % 4);   
                }
            }, 1000)
        }, 1000);
    }
};