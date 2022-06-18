<!DOCTYPE HTML>
<HTML>
<head>
<title>driver application form</title>
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
</head>
<body>
<STYLE>
body{
background-color:#DBF9FC;
}
div{
background-color:yellow;
border:1px solid black;
width:110px;
margin-left:478px;
font-size:250px;
padding:800px;
}
</style>
<style>
.sample{
background-image:url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v705-sasi-17_1_0.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=74ed1992301a58cfc7f9e3a13de61760.jpg");
color:blue;
font-family:arial,serif;
margin-left:480px;




}
</style>
<div>
DRIVER APPLICATION FORM
</div>
<br>
<hr>
<div class="sample">
<form name="f1" >
<label for="fname"><b>ENTER YOUR FIRST NAME :</b></LABEL><br><BR>
<input type="text" name="fname" ><br>
<p id="userfirstname"></p>



<label for="lname"><b>ENTER YOUR LAST NAME :</b></LABEL><br><br>
<input type="text" name="lname"><br>
<p id="userlastname"></p>



<label for="password"><b>Password:</b>
<br>
<input type="password" name="password" />
<br>
<p id="checkpassword"></p>
<b>Re-enter Password:</b>
<br>
<input type="password" name="password2"/><br>
<p id="checkpassword1"></p>
</label>



<label for="gender"><b>GENDER :</b></label><br><br>
<input type="radio" id="gender" name="gender">MALE<BR>
<input type="radio" id="gender" name="gender">FEMALE<BR><br>
<label for="dob"><B>DATE OF BIRTH</B></LABEL><br><br>
<input type="date" id="dob" name="dob"><br><br>
<label for="address"><B>ADDRESS</B></LABEL><br>
<TEXTAREA TYPE="TEXT" id="address" name="address"></textarea><br><br>



<label for="contact"><B>CONTACT NUMBER</B></label>
<input type="text" name="contact"><br>




<label for="emailid"><B>EMAIL ID</B></label><br>
<INPUT TYPE="email" name="emailid"><br>



<label for="vehicle"><b>TYPE OF VEHICLE</B></LABEL><BR>
<select id="vehicle">
<option>PLEASE SELECT</option>
<option>VAN</option>
<option>SUV</option>
<option>SEDAN</option>
<option>INNOVA</option>
<option>BUS</option>
</SELECT>
<br>
<br>
<label for="licno"><b>DRIVER'S LICENSE NUMBER</b></label><br>
<input type="text" id="licno" name="licno"><br><br>



<center>
<input type="button" value="Submit" onclick="validateform()" style="font-size:30px;font:BOLD,arial,serif;"/>



</center>
</form>
</div>
</body>
</html>
