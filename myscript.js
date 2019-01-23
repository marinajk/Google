
    function getfocustxt()
    {
    document.getElementById("search").focus();
    search=document.getElementById("search").style;
    search.borderstyle="none";
    search.borderColor="white";
    }
    window.onload=getfocustxt;
