function validate()
{
    let cname = document.forms["form1"]['cname'].value;
    let cemail = document.forms["form1"]['cemail'].value;
    let cphone = document.forms["form1"]['cphone'].value;
    let cquery = document.forms["form1"]['cquery'].value;

    if (cname=="")
    {
        alert("Please Enter Name.");
    }

    if(cemail=="")
    {
        alert("Please Enter Email.");
    }

    if(cphone=="")
    {
        alert("Please Enter Contact Number.");
    }

    if(cquery=="")
    {
        alert("Please Enter Your Query.");
    }
}