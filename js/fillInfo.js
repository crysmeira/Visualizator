/* Table */

function setColor() {
    var students = xmlDoc.getElementsByTagName("ALUNO");
    var inputGRR = document.getElementById("getGRR").value;

    var subjects2011 = ["CI068a", "CI210a", "CI212a", "CI215a", "CI162a", "CI163a", "CI055a", "CI056a", "CI057a", "CI062a", "CI065a", "CI211a", "CI165a", "CI209a", "CI059a", "CE003a", "CI064a", "CI067a", "CM046a", "CM045a", "CM005a", "CI237a", "CI058a", "CI221a", "CI218a", "CM201a", "CM202a", "CI166a", "CI164a", "SA214a", "CI220a", "CI061a", "TGIa", "TGIIa", "OPT1a", "OPT2a", "OPT3a", "OPT4a", "OPT5a", "OPT6a"];
    setDefaultColor(subjects2011);
    
    var subjects1998 = ["CI068b", "CI210b", "CI212b", "CI215b", "CI055b", "CI056b", "CI057b", "CI062b", "CI065b", "CI211b", "CI059b", "CE003b", "CI064b", "CI067b", "CM046b", "CM045b", "CM005b", "CI237b", "CI058b", "CI221b", "CI218b", "CM201b", "CM202b", "SA214b", "CI220b", "CI061b", "CI063b", "CI066b", "CI202b", "CI219b", "TP052b", "CI060b", "CI069b", "SIN070b", "CI235b", "CI236b", "CI214b", "TGIb", "TGIIb", "OPT1b", "OPT2b", "OPT3b", "OPT4b", "OPT5b", "OPT6b", "OPT7b", "OPT8b", "OPT9b"];
    setDefaultColor(subjects1998);

    // for every input of the required student
    var opt = 0;
    var optativas = generateOptativas();
    for (var i = 0; i < students.length; i++) {
        if (students[i].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue == inputGRR) {
            var subjectCode = students[i].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue;
            var gradeVersionId = students[i].getElementsByTagName("ID_VERSAO_CURSO")[0].childNodes[0].nodeValue;
            var structure = students[i].getElementsByTagName("DESCR_ESTRUTURA")[0].childNodes[0].nodeValue;
            var structureId = students[i].getElementsByTagName("ID_ESTRUTURA_CUR")[0].childNodes[0].nodeValue;

            if ((structure == "Optativas" || 
                structure == "Disciplinas de outros cursos" || 
                structure == "Discipl. de outros currículos do curso") &&
                (opt+1) <= ((gradeVersionId == "1227")? 6 : 9) &&
                opt < optativas.length) {
                opt++;
                checkVersion(optativas[opt-1], subjectCode, gradeVersionId, structure, structureId, opt);
            } else if (structure == "Optativas" || 
                    structure == "Disciplinas de outros cursos" || 
                    structure == "Discipl. de outros currículos do curso") {
                continue;
            } else {
                checkVersion(students[i], subjectCode, gradeVersionId, structure, structureId, opt);
            }
        }
    }
}

function checkVersion(data, subjectCode, gradeVersionId, structure, structureId, optNumber) {
    if (gradeVersionId == "1227") { // 2011 version
        document.getElementById("table-version-1998").style.visibility = "collapse";
        document.getElementById("table-version-2011").style.visibility = "visible";
        
        if (structure == "Optativas" || 
            structure == "Disciplinas de outros cursos" || 
            structure == "Discipl. de outros currículos do curso") {
            subjectCode = "OPT" + optNumber;
        }
        if (structureId == "1742") {
            subjectCode = "TGI";
        }
        if (structureId == "1743") {
            subjectCode = "TGII";
        }
        defineColor(data, subjectCode+"a");
    } else { // 1998 version
        document.getElementById("table-version-1998").style.visibility = "visible";
        document.getElementById("table-version-2011").style.visibility = "collapse";
        
        if (subjectCode == "CM224") { // update code
            subjectCode = "TP052";
        }
        
        if (structure == "Optativas" || 
            structure == "Disciplinas de outros cursos" || 
            structure == "Discipl. de outros currículos do curso") {
            subjectCode = "OPT" + optNumber;
        }
        
        if (structureId == "1742") {
            subjectCode = "TGI";
        } else if (structureId == "1743") {
            subjectCode = "TGII";
        }
        defineColor(data, subjectCode+"b");
    }
}

function setDefaultColor(arr) {
    for (var i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.color = "#706e72";
    }
}

function defineColor(data, subject) {
    if (data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Reprovado" ||
        data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Rep. s/n" ||
        data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Repr. Freq") {
        document.getElementById(subject).style.color = "#e03121";
    } else if (data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Matricula") {
        document.getElementById(subject).style.color = "#159ac6";
    } else if (data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Equivale") {
        document.getElementById(subject).style.color = "#cc9e20";
    } else if (data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Aprovado" ||
            data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Disp. c/nt") {
        document.getElementById(subject).style.color = "#11895d";
    } else if (data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "TrancAdm" ||
            data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Tr. Total" ||
            data.getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue === "Cancelado") {
        document.getElementById(subject).style.color = "#812ed3";
    }
}

/* Form */

function cleanFields() {
    document.getElementById("ra").value = "";
    document.getElementById("subject_code").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("frequency").value = "";
    document.getElementById("situation").value = "";
    document.getElementById("student_name").value = "";
    document.getElementById("year").value = "";
    document.getElementById("subject_name").value = "";
    document.getElementById("version").value = "";
}

function fill(subject) {
    var optativas = generateOptativas();
    
    var students = xmlDoc.getElementsByTagName("ALUNO");
    var inputGRR = document.getElementById("getGRR").value;
    
    var tag = "COD_ATIV_CURRIC";
    if (subject == "1742" || subject == "1743") {
        tag = "ID_ESTRUTURA_CUR";
    } else if (subject >= "1" && subject <= "9") {
        var num = Number(subject)-1;
        if (num >= optativas.length) {
            return;
        }
        subject = optativas[num].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue;
    }

    for (var i = 0; i < students.length; i++) {
        if (students[i].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue == inputGRR) {
            if (students[i].getElementsByTagName(tag)[0].childNodes[0].nodeValue == subject) {        
                document.getElementById("ra").value = students[i].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue;
                document.getElementById("subject_code").value = students[i].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue;
                document.getElementById("semester").value = students[i].getElementsByTagName("PERIODO")[0].childNodes[0].nodeValue;
                document.getElementById("grade").value = students[i].getElementsByTagName("MEDIA_FINAL")[0].childNodes[0].nodeValue;
                document.getElementById("frequency").value = students[i].getElementsByTagName("FREQUENCIA")[0].childNodes[0].nodeValue;
                document.getElementById("situation").value = students[i].getElementsByTagName("SITUACAO")[0].childNodes[0].nodeValue;
                document.getElementById("student_name").value = students[i].getElementsByTagName("NOME_ALUNO")[0].childNodes[0].nodeValue;
                document.getElementById("year").value = students[i].getElementsByTagName("ANO")[0].childNodes[0].nodeValue;
                document.getElementById("subject_name").value = students[i].getElementsByTagName("NOME_ATIV_CURRIC")[0].childNodes[0].nodeValue;
                document.getElementById("version").value = students[i].getElementsByTagName("NUM_VERSAO")[0].childNodes[0].nodeValue;
            }
        }
    }    
}

/* Both */

function generateOptativas() {
    var list = [];
    var inputGRR = document.getElementById("getGRR").value;
    var students = xmlDoc.getElementsByTagName("ALUNO");

    for (var i = 0; i < students.length; i++) {
        // if it is the required student and the subject is an 'optativa'
        if (students[i].getElementsByTagName("MATR_ALUNO")[0].childNodes[0].nodeValue == inputGRR &&
             (students[i].getElementsByTagName("DESCR_ESTRUTURA")[0].childNodes[0].nodeValue == "Optativas" ||
              students[i].getElementsByTagName("DESCR_ESTRUTURA")[0].childNodes[0].nodeValue == "Disciplinas de outros cursos" ||
              students[i].getElementsByTagName("DESCR_ESTRUTURA")[0].childNodes[0].nodeValue == "Discipl. de outros currículos do curso")) {

            // check if this subject was already added to the list
            var alreadyAdded = false;
            for (var j = 0; j < list.length; j++) {
                if (students[i].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue ==
                   list[j].getElementsByTagName("COD_ATIV_CURRIC")[0].childNodes[0].nodeValue) {
                       alreadyAdded = true;
                       list[j] = students[i]; // get most recent entry
                }
            }

            if (!alreadyAdded) {
                list[list.length] = students[i];
            }
        }
    }
    
    // bubble-sort to sort the subjects in which the student was approved before the ones he/she was not approved
    for (var i = 0; i < list.length; i++) {
        for (var j = 1; j < list.length; j++) {
            if (list[j].getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue == "Aprovado" &&
                list[j-1].getElementsByTagName("SIGLA")[0].childNodes[0].nodeValue != "Aprovado") {
                    var tmp = list[j];
                    list[j] = list[i];
                    list[i] = tmp;
                   
            }
        }
    }
    
    return list;
}
