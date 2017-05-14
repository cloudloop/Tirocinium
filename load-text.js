function textWrite(id,object){
    document.getElementById(id).innerHTML = object;
};

function ConsultWriter(){
    textWrite("title1", konsult.title1);
    textWrite("text1",konsult.text1);
    textWrite("title2",konsult.title2);
    textWrite("text2",konsult.text2);
    textWrite("title3",konsult.title3);
};
