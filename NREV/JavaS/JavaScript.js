$('a[data-toggle="tooltip"]').tooltip({

    placement: 'top',
    html: true
});

function biopsi() {
    if 
                        (document.getElementById("biop").selectedIndex == "1") {
        document.getElementById("nej").style.display = "block"
        document.getElementById("ja").style.display = "none";
    }
    else if (
        document.getElementById("biop").selectedIndex == "2") {
        document.getElementById("ja").style.display = "block"
        document.getElementById("nej").style.display = "none";
    }
    else {
        document.getElementById("nej").style.display = "none"
        document.getElementById("ja").style.display = "none";
    }

}

function table() {
    if 
                    (document.getElementById("icd").selectedIndex == "1" || document.getElementById("icd").selectedIndex == "2" || document.getElementById("icd").selectedIndex == "3" || document.getElementById("icd").selectedIndex == "4" || document.getElementById("icd").selectedIndex == "5" || document.getElementById("icd").selectedIndex == "6" || document.getElementById("icd").selectedIndex == "7" || document.getElementById("icd").selectedIndex == "8" || document.getElementById("icd").selectedIndex == "9") {
        document.getElementById("esof").style.display = "block";
        document.getElementById("ventr").style.display = "none";
    }
    else if (document.getElementById("icd").selectedIndex == "10" || document.getElementById("icd").selectedIndex == "11" || document.getElementById("icd").selectedIndex == "12" || document.getElementById("icd").selectedIndex == "13" || document.getElementById("icd").selectedIndex == "14" || document.getElementById("icd").selectedIndex == "15" || document.getElementById("icd").selectedIndex == "16" || document.getElementById("icd").selectedIndex == "17" || document.getElementById("icd").selectedIndex == "18" || document.getElementById("icd").selectedIndex == "19") {
        document.getElementById("ventr").style.display = "block";
        document.getElementById("esof").style.display = "none";
    }
    else {
        document.getElementById("ventr").style.display = "none";
        document.getElementById("esof").style.display = "none";
    }
}

function tumbeh() {
    if (document.getElementById("tummal").selectedIndex == "1") {
        document.getElementById("kurativ").style.display = "block";
        document.getElementById("palliativ").style.display = "none";
        document.getElementById("ingen").style.display = "none";
    }
    else if (document.getElementById("tummal").selectedIndex == "2") {
        document.getElementById("palliativ").style.display = "block";
        document.getElementById("kurativ").style.display = "none";
        document.getElementById("ingen").style.display = "none";

    }
    else if (document.getElementById("tummal").selectedIndex == "3") {
        document.getElementById("ingen").style.display = "block";
        document.getElementById("kurativ").style.display = "none";
        document.getElementById("palliativ").style.display = "none";
    }
    else {
        document.getElementById("ingen").style.display = "none";
        document.getElementById("kurativ").style.display = "none";
        document.getElementById("palliativ").style.display = "none";
    }
}

function specificera() {
    if (document.getElementById("mannat").checked)
        document.getElementById("spec").style.display = "block";


    else {
        document.getElementById("spec").style.display = "none";
    }
}
function specificera2() {
    if (document.getElementById("mannat2").checked)
        document.getElementById("spec2").style.display = "block";


    else {
        document.getElementById("spec2").style.display = "none";
    }
}

function met() {
    if (document.getElementById("m").selectedIndex == "2")
        document.getElementById("metastaser").style.display = "block";
    else {
        document.getElementById("metastaser").style.display = "none";
    }
}
function met1() {
    if (document.getElementById("m1").selectedIndex == "2")
        document.getElementById("metastaser1").style.display = "block";
    else {
        document.getElementById("metastaser1").style.display = "none";
    }
}
function pallonk2() {
    if (document.getElementById("pall2").selectedIndex == "2")
        document.getElementById("pallonko2").style.display = "block";
    else {
        document.getElementById("pallonko2").style.display = "none";
    }
}
function kuronkos() {
    if (document.getElementById("kuronk").selectedIndex == "2")
        document.getElementById("kuronko").style.display = "block";
    else {
        document.getElementById("kuronko").style.display = "none";
    }
}

function remmat() {
    if (document.getElementById("rem").selectedIndex == "2")
        document.getElementById("sjhklin").style.display = "block";
    else {
        document.getElementById("sjhklin").style.display = "none";
    }
}
function lever() {
    if (document.getElementById("lever").selectedIndex == "2" || document.getElementById("lever").selectedIndex == "1" || document.getElementById("lever").selectedIndex == "3") {
        document.getElementById("leverm").style.display = "block";

        if (document.getElementById("lever").selectedIndex == "3")
            document.getElementById("anmet").style.display = "block";
    }
    else {
        document.getElementById("leverm").style.display = "none",
        document.getElementById("anmet").style.display = "none";
    }
}


function behkompl() {
    if (document.getElementById("kompl").selectedIndex == "2")
        document.getElementById("behkomplikation").style.display = "block";
    else {
        document.getElementById("behkomplikation").style.display = "none";
    }
}
function apres() {
    if (document.getElementById("aprextrsfink").selectedIndex == "2" || document.getElementById("aprextrsfink").selectedIndex == "1") {
        document.getElementById("aprextra").style.display = "block",
        document.getElementById("datos").style.display = "block";

    } else if (document.getElementById("aprextrsfink").selectedIndex == "3" || document.getElementById("aprextrsfink").selectedIndex == "4" || document.getElementById("aprextrsfink").selectedIndex == "5") {
        document.getElementById("aprextra").style.display = "none",
        document.getElementById("datos").style.display = "block";
    }

    else {
        document.getElementById("aprextra").style.display = "none",
        document.getElementById("datos").style.display = "none";
    }
}
function annankirurgi() {
    if (document.getElementById("annankirurgi").selectedIndex == "2")
        document.getElementById("annankirurgidat").style.display = "block";
    else {
        document.getElementById("annankirurgidat").style.display = "none";
    }
}

function charlson() {
    var x = document.getElementsByClassName("x"),
     count = 0;

    for (var i = 0; i < x.length; i++) {
        if (x[i].checked == true) {
            count++;
            document.getElementById("charlstot").value = count;
        }

    }
}


function alter() {
    if 
                        (document.getElementById("rest").selectedIndex == "1") {
        document.getElementById("alt1").style.display = "block"
        document.getElementById("alt2").style.display = "none"
        document.getElementById("opdat").style.display = "none";
    }
    else if (
        document.getElementById("rest").selectedIndex == "2") {
        document.getElementById("alt2").style.display = "block"
        document.getElementById("opdat").style.display = "block"
        document.getElementById("alt1").style.display = "none";
    }
    else {
        document.getElementById("alt1").style.display = "none"
        document.getElementById("opdat").style.display = "none"
        document.getElementById("alt2").style.display = "none";
    }

}
function opan() {
    if (document.getElementById("optyp").selectedIndex == "7") {
        document.getElementById("anop").style.display = "block"
        document.getElementById("opkoder").style.display = "block"
        document.getElementById("ends").style.display = "none"
        document.getElementById("bed").style.display = "none"
        document.getElementById("yres").style.display = "none"
        document.getElementById("res").style.display = "none"
        document.getElementById("gastro").style.display = "none"
        document.getElementById("lymfk").style.display = "none"
        document.getElementById("op").style.display = "none";
    }
    else if (
        document.getElementById("optyp").selectedIndex == "1") {
        document.getElementById("op").style.display = "block"
        document.getElementById("ends").style.display = "block"
        document.getElementById("opkoder").style.display = "block"
        document.getElementById("bed").style.display = "none"
        document.getElementById("res").style.display = "none"
        document.getElementById("yres").style.display = "none"
        document.getElementById("anop").style.display = "none"
        document.getElementById("lymfk").style.display = "none"
        document.getElementById("gastro").style.display = "none";
    }
    else if (
        document.getElementById("optyp").selectedIndex == "6") {
        document.getElementById("op").style.display = "none"
        document.getElementById("ends").style.display = "none"
        document.getElementById("anop").style.display = "none"
        document.getElementById("bed").style.display = "block"
        document.getElementById("res").style.display = "block"
        document.getElementById("yres").style.display = "block"
        document.getElementById("opkoder").style.display = "block"
        document.getElementById("lymfk").style.display = "block"
        document.getElementById("gastro").style.display = "block";

    }

    else {
        document.getElementById("anop").style.display = "none"
        document.getElementById("op").style.display = "none"
        document.getElementById("ends").style.display = "none"
        document.getElementById("res").style.display = "none"
        document.getElementById("yres").style.display = "none"
        document.getElementById("bed").style.display = "none"
        document.getElementById("lymfk").style.display = "none"
        document.getElementById("opkoder").style.display = "none"
        document.getElementById("gastro").style.display = "none";
    }
}
function fleropkod() {
    if (document.getElementById("yopkod").selectedIndex == "2") {
        document.getElementById("yttopkod").style.display = "block";
    }
    else {
        document.getElementById("yttopkod").style.display = "none";
    }
}
function pradio() {
    if (document.getElementById("preradio").selectedIndex == "2") {
        document.getElementById("prer").style.display = "block";
    }
    else {
        document.getElementById("prer").style.display = "none";
    }
}
function pkemo() {
    if (document.getElementById("prekemo").selectedIndex == "2") {
        document.getElementById("prek").style.display = "block";
    }
    else {
        document.getElementById("prek").style.display = "none";
    }
}
function thorax() {
    if (document.getElementById("thor").selectedIndex == "7") {
        document.getElementById("annanthorax").style.display = "block";
    }
    else {
        document.getElementById("annanthorax").style.display = "none";
    }
}
function opbuk() {
    if (document.getElementById("buk").selectedIndex == "7") {
        document.getElementById("annanbuk").style.display = "block";
    }
    else {
        document.getElementById("annanbuk").style.display = "none";
    }
}

function ulfktho() {
    if (document.getElementById("ultho").selectedIndex == "2") {
        document.getElementById("lymftho").style.display = "block";
    }
    else {
        document.getElementById("lymftho").style.display = "none";
    }
}
function ulfkbuk() {
    if (document.getElementById("ulbuk").selectedIndex == "2") {
        document.getElementById("lymfbuk").style.display = "block";
    }
    else {
        document.getElementById("lymfbuk").style.display = "none";
    }
}
function yresekt() {
    if (document.getElementById("yttres").selectedIndex == "2") {
        document.getElementById("yttre").style.display = "block";
    }
    else {
        document.getElementById("yttre").style.display = "none";
    }
}
function specres() {
    if (document.getElementById("anspec").checked) {
        document.getElementById("anyttres").style.display = "block";
    }
    else {
        document.getElementById("anyttres").style.display = "none";
    }
}
function anreko() {
    if (document.getElementById("rekon").selectedIndex == "15") {
        document.getElementById("reko").style.display = "block";
    }
    else {
        document.getElementById("reko").style.display = "none";
    }
}
function datumex() {
    if (document.getElementById("opexpo").selectedIndex == "1") {
        document.getElementById("behandlingsstrat").style.display = "block"
        document.getElementById("ex").style.display = "none";
    }
    else if (
        document.getElementById("opexpo").selectedIndex == "2") {
        document.getElementById("behandlingsstrat").style.display = "none"
        document.getElementById("ex").style.display = "block";
    }
    else {
        document.getElementById("ex").style.display = "none"
        document.getElementById("behandlingsstrat").style.display = "none";
    }
}
function neoadj() {
    if (document.getElementById("neo").selectedIndex == "2") {
        document.getElementById("neoadjbeh").style.display = "block";
        document.getElementById("atg").style.display = "block";
    }
    else {
        document.getElementById("neoadjbeh").style.display = "none";
        document.getElementById("atg").style.display = "none";
    }
}
function adjuv() {
    if (document.getElementById("adj").selectedIndex == "2") {
        document.getElementById("adjbeh").style.display = "block";

    }
    else {
        document.getElementById("adjbeh").style.display = "none";

    }
}
function kradj() {
    if (document.getElementById("kemoradadj").selectedIndex == "2") {
        document.getElementById("adjkemorad").style.display = "block";
    }
    else {
        document.getElementById("adjkemorad").style.display = "none";
    }
}
function krneoadj() {
    if (document.getElementById("kemoradneoadj").selectedIndex == "2") {
        document.getElementById("neoadjkemorad").style.display = "block";
    }
    else {
        document.getElementById("neoadjkemorad").style.display = "none";
    }
}
function kadj() {
    if (document.getElementById("kemoadj").selectedIndex == "2") {
        document.getElementById("adjkemo").style.display = "block";
    }
    else {
        document.getElementById("adjkemo").style.display = "none";
    }
}
function kneoadj() {
    if (document.getElementById("kemoneoadj").selectedIndex == "2") {
        document.getElementById("neoadjkemo").style.display = "block";
    }
    else {
        document.getElementById("neoadjkemo").style.display = "none";
    }
}
function radj() {
    if (document.getElementById("radioadj").selectedIndex == "2") {
        document.getElementById("adjradio").style.display = "block";
    }
    else {
        document.getElementById("adjradio").style.display = "none";
    }
}
function rneoadj() {
    if (document.getElementById("radioneoadj").selectedIndex == "2") {
        document.getElementById("neoadjradio").style.display = "block";
    }
    else {
        document.getElementById("neoadjradio").style.display = "none";
    }
}
function atgarder() {
    if (document.getElementById("atgard").selectedIndex == "1") {
        document.getElementById("ejex").style.display = "block";
        document.getElementById("ex").style.display = "none";
        document.getElementById("pall").style.display = "block";
        document.getElementById("definitivkemo").style.display = "block";
    }
    else if 
        (document.getElementById("atgard").selectedIndex == "2") {
        document.getElementById("ejex").style.display = "none";
        document.getElementById("ex").style.display = "block";
        document.getElementById("pall").style.display = "block";
        document.getElementById("definitivkemo").style.display = "block";
    }
    else if
        (document.getElementById("atgard").selectedIndex == "3") {
        document.getElementById("ejex").style.display = "none";
        document.getElementById("ex").style.display = "none";
        document.getElementById("pall").style.display = "block";
        document.getElementById("definitivkemo").style.display = "block";
    }
    else if
        (document.getElementById("atgard").selectedIndex == "4") {
        document.getElementById("ex").style.display = "none";
        document.getElementById("ejex").style.display = "none";
        document.getElementById("pall").style.display = "none";
        document.getElementById("definitivkemo").style.display = "none";
    }
    else {
        document.getElementById("ejex").style.display = "none";
        document.getElementById("ex").style.display = "none";
        document.getElementById("pall").style.display = "none";
        document.getElementById("definitivkemo").style.display = "none";
    }
}
function palliativ() {
    if (document.getElementById("pallbeh").selectedIndex == "2") {
        document.getElementById("behpall").style.display = "block";
    }
    else {
        document.getElementById("behpall").style.display = "none";
    }
}
function brter() {
    if (document.getElementById("brachyter").selectedIndex == "2") {
        document.getElementById("brachy").style.display = "block";
    }
    else {
        document.getElementById("brachy").style.display = "none";
    }
}
function externrad() {
    if (document.getElementById("extern").selectedIndex == "2") {
        document.getElementById("ext").style.display = "block";
    }
    else {
        document.getElementById("ext").style.display = "none";
    }
}
function pallkem() {
    if (document.getElementById("kemosys").selectedIndex == "2") {
        document.getElementById("pallkembeh").style.display = "block";
    }
    else {
        document.getElementById("pallkembeh").style.display = "none";
    }
}
function forstlin() {
    if (document.getElementById("forsta").selectedIndex == "2") {
        document.getElementById("forstalinjen").style.display = "block";
    }
    else {
        document.getElementById("forstalinjen").style.display = "none";
    }
}
function andlin() {
    if (document.getElementById("andra").selectedIndex == "2") {
        document.getElementById("andralinjen").style.display = "block";
    }
    else {
        document.getElementById("andralinjen").style.display = "none";
    }
}
function trelin() {
    if (document.getElementById("tredje").selectedIndex == "2") {
        document.getElementById("tredjelinjen").style.display = "block";
    }
    else {
        document.getElementById("tredjelinjen").style.display = "none";
    }
}
function definitiv() {
    if (document.getElementById("defkemorad").selectedIndex == "2") {
        document.getElementById("def").style.display = "block";
    }
    else {
        document.getElementById("def").style.display = "none";
    }
}
function kemodef() {
    if (document.getElementById("defkem").selectedIndex == "2") {
        document.getElementById("defkemo").style.display = "block";
    }
    else {
        document.getElementById("defkemo").style.display = "none";
    }
}
function raddef() {
    if (document.getElementById("defrad").selectedIndex == "2") {
        document.getElementById("defradio").style.display = "block";
    }
    else {
        document.getElementById("defradio").style.display = "none";
    }
}
function avlid() {
    if (document.getElementById("avl").selectedIndex == "2") {
        document.getElementById("avliden").style.display = "block";
    }
    else {
        document.getElementById("avliden").style.display = "none";
    }
}
function uppf() {
    if (document.getElementById("res").selectedIndex == "1") {
        document.getElementById("upp").style.display = "block";
        document.getElementById("kirsalvage").style.display = "none";
    }
    else if
        (document.getElementById("res").selectedIndex == "2" || document.getElementById("res").selectedIndex == "3") {
        document.getElementById("kirsalvage").style.display = "block";
        document.getElementById("upp").style.display = "none";
    }
    else {
        document.getElementById("upp").style.display = "none";
        document.getElementById("kirsalvage").style.display = "none";
    }
}
function onkrecidiv() {
    if (document.getElementById("onkrec").selectedIndex == "2") {
        document.getElementById("recidiv").style.display = "block";
    }
    else {
        document.getElementById("recidiv").style.display = "none";
    }
}
function showadju() {
    if (document.getElementById("btnadju").onclick) {
        document.getElementById("adjuvant").style.display = "block";
    }
    else {
        document.getElementById("adjuvant").style.display = "none";
    }
}
function showpall() {
    if (document.getElementById("btnpall").onclick) {
        document.getElementById("pall").style.display = "block";
    }
    else {
        document.getElementById("pall").style.display = "none";
    }
}
function showdef() {
    if (document.getElementById("btndef").onclick) {
        document.getElementById("definitivkemo").style.display = "block";
    }
    else {
        document.getElementById("definitivkemo").style.display = "none";
    }
}
function showupp() {
    if (document.getElementById("btnupp").onclick) {
        document.getElementById("uppf").style.display = "block";
    }
    else {
        document.getElementById("uppf").style.display = "none";
    }
}
function hideadju() {
    if (document.getElementById("btnoadju").onclick) {
        document.getElementById("adjuvant").style.display = "none";
    }
    
}
function hidedef() {
    if (document.getElementById("btnnodef").onclick) {
        document.getElementById("definitivkemo").style.display = "none";
    }

}
function hidepall() {
    if (document.getElementById("btnnopall").onclick) {
        document.getElementById("pall").style.display = "none";
    }

}
function hideupp() {
    if (document.getElementById("btnnoupp").onclick) {
        document.getElementById("uppf").style.display = "none";
    }

}

