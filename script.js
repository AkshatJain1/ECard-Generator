
function openStep(step,element){
    //Hide all elements with class = "tabcontent" by default
    var tabcontent = document.getElementsByClassName('tab');
    for(var i = 0; i < tabcontent.length;i++){
      tabcontent[i].style.display = "none";
    }

    document.getElementById(step).style.display = "block";



}
document.getElementById("defaultOpen").click();
