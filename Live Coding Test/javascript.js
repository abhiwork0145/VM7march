function addStudent()
{
    var first_name = document.sample.First_name.value;
    var last_name = document.sample.Last_name.value;
    var email = document.sample.email.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));  
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML= first_name 
    td2.innerHTML= last_name
    td3.innerHTML= email
    td4.innerHTML= '<input type="button" id="del_button" name="delete" value="Delete" onclick="deleteStudent(this);">'
    td5.innerHTML= '<input type="button" id="update_button" name="update" value="Update" onclick="updateStudent(this);">'

    document.getElementById("table1").appendChild(tr)

}

function deleteStudent(Stud){
    var s = Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}

function updateStudent(stud){
    var first_name = document.sample.First_name.value;
    var last_name = document.sample.Last_name.value;
    var email = document.sample.email.value;
    var s = stud.parentNode.parentNode;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));  
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML= '<input type="text" name="First_name1">';
    td2.innerHTML= '<input type="text" name="last_name1">';
    td3.innerHTML= '<input type="email" name="email1">';
    td4.innerHTML= '<input type="button" id="del_button" name="delete" value="Delete" onclick="deleteStudent(this);">'
    td5.innerHTML= '<input type="button" id="update_button" name="update" value="Update" onclick="add_Student(this);">'

    document.getElementById("table1").replaceChild(tr, s);

}

function add_Student(stud)
{
    var first_name = document.sample.First_name1.value;
    var last_name = document.sample.last_name1.value;
    var email = document.sample.email1.value;
    var s = stud.parentNode.parentNode;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));  
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML= first_name;
    td2.innerHTML= last_name;
    td3.innerHTML= email;
    td4.innerHTML= '<input type="button" id="del_button" name="delete" value="Delete" onclick="deleteStudent(this);">'
    td5.innerHTML= '<input type="button" id="update_button" name="update" value="Update" onclick="updateStudent(this);">'

    document.getElementById("table1").replaceChild(tr, s);
}