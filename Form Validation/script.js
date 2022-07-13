$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();    
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();


    var error=true;
    var error_passwd=true;
    var error_confirm_passwd=true;
    var error_email=true;

    $('#username').keyup(function(){
        username_validation();
    });
    function username_validation()
    {
        var username_val=$('#username').val();
        if(username_val.length=="")
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Required Field');
            $('#usernamevalidation').css('color','orange');
            error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }

        if(username_val.length<3 || username_val.length>10)
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username must be 3 letters or more');
            $('#usernamevalidation').css('color','orange');
            error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
    }
    $('#email').keyup(function(){
        email_validation();
    });
    function email_validation()
    {
        var email_val=$('#email').val();
        if(email_val.length==0)
        {
            $('#emailvalidation').show();
            $('#emailvalidation').html('Required');
            $('#emailvalidation').css('color','orange');
            error_email=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(emailregex.test(email_val))
        {
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('Enter a valid email-id');
            $('#emailvalidation').css('color','orange');
            error_email=false;
            return false;
        }
    }
    $('#password').keyup(function(){
        password_validation();
    });
    function password_validation(){
        let passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let passwordVal = $('#password').val();
        if(passRegex.test(passwordVal)){
          $('#passwordvalidation').hide();
        }
        else{
          $('#passwordvalidation').show();
          $('#passwordvalidation').html('Invalid');
          $('#passwordvalidation').css('color','orange');
          error_passwd = false;
          return false;
        }
      }
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });
    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val)
        {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password and confirm password should be same');
            $('#confirmpasswordvalidation').css('color','orange');
            error_confirm_passwd=false;
            return false;
        }
        else
        {
            $('#confirmpasswordvalidation').hide();
        }
    }
    $('#submitvalidation').click(function()
    {
        username_validation();
        password_validation();
        confirm_password();
        if(error==true && error_passwd==true && error_confirm_passwd==true && error_email==true)
        {
            return true;
        }
        else
        {
            return false;
        }
    });
});
