const output = document.getElementById("output");
const strength = document.getElementById("strength");
const toast = document.getElementById("toast");
const multiList = document.getElementById("multiList");
const multiSection = document.getElementById("multiOutputSection");

document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("regenBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyPassword);
document.getElementById("saveBtn").addEventListener("click", savePassword);
document.getElementById("toggleVisibility").addEventListener("click", toggleVisibility);
document.getElementById("multiBtn").addEventListener("click", generateMultiple);
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    if (isNaN(length) || length < 15 || length > 50) {
        showToast("Enter a number between 15 and 50");
        return;
    }

    const chars = [
        'a','b','c','d','e','f','g','h','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','J','K','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
        '2','3','4','6','7','9',
        '!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','<','>','?','.'
    ];

    let result = "";
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        result += chars[array[i] % chars.length];
    }

    output.textContent = result;
    updateStrength(result);
}

function updateStrength(pw) {
    const len = pw.length;
    if (len < 18) strength.textContent = "Weak";
    else if (len < 25) strength.textContent = "Medium";
    else if (len < 35) strength.textContent = "Strong";
    else strength.textContent = "Very Strong";
}

function copyPassword() {
    navigator.clipboard.writeText(output.textContent);
    showToast("Copied to clipboard");
}

function savePassword() {
    const blob = new Blob([output.textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "password.txt";
    link.click();
    showToast("Saved to file");
}

function toggleVisibility() {
    output.style.filter = output.style.filter ? "" : "blur(6px)";
}

function generateMultiple() {
    multiList.innerHTML = "";
    multiSection.hidden = false;

    for (let i = 0; i < 5; i++) {
        generatePassword();
        const li = document.createElement("li");
        li.textContent = output.textContent;
        multiList.appendChild(li);
    }

    showToast("Generated 5 passwords");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function showToast(msg) {
    toast.textContent = msg;
    toast.style.opacity = 1;
    setTimeout(() => toast.style.opacity = 0, 2000);
}
