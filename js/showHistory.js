function showHistory(codSubject) {
	showDetailedHistory();
	var students = xmlDoc.getElementsByTagName("ALUNO");
    var inputGRR = document.getElementById("pegaGRR").value;
	
	var y;
	
	oi = document.getElementById('aparece').innerHTML = "";
	

	y = document.getElementById('aparece').insertRow(0);
    y.insertCell(0).innerHTML = "<strong>RA</strong>";
    y.insertCell(1).innerHTML = "<strong>Version</strong>";
	y.insertCell(2).innerHTML = "<strong>Subject's code</strong>";
	y.insertCell(3).innerHTML = "<strong>Subject's name</strong>";
	y.insertCell(4).innerHTML = "<strong>Semester</strong>";
	y.insertCell(5).innerHTML = "<strong>Year</strong>";
	y.insertCell(6).innerHTML = "<strong>Grade</strong>";
	y.insertCell(7).innerHTML = "<strong>Frequency</strong>";
	y.insertCell(8).innerHTML = "<strong>Situation</strong>";

	
    for (var j = 0; j < students.length; j++) {
        if (students[j].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue == inputGRR) {
            if (students[j].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue == codSubject) {
            	y = document.getElementById('aparece').insertRow(-1);
                y.insertCell(0).innerHTML = students[j].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue;
                y.insertCell(1).innerHTML = students[j].getElementsByTagName("NUM_VERSAO")[0].childNodes[0].nodeValue;
	            y.insertCell(2).innerHTML = students[j].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue;
	            y.insertCell(3).innerHTML = students[j].getElementsByTagName("NOME_ATIV_CURRIC")[0].childNodes[0].nodeValue;
	            y.insertCell(4).innerHTML = students[j].getElementsByTagName("PERIODO")[0].childNodes[0].nodeValue;
	            y.insertCell(5).innerHTML = students[j].getElementsByTagName("ANO")[0].childNodes[0].nodeValue;
	            y.insertCell(6).innerHTML = students[j].getElementsByTagName("MEDIA_FINAL")[0].childNodes[0].nodeValue;
	            y.insertCell(7).innerHTML = students[j].getElementsByTagName("FREQUENCIA")[0].childNodes[0].nodeValue;
	            y.insertCell(8).innerHTML = students[j].getElementsByTagName("SITUACAO")[0].childNodes[0].nodeValue;
            }
        }
    }
}

function showDetailedHistory(){
	document.getElementById('tabela_historico').style.display = "block";
}

function tgIShowHistory() {
	showDetailedHistory();
	var students = xmlDoc.getElementsByTagName("ALUNO");
    var inputGRR = document.getElementById("pegaGRR").value;
	var idTgI = "1742";
	
	var y;
	
	oi = document.getElementById('aparece').innerHTML = "";
	

	y = document.getElementById('aparece').insertRow(0);
    y.insertCell(0).innerHTML = "<strong>RA</strong>";
    y.insertCell(1).innerHTML = "<strong>Version</strong>";
	y.insertCell(2).innerHTML = "<strong>Subject's code</strong>";
	y.insertCell(3).innerHTML = "<strong>Subject's name</strong>";
	y.insertCell(4).innerHTML = "<strong>Semester</strong>";
	y.insertCell(5).innerHTML = "<strong>Year</strong>";
	y.insertCell(6).innerHTML = "<strong>Grade</strong>";
	y.insertCell(7).innerHTML = "<strong>Frequency</strong>";
	y.insertCell(8).innerHTML = "<strong>Situation</strong>";

	
    for (var j = 0; j < students.length; j++) {
        if (students[j].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue == inputGRR) {
            if (students[j].getElementsByTagName("ID_ESTRUTURA_CUR")[0].childNodes[0].nodeValue == idTgI) {
            	y = document.getElementById('aparece').insertRow(-1);
                y.insertCell(0).innerHTML = students[j].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue;
                y.insertCell(1).innerHTML = students[j].getElementsByTagName("NUM_VERSAO")[0].childNodes[0].nodeValue;
	            y.insertCell(2).innerHTML = students[j].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue;
	            y.insertCell(3).innerHTML = students[j].getElementsByTagName("NOME_ATIV_CURRIC")[0].childNodes[0].nodeValue;
	            y.insertCell(4).innerHTML = students[j].getElementsByTagName("PERIODO")[0].childNodes[0].nodeValue;
	            y.insertCell(5).innerHTML = students[j].getElementsByTagName("ANO")[0].childNodes[0].nodeValue;
	            y.insertCell(6).innerHTML = students[j].getElementsByTagName("MEDIA_FINAL")[0].childNodes[0].nodeValue;
	            y.insertCell(7).innerHTML = students[j].getElementsByTagName("FREQUENCIA")[0].childNodes[0].nodeValue;
	            y.insertCell(8).innerHTML = students[j].getElementsByTagName("SITUACAO")[0].childNodes[0].nodeValue;
            }
        }
    }
}

function tgIIShowHistory() {
	showDetailedHistory();
	var students = xmlDoc.getElementsByTagName("ALUNO");
    var inputGRR = document.getElementById("pegaGRR").value;
    var idTgII = "1743";
	
	var y;
	
	oi = document.getElementById('aparece').innerHTML = "";
	

	y = document.getElementById('aparece').insertRow(0);
    y.insertCell(0).innerHTML = "<strong>RA</strong>";
    y.insertCell(1).innerHTML = "<strong>Version</strong>";
	y.insertCell(2).innerHTML = "<strong>Subject's code</strong>";
	y.insertCell(3).innerHTML = "<strong>Subject's name</strong>";
	y.insertCell(4).innerHTML = "<strong>Semester</strong>";
	y.insertCell(5).innerHTML = "<strong>Year</strong>";
	y.insertCell(6).innerHTML = "<strong>Grade</strong>";
	y.insertCell(7).innerHTML = "<strong>Frequency</strong>";
	y.insertCell(8).innerHTML = "<strong>Situation</strong>";

	
    for (var j = 0; j < students.length; j++) {
        if (students[j].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue == inputGRR) {
            if (students[j].getElementsByTagName("ID_ESTRUTURA_CUR")[0].childNodes[0].nodeValue == idTgII) {
            	y = document.getElementById('aparece').insertRow(-1);
                y.insertCell(0).innerHTML = students[j].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue;
                y.insertCell(1).innerHTML = students[j].getElementsByTagName("NUM_VERSAO")[0].childNodes[0].nodeValue;
	            y.insertCell(2).innerHTML = students[j].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue;
	            y.insertCell(3).innerHTML = students[j].getElementsByTagName("NOME_ATIV_CURRIC")[0].childNodes[0].nodeValue;
	            y.insertCell(4).innerHTML = students[j].getElementsByTagName("PERIODO")[0].childNodes[0].nodeValue;
	            y.insertCell(5).innerHTML = students[j].getElementsByTagName("ANO")[0].childNodes[0].nodeValue;
	            y.insertCell(6).innerHTML = students[j].getElementsByTagName("MEDIA_FINAL")[0].childNodes[0].nodeValue;
	            y.insertCell(7).innerHTML = students[j].getElementsByTagName("FREQUENCIA")[0].childNodes[0].nodeValue;
	            y.insertCell(8).innerHTML = students[j].getElementsByTagName("SITUACAO")[0].childNodes[0].nodeValue;
            }
        }
    }
}
