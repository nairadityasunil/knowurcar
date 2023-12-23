function validate(event) {
    event.preventDefault();
    let cname = document.forms["form2"]['cname'].value;
    let cemail = document.forms["form2"]['cemail'].value;
    let cphone = document.forms["form2"]['cphone'].value;
    let cquery = document.forms["form2"]['cquery'].value;
    let nerror = document.getElementById("nerror");
    let eerror = document.getElementById("eerror");
    let perror = document.getElementById("perror");
    let qerror = document.getElementById("qerror");



    // Name Field Validation
    if (cname === "") {
        nerror.style.display = "block";
        nerror.innerHTML = "<span style='color: red;'>" +
            "** Please Enter Name **</span>";
        // return;
    }
    else {
        const name_pat = /^[a-zA-Z]+$/;
        if (!name_pat.test(cname)) {
            nerror.style.display = "block";
            nerror.innerHTML = "<span style='color: red;'>" +
                "** Please Enter Valid Name **</span>";
        }

    }

    // Email Field Validation
    if (cemail === "") {
        eerror.style.display = "block";
        eerror.innerHTML = "<span style='color: red;'>" +
            "** Please Enter Email Address **</span>";
    }

    // Contact Number Field Validation
    if (cphone === "") {
        perror.style.display = "block";
        perror.innerHTML = "<span style='color: red;'>" +
            "** Please Enter Phone Number **</span>";
    }
    else {
        const ph_pattern = /^\d{10}$/
        if (!ph_pattern.test(cphone)) {
            perror.style.display = "block";
            perror.innerHTML = "<span style='color: red;'>" +
                "** Please Enter 10 Digit Valid Phone Number **</span>";
        }
    }

    // Query Field Validation
    if (cquery === "") {
        qerror.style.display = "block";
        qerror.innerHTML = "<span style='color: red;'>" +
            "** Please Enter Your Query **</span>";
    }
}

function hide_nerror() {
    let nerror = document.getElementById("nerror");
    nerror.style.display = "none";
}

function hide_eerror() {
    let eerror = document.getElementById("eerror");
    eerror.style.display = "none";
}

function hide_perror() {
    let perror = document.getElementById("perror");
    perror.style.display = "none";
}

function hide_qerror() {
    let qerror = document.getElementById("qerror");
    qerror.style.display = "none";
}