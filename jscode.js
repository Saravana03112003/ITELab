<script type="text/javascript">
function validateform(){



firstname=f1.fname.value;
lastname=f1.lname.value();



if(firstname==null||firstname==""){
document.getElementById("userfirstname").innerHTML="Firstname can't be blank";
document.getElementById("userfirstname").style.color = "red";
}



if(lastname==null||lastname==""){
document.getElementById("userlastname").innerHTML="Lastname can't be blank";
document.getElementById("userlastname").style.color = "red";
}



firstpassword=f1.password.value();
secondpassword=f1.password2.value();



if(firstpassword!=secondpassword) {
document.getElementById("checkpassword1").innerHTML="Password must be same!";
document.getElementById("checkpassword1").style.color = "red";




if(firstpassword.length<6){
document.getElementById("checkpassword").innerHTML="Password must be at least 6 characters long!";
document.getElementById("checkpassword").style.color = "red";




}



</script>
