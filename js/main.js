
    
    function showRegister() {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("register-section").style.display = "block";
    }

    function showLogin() {
        document.getElementById("login-section").style.display = "block";
        document.getElementById("register-section").style.display = "none";
    }


    function openModal(title, desc) {
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-desc").innerText = desc;
        document.getElementById("myModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }
