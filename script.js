// JavaScript for theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Light Theme';
    } else {
        themeToggle.textContent = 'Dark Theme';
    }
});

// Tab switching logic
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// Initialize to show the home section by default
document.getElementById('home').classList.add('active');

// Function to generate a password with simple words (only letters)
function generateSimplePassword(length) {
    const simpleWords = ["apple", "banana", "cherry", "orange", "pear", "grape", "melon", "kiwi", "peach", "plum"];
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * simpleWords.length);
        password += simpleWords[randomIndex];
    }
    return password.slice(0, length);
}

// Function to generate a password with slightly complex words (letters and numbers)
function generateSlightlyComplexPassword(length) {
    const words = ["password", "secure", "login", "access", "secret", "protected", "private", "confidential", "unlock", "key"];
    const alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    // Ensure the password contains at least one letter and one number
    password += getRandomChar(words[Math.floor(Math.random() * words.length)]);
    password += getRandomChar(alphanumeric);

    // Generate the rest of the password
    for (let i = 2; i < length; i++) {
        if (i % 2 === 0) {
            // Add a random word from the words array
            password += getRandomChar(words[Math.floor(Math.random() * words.length)]);
        } else {
            // Add a random alphanumeric character
            password += getRandomChar(alphanumeric);
        }
    }
    return password;
}

// Function to generate a password with more complex words and characters (letters, numbers, and special characters)
function generateComplexPassword(length) {
    const complexWords = ["P@ssw0rd", "S3cur3", "L0g!n", "Acc3ss", "S3cr3t", "Pr0t3ct3d", "Priv@t3", "C0nf!d3nt!@l", "Unl0ck", "K3y"];
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * complexWords.length);
        password += complexWords[randomIndex];
    }
    return password.slice(0, length);
}

// Function to generate a password based on the selected complexity level
function generatePassword() {
    const length = document.getElementById('length').value;
    const complexity = document.querySelector('input[name="complexity"]:checked').value;
    let password = "";

    if (complexity === "easy") {
        password = generateSimplePassword(length);
    } else if (complexity === "mid") {
        password = generateSlightlyComplexPassword(length);
    } else if (complexity === "complex") {
        password = generateComplexPassword(length);
    }

    document.getElementById('passwordDisplay').textContent = password;
}

// Other auxiliary functions (getRandomChar, shuffleArray, copyPassword) remain unchanged and are assumed to be defined elsewhere.

function getRandomChar(charset) {
    return charset[Math.floor(Math.random() * charset.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function copyPassword() {
    const password = document.getElementById('passwordDisplay').textContent;
    const copyNotification = document.getElementById('copyNotification');
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            copyNotification.textContent = 'Password copied to clipboard!';
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 4000);
        }).catch(err => {
            copyNotification.textContent = 'Failed to copy password.';
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 4000);
        });
    } else {
        copyNotification.textContent = 'No password to copy. Please generate a password first.';
        copyNotification.classList.add('show');
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 4000);
    }
}

function switchToPasswordGenerator() {
    // Remove 'active' class from all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Add 'active' class to the password generator section
    document.getElementById('pwgen').classList.add('active');
}

function switchToGD_Installer() {
    // Remove 'active' class from all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Add 'active' class to the Gedone-Installer section (replace with actual ID if available)
    document.getElementById('Gedone-Installer').classList.add('active');
}

function switchToPlaceholder() {
    // Remove 'active' class from all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Add 'active' class to the Gedone-Installer section (replace with actual ID if available)
    document.getElementById('Placeholder').classList.add('active');
}

