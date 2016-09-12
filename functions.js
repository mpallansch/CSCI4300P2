function correctCase(id) {
    var name = document.getElementById(id).value; 
    var temp = "";
    name = name.toLowerCase();
    console.log(name);
    name = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(name);
    
    
    for(i=1;i< name.length;i = i + 1){
        if(name.charAt(i) == " "){
            temp = name.substr(0,i); 
            name = temp + " " + name.charAt(i+1).toUpperCase() + name.slice(i+2);
            i = i + 1;
        }
        else if(name.charAt(i) == "-"){
            temp = name.substr(0,i);
            name = temp + "-" + name.charAt(i+1).toUpperCase() + name.slice(i+2);
            i= i + 1;
        }
    }
document.getElementById(id).value = name;
}
