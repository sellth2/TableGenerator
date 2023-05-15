const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

function addNewRow(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const lname = document.getElementById("lname").value;
    const pnumber = document.getElementById("pnumber").value;
    const btn = e.target;
    const cloTable = btn.closest('table');
    const tr = cloTable.insertRow();
    const td0 = tr.insertCell();
    td0.appendChild(document.createTextNode(name));
    td0.style.border = '1px solid black';
    //td0.style.fontWeight = 'bold';
    const td1 = tr.insertCell();
    td1.appendChild(document.createTextNode(lname));
    td1.style.border = '1px solid black';
    //td1.style.fontWeight = 'bold';
    const td2 = tr.insertCell();
    td2.appendChild(document.createTextNode(pnumber));
    td2.style.border = '1px solid black';
    //td2.style.fontWeight = 'bold';
    const addBtn = tr.insertCell();
    addBtn.innerHTML+= `<td><button class="deleteBtn">Delete</button></td>`
    addBtn.style.border= '1px solid black';
    addBtn.style.borderRadius = "3px";
    addBtn.style.cursor= "pointer";
    addBtn.addEventListener("click",onDeleteRow);
}
function addDefaultRow(){
    const name = document.getElementById("name").value;
    const lname = document.getElementById("lname").value;
    const pnumber = document.getElementById("pnumber").value;
    tbodyEl.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${lname}</td>
            <td>${pnumber}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
   `;
}
function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
}
function onDeleteTable(e) {
    if (!e.target.classList.contains("dltTableBtn")) {
        return;
    }
    const btn = e.target;
    btn.closest('table').remove();
}
function onDeleteDefaultTable() {
    tbodyEl.closest('table').remove();
}

function deleteAll(e) {
    e.preventDefault();
    /*if (!tableEl.classList.contains("deleteBtn")) {
        alert("in if");
        return;
    }*/
    const btn = e.target;
    const nodeList = document.querySelectorAll("td");
    for (let i = 0; i < nodeList.length; i++) {
        document.querySelector("td").remove();
    }



}
function newTable(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const lname = document.getElementById("lname").value;
    const pnumber = document.getElementById("pnumber").value;
    const body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '500px';
    tbl.style.border = '1px solid black';
    const tr = tbl.insertRow();
    const td0 = tr.insertCell();
    td0.appendChild(document.createTextNode(`Name`));
    td0.style.border = '1px solid black';
    td0.style.fontWeight = 'bold';
    const td1 = tr.insertCell();
    td1.appendChild(document.createTextNode(`LastName`));
    td1.style.border = '1px solid black';
    td1.style.fontWeight = 'bold';
    const td2 = tr.insertCell();
    td2.appendChild(document.createTextNode(`Phone Number`));
    td2.style.border = '1px solid black';
    td2.style.fontWeight = 'bold';
    const addBtn = tr.insertCell();
    addBtn.innerHTML+= `<td><button class="addBtn">Add To This Table</button></td>`
    addBtn.style.border= '1px solid black';
    addBtn.style.borderRadius = "3px";
    addBtn.style.cursor= "pointer";
    addBtn.addEventListener("click",addNewRow);
    const dltTableBtn = tr.insertCell();
    dltTableBtn.innerHTML+= `<td><button class="dltTableBtn">Delete This Table</button></td>`
    
    dltTableBtn.style.border= '1px solid black';
    dltTableBtn.style.borderRadius = "3px";
    dltTableBtn.style.cursor= "pointer";
    dltTableBtn.addEventListener("click",onDeleteTable);
    body.appendChild(tbl);
}

function clearForm(e) {
    e.preventDefault();
    document.getElementById("name").value = '';
    document.getElementById("lname").value= '';
    document.getElementById("pnumber").value= ''; 
    
}


document.getElementById("delete-all").addEventListener("click", deleteAll);
document.getElementById("clear-form").addEventListener("click", clearForm);
document.getElementById("create-new-table").addEventListener("click", newTable);
tableEl.addEventListener('click', onDeleteRow);