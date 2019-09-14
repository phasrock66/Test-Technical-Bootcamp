function validasi(form){
  if (form.nama.value == ""){
    alert("Nama user harus kombinasi dari huruf kecil, huruf besar dan angka dengan panjang 5-9 karakter. 
	Username tidak boleh diawali dengan angka / karakter special !");
    form.nama.focus();
    return (false);
  }else if(form.katasandi.value == ""){
      alert("Password harus diisi untuk keamanan!");
      form.katasandi.focus();
      return(false);
  }else if (form.katasandi.value.length < 6){
    alert("Panjang password minimal 8 karater!");
    form.nama.focus();
    return (false);
  }else if(form.katasandi2.value == ""){
      alert("password harus kombinasi dari huruf kecil, huruf besar minimal satu karakter, angka minimal satu karakter, dan karakter spesial minimal satu karakter dan harus memiliki karakter simbol ‘@’!");
      form.katasandi2.focus();
      return(false);
  }else if (form.katasandi2.value != form.katasandi.value){
    alert("Password tidak sama, silahkan ulangi");
    form.nama.focus();
    return (false);
  }
return (true);
}