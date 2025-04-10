document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });

    // Handle amount button selection
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmount = document.getElementById('customAmount');

    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Set custom amount input to selected value
            customAmount.value = parseInt(this.dataset.amount).toLocaleString('en-UG');
        });
    });

    // Handle custom amount input
    customAmount.addEventListener('input', function() {
        let value = this.value.replace(/[^0-9]/g, '');
        if (value) {
            value = parseInt(value).toLocaleString('en-UG');
            this.value = value;
        }
        // Remove active class from all buttons when custom amount is entered
        amountButtons.forEach(btn => btn.classList.remove('active'));
    });

    // Handle payment method selection
    const paymentMethods = document.getElementsByName('paymentMethod');
    const mobileMoneyDetails = document.getElementById('mobileMoneyDetails');
    const bankDetails = document.getElementById('bankDetails');
    const cardDetails = document.getElementById('cardDetails');

    function togglePaymentDetails() {
        mobileMoneyDetails.classList.add('d-none');
        bankDetails.classList.add('d-none');
        cardDetails.classList.add('d-none');

        if (document.getElementById('mtn').checked || document.getElementById('airtel').checked) {
            mobileMoneyDetails.classList.remove('d-none');
        } else if (document.getElementById('bank').checked) {
            bankDetails.classList.remove('d-none');
        } else if (document.getElementById('card').checked) {
            cardDetails.classList.remove('d-none');
        }
    }

    paymentMethods.forEach(method => {
        method.addEventListener('change', togglePaymentDetails);
    });

    // Form validation
    const form = document.getElementById('paymentForm');
    form?.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});