const firebaseConfig = {
  apiKey: "AIzaSyBpki_ZDr-gaNCN7W6niUKfwIeSE_Eb49U",
  authDomain: "laundry-1522f.firebaseapp.com",
  projectId: "laundry-1522f",
  storageBucket: "laundry-1522f.firebasestorage.app",
  messagingSenderId: "1093125361218",
  appId: "1:1093125361218:web:f18e440eb0874bedd3a7db",
  measurementId: "G-KCX3HW4D5W"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const functions = firebase.functions();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', function() {
    document.querySelectorAll('.laundry-image').forEach(image => {
        const rect = image.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            image.style.transform = `translateY(${rect.top * -0.2}px)`;
        }
    });
});


function showMessage(element, text, isSuccess) {
    element.textContent = text;
    element.style.backgroundColor = isSuccess ? '#10B981' : '#EF4444';
    element.style.display = 'block';
}

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('userSuccess');
    const userEmail = form.elements.userEmail.value;
    const userName = form.elements.userName.value;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const addUserTester = functions.httpsCallable('addUserTester');
    addUserTester({ email: userEmail, name: userName })
        .then(result => {
            analytics.logEvent('join_waitlist', { user_type: 'customer' });
            showMessage(successMsg, "Thank you! You've been added to the tester waitlist.", true);
            form.reset();
        })
        .catch(error => {
            console.error("Error adding user tester:", error);
            showMessage(successMsg, `Error: ${error.message}`, false);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Join Waitlist';
        });
});

// Business Form
document.getElementById('businessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('businessSuccess');
    successMsg.style.display = 'block';
    this.reset();

    const selectedServices = [];
    form.querySelectorAll('input[name="services"]:checked').forEach(checkbox => {
        selectedServices.push(checkbox.value);
    });

    const businessData = {
        businessName: form.elements.businessName.value,
        ownerName: form.elements.ownerName.value,
        businessEmail: form.elements.businessEmail.value,
        businessPhone: form.elements.businessPhone.value,
        businessLocation: form.elements.businessLocation.value,
        services: selectedServices,
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const addBusiness = functions.httpsCallable('addBusiness');
    addBusiness({ businessData: businessData })
        .then(result => {
            analytics.logEvent('join_waitlist', { user_type: 'provider' });
            showMessage(successMsg, "Thank you! We'll contact you soon with partnership details.", true);
            form.reset();
        })
        .catch(error => {
            console.error("Error adding business:", error);
            showMessage(successMsg, `Error: ${error.message}`, false);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Join Partner Waitlist';
        });
});