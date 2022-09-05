import _ from 'lodash';
import './style.css';
import './style2.css';

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
function logout(){
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("Foto");
  localStorage.removeItem("Email");
  deleteAllCookies();
  window.location.href="https://localhost/todolist/dist/index.html";
}
function menuLateral(){
  if(document.getElementById("cle").style.left=="-30%"){
      document.getElementById("cle").style.left="0%";
      document.getElementById("cle").style.position="relative";
      document.getElementById("corpo").style.gridTemplateColumns="260px auto";
  }else{
      document.getElementById("cle").style.left="-30%";
      document.getElementById("cle").style.position="absolute";
      document.getElementById("corpo").style.gridTemplateColumns="auto";
  }
}
window.logout=logout;
window.menuLateral=menuLateral;
if(localStorage.getItem("TaskNumber")==null){
  localStorage.setItem("TaskNumber",0);
}
class Task{
  constructor(title, description, project, date, priority){
    this.title = title;
    this.description=description;
    this.project=project;
    this.date=date;
    this.priority=priority;
  }
  updateStorage(){
    const taskNumber=localStorage.getItem("TaskNumber");
    const email = localStorage.getItem("Email");
    var n=parseInt(taskNumber);
    n++;
    const task=[this.title, this.description, this.project, this.date, this.priority, n, email];
    localStorage.setItem("task"+n,task);
    localStorage.setItem("TaskNumber", n);
  }
  imprimir(taskNumber){
    const div = document.createElement("div");
    div.setAttribute("class","task");
    div.setAttribute("id","task"+taskNumber);
    document.getElementById("cldd").appendChild(div);
    const table = document.createElement("table");
    table.setAttribute("class", "tabela");
    table.setAttribute("id", "tabela"+taskNumber);
    document.getElementById("task"+taskNumber).appendChild(table);
    //Create Line 1:
    const tr1 = document.createElement("tr");
    tr1.setAttribute("id","tr"+taskNumber+"1");
    document.getElementById("tabela"+taskNumber).appendChild(tr1);
    const th1 = document.createElement("th");
    th1.setAttribute("colspan", "5");
    th1.setAttribute("class", "ct");
    th1.innerHTML=this.title;
    document.getElementById("tr"+taskNumber+"1").appendChild(th1);
    //Create Line 2:
    const tr2 = document.createElement("tr");
    tr2.setAttribute("id", "tr"+taskNumber+"2");
    document.getElementById("tabela"+taskNumber).appendChild(tr2);
    const th2 = document.createElement("th");
    th2.setAttribute("class", "cldttext2");
    th2.innerHTML="Description: ";
    document.getElementById("tr"+taskNumber+"2").appendChild(th2);
    const th3 = document.createElement("th");
    th3.setAttribute("colspan","4");
    th3.setAttribute("class", "conteudo");
    th3.innerHTML=this.description;
    document.getElementById("tr"+taskNumber+"2").appendChild(th3);
    //Create Line 3:
    const tr3 = document.createElement("tr");
    tr3.setAttribute("id", "tr"+taskNumber+"3");
    document.getElementById("tabela"+taskNumber).appendChild(tr3);
    const th4 = document.createElement("th");
    th4.setAttribute("class","cldttext3");
    th4.innerHTML="Project: ";
    document.getElementById("tr"+taskNumber+"3").appendChild(th4);
    const th5 = document.createElement("th");
    th5.setAttribute("class", "conteudo");
    th5.innerHTML=this.project;
    document.getElementById("tr"+taskNumber+"3").appendChild(th5);
    const th6 = document.createElement("th");
    th6.setAttribute("class","cldttext3");
    th6.innerHTML="Date: ";
    document.getElementById("tr"+taskNumber+"3").appendChild(th6);
    const th7 = document.createElement("th");
    th7.setAttribute("class", "conteudo");
    th7.innerHTML=this.date;
    document.getElementById("tr"+taskNumber+"3").appendChild(th7);
    //Create Line 4:
    const tr4 = document.createElement("tr");
    tr4.setAttribute("id", "tr"+taskNumber+"4");
    document.getElementById("tabela"+taskNumber).appendChild(tr4);
    const th8 = document.createElement("th");
    th8.setAttribute("class","cldttext3");
    th8.innerHTML="Priority: ";
    document.getElementById("tr"+taskNumber+"4").appendChild(th8);
    const th9 = document.createElement("th");
    th9.setAttribute("class", "conteudo priority");
    th9.innerHTML=this.priority;
    document.getElementById("tr"+taskNumber+"4").appendChild(th9);
    //Create Line 5:
    const tr5 = document.createElement("tr");
    tr4.setAttribute("id", "tr"+taskNumber+"5");
    document.getElementById("tabela"+taskNumber).appendChild(tr5);
    const th10 = document.createElement("th");
    th10.setAttribute("class", "space");
    document.getElementById("tr"+taskNumber+"5").appendChild(th10);
    //Create Line 6:
    const tr6 = document.createElement("tr");
    tr6.setAttribute("id","tr"+taskNumber+"6");
    document.getElementById("tabela"+taskNumber).appendChild(tr6);
    const th14 = document.createElement("th");
    document.getElementById("tr"+taskNumber+"6").appendChild(th14);
    const th15 = document.createElement("th");
    document.getElementById("tr"+taskNumber+"6").appendChild(th15);
    const th16 = document.createElement("th");
    th16.setAttribute("class", "cldtbtn2");
    th16.setAttribute("id", "btn"+taskNumber+"1");
    document.getElementById("tr"+taskNumber+"6").appendChild(th16);
    const btn1 = document.createElement("button");
    btn1.setAttribute("onclick", 'editTask("'+taskNumber+'")');
    btn1.innerHTML="Edit";
    document.getElementById("btn"+taskNumber+"1").appendChild(btn1);
    const th17 = document.createElement("th");
    th17.setAttribute("class", "cldtbtn2");
    th17.setAttribute("id","btn"+taskNumber+"2");
    document.getElementById("tr"+taskNumber+"6").appendChild(th17);
    const btn2 = document.createElement("button");
    btn2.setAttribute("onclick", 'deleteTask("'+taskNumber+'")');
    btn2.innerHTML="Delete";
    document.getElementById("btn"+taskNumber+"2").appendChild(btn2);
  }
}
class Project{
  constructor(project){
    this.project = project;
  }
  print(){
    const option = document.createElement("option");
    option.setAttribute("value",this.project);
    option.innerHTML=this.project;
    document.getElementById("proj").appendChild(option);
  }
  updatePanel(){
    const taskNumber = localStorage.getItem("TaskNumber");
    var qtdfilhos = document.getElementById("clep").childElementCount;
    var err=0;
    for(var i=0;i<taskNumber;i++){
      var x = i+1;
      if(document.getElementById("btnproj"+x)!=null){
        if(document.getElementById("btnproj"+x).innerHTML==this.project){
          err++;
        }
      }
    }
    if(err==0){
      const div = document.createElement("div");
      div.setAttribute("class","clepp");
      div.setAttribute("id","clepn"+taskNumber);
      const btn = document.createElement("button");
      btn.setAttribute("onclick",'showProjeto("'+this.project+'")');
      btn.setAttribute("id","btnproj"+taskNumber);
      btn.innerHTML=this.project;
      document.getElementById("clep").appendChild(div);
      document.getElementById("clepn"+taskNumber).appendChild(btn);
    }
  }
}
function createTask(){
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const project = document.getElementById("proj").value;
  const date = document.getElementById("date").value;
  const priority = document.getElementById("prior").value;
  const task = new Task (title, description, project, date, priority);
  task.updateStorage();
  const proj = new Project(project);
  proj.updatePanel();
}
window.createTask=createTask;
function createProject(){
  const project = document.getElementById("projectname").value;
  const p = new Project(project);
  p.print();
}
window.createProject=createProject;
function cleanPanel(){
  var node = document.getElementById("cldd");
  if(node.parentNode){
    node.parentNode.removeChild(node);
  }
  const cldd = document.createElement("div");
  cldd.setAttribute("id", "cldd");
  document.getElementById("cld").appendChild(cldd);
}
function showToday(){
  var n=1;
  cleanPanel();
  var taskNumber = localStorage.getItem("TaskNumber");
  var tn=parseInt(taskNumber);
  for(var i=0; i<tn;i++){
    if(localStorage.getItem("task"+n)!=null){
      const tk = localStorage.getItem("task"+n);
      const email = localStorage.getItem("Email");
      const t = tk.split(",");
      const data=new Date();
      var dia = String(data.getDate()).padStart(2, '0');
      var mes = String(data.getMonth() + 1).padStart(2, '0');
      var ano = data.getFullYear();
      var hoje=ano+"-"+mes+"-"+dia;
      if(t[3] == hoje){
        if(email==t[6]){
          const task = new Task(t[0],t[1],t[2],t[3],t[4]);
          task.imprimir(t[5]);
        }
      }
    }
    n++;
  }
}
window.showToday=showToday;
function showWeek(){
  var n=1;
  cleanPanel();
  var taskNumber = localStorage.getItem("TaskNumber");
  var tn=parseInt(taskNumber);
  for(var i=0; i<tn;i++){
    if(localStorage.getItem("task"+n)!=null){
      const tk = localStorage.getItem("task"+n);
      const email = localStorage.getItem("Email");
      const t = tk.split(",");
      const data=new Date();
      var dia = data.getDate();
      var mes = data.getMonth()+1;
      var ano = data.getFullYear();
      var dataStorage = t[3].split("-");
      var anoStorage = parseInt(dataStorage[0]);
      var diaStorage = parseInt(dataStorage[2]);
      var mesStorage = parseInt(dataStorage[1]);
      var diasDoMes=0;
      if(mes==1){
        diasDoMes=31;
      }else if(mes==2){
        diasDoMes=28;
      }else if(mes==3){
        diasDoMes=31;
      }else if(mes==4){
        diasDoMes=29;
      }else if(mes==5){
        diasDoMes=31;
      }else if(mes==6){
        diasDoMes=30;
      }else if(mes==7){
        diasDoMes=29;
      }else if(mes==8){
        diasDoMes=31;
      }else if(mes==9){
        diasDoMes=30;
      }else if(mes==10){
        diasDoMes=31;
      }else if(mes==11){
        diasDoMes=30;
      }else if(mes==12){
        diasDoMes=30;
      }
      if(anoStorage==ano){
        if(mesStorage==mes){
          if(diaStorage-dia<=7){
            if(email==t[6]){
              const task = new Task(t[0],t[1],t[2],t[3],t[4]);
              task.imprimir(t[5]);
            }
          }
        }else if(mesStorage-mes==1){
          if(diasDoMes-dia+diaStorage<=7){
            if(email==t[6]){
              const task = new Task(t[0],t[1],t[2],t[3],t[4]);
              task.imprimir(t[5]);
            }
          }
        }
      }
      if(mes==12 && mesStorage==1){
        if(diasDoMes-dia+diaStorage<=7){
          if(email==t[6]){
            const task = new Task(t[0],t[1],t[2],t[3],t[4]);
            task.imprimir(t[5]);
          }
        }
      }
    }
    n++;
  }
}
window.showWeek=showWeek;
function showAll(){
  var n=1;
  cleanPanel();
  var taskNumber = localStorage.getItem("TaskNumber");
  var tn = parseInt(taskNumber);
  for(var i=0; i<tn;i++){
    if(localStorage.getItem("task"+n)!=null){
      const tk = localStorage.getItem("task"+n);
      const email = localStorage.getItem("Email");
      const t = tk.split(",");
      if(email==t[6]){
        const task = new Task(t[0],t[1],t[2],t[3],t[4]);
        task.imprimir(t[5]);
      }
    }
    n++;
  }
}
window.showAll=showAll;
function showProjeto(projetoNome){
  var n=1;
  var num=1;
  cleanPanel();
  var taskNumber = localStorage.getItem("TaskNumber");
  for(var i=0; i<taskNumber;i++){
    if(localStorage.getItem("task"+n)!=null){
      const tk = localStorage.getItem("task"+n);
      const t = tk.split(",");
      if(t[2]==projetoNome){
        const task = new Task(t[0],t[1],t[2],t[3],t[4]);
        task.imprimir(n, t[5]);
        num++;
      }
    }
    n++;
  }
}
window.showProjeto=showProjeto;
function deleteTask(taskNumber){
  const num = parseInt(taskNumber);
  const node = document.getElementById("task"+num);
  console.log(node);
  if(node.parentNode){
    node.parentNode.removeChild(node);
  }
  localStorage.removeItem("task"+taskNumber);
}
window.deleteTask=deleteTask;
function editTask(taskNumber){
  document.getElementById("edit").style.position="fixed";
  document.getElementById("edit").style.width="400px";
  document.getElementById("edit").style.height="200px";
  document.getElementById("edit").style.backgroundColor="white";
  document.getElementById("edit").style.padding="20px";
  const task = localStorage.getItem("task"+taskNumber);
  const taskList = task.split(",");   
  const project = taskList[2];
  const titulo = taskList[0];
  const descricao = taskList[1];
  const data = taskList[3]
  //Create Content Divs:
  const content = document.createElement("div");
  content.setAttribute("id","content");
  document.getElementById("edit").appendChild(content);
  //Title
  const edittitle = document.createElement("div");
  edittitle.setAttribute("id","edittitle");
  document.getElementById("content").appendChild(edittitle);
  const title = document.createElement("label");
  title.innerHTML="Title: ";
  document.getElementById("edittitle").appendChild(title);
  const titleinput = document.createElement("input");
  titleinput.setAttribute("type", "text");
  titleinput.setAttribute("id", "inputTitle");
  titleinput.setAttribute("value", titulo);
  document.getElementById("edittitle").appendChild(titleinput);
  //Description
  const editdescrip = document.createElement("div");
  editdescrip.setAttribute("id","editdescrip");
  document.getElementById("content").appendChild(editdescrip);
  const description = document.createElement("label");
  description.innerHTML="Description: ";
  document.getElementById("editdescrip").appendChild(description);
  const descripinput = document.createElement("input");
  descripinput.setAttribute("type", "text");
  descripinput.setAttribute("id", "inputDescription");
  descripinput.setAttribute("value", descricao);
  document.getElementById("editdescrip").appendChild(descripinput);
  //Projeto
  const editproj = document.createElement("div");
  editproj.setAttribute("id","editproj");
  document.getElementById("content").appendChild(editproj);
  const proj = document.createElement("label");
  proj.innerHTML="Project: ";
  document.getElementById("editproj").appendChild(proj);
  const projselect = document.createElement("select");
  projselect.setAttribute("id", "projselect");
  document.getElementById("editproj").appendChild(projselect);
  const email = localStorage.getItem("Email");
  const tn = localStorage.getItem("TaskNumber");
  const tni = parseInt(tn);
  var projects=[];
  for(var i=0; i<tni;i++){
    var number=i+1;
    if(localStorage.getItem("task"+number)!=null){
      const task = localStorage.getItem("task"+number);
      const taskList=task.split(",");
      projects.push(taskList[2]);
      var err=0;
      for(var j=0;j<projects.length;j++){
        if(projects[j]==taskList[2]){
            err++;
        }
      }
      if(email==taskList[6] && err==1  && taskList[2]!=null && taskList[2]!=""){
        const opt = document.createElement("option");
        opt.setAttribute("value",taskList[2]);
        opt.innerHTML=taskList[2];
        document.getElementById("projselect").appendChild(opt); 
      }
    }
  }
  //Date
  const editdate = document.createElement("div");
  editdate.setAttribute("id","editdate");
  document.getElementById("content").appendChild(editdate);
  const datelabel = document.createElement("label");
  datelabel.innerHTML="Date: ";
  document.getElementById("editdate").appendChild(datelabel);
  const dateinput = document.createElement("input");
  dateinput.setAttribute("type","date");
  dateinput.setAttribute("id","dateinput");
  dateinput.setAttribute("value", data);
  document.getElementById("editdate").appendChild(dateinput);
  //Priority
  const editpriority = document.createElement("div");
  editpriority.setAttribute("id","editpriority");
  document.getElementById("content").appendChild(editpriority);
  const labelpriority = document.createElement("label");
  labelpriority.innerHTML="Priority: ";
  document.getElementById("editpriority").appendChild(labelpriority);
  const selectpri = document.createElement("select");
  selectpri.setAttribute("id","selectpriority");
  document.getElementById("editpriority").appendChild(selectpri);
  const opt1 = document.createElement("option");
  opt1.setAttribute("value","Low");
  opt1.innerHTML="Low";
  const opt2 = document.createElement("option");
  opt2.setAttribute("value","Normal");
  opt2.innerHTML="Normal";
  const opt3 = document.createElement("option");
  opt3.setAttribute("value","High");
  opt3.innerHTML="High";
  document.getElementById("selectpriority").appendChild(opt1);
  document.getElementById("selectpriority").appendChild(opt2);
  document.getElementById("selectpriority").appendChild(opt3);
  //Create Buttons
  const buttons = document.createElement("div");
  buttons.setAttribute("id","buttons");
  document.getElementById("edit").appendChild(buttons);
  const btn1 = document.createElement("button");
  btn1.setAttribute("onclick",'confirm("'+taskNumber+'")');
  btn1.setAttribute("class","editbuttons");
  btn1.innerHTML="Confirm";
  document.getElementById("buttons").appendChild(btn1);
  const btn2 = document.createElement("button");
  btn2.setAttribute("onclick","cancel()");
  btn2.setAttribute("class","editbuttons");
  btn2.innerHTML="Cancel";
  document.getElementById("buttons").appendChild(btn2);
}
window.editTask=editTask;
function cancel(){
  const node = document.getElementById("edit");
  if(node.parentNode){
    node.parentNode.removeChild(node);
  }
  const edit = document.createElement("div");
  edit.setAttribute("id","edit");
  document.getElementById("corpo").appendChild(edit);
  document.getElementById("edit").style.position="none";
  document.getElementById("edit").style.width="0";
  document.getElementById("edit").style.height="0";
  document.getElementById("edit").style.backgroundColor="transparent";
  document.getElementById("edit").style.padding="0";
}
window.cancel=cancel;
function confirm(taskNumber){
  const titulo = document.getElementById("inputTitle").value;
  const descricao = document.getElementById("inputDescription").value;
  const projeto = document.getElementById("projselect").value;
  const data = document.getElementById("dateinput").value;
  const prioridade = document.getElementById("selectpriority").value;
  const task=localStorage.getItem("task"+taskNumber);
  const taskList = task.split(",");
  const listItens = [titulo, descricao, projeto, data, prioridade, taskNumber, taskList[6]];
  localStorage.setItem("task"+taskNumber,listItens);
  cancel();
  cleanPanel();
}
window.confirm=confirm;
