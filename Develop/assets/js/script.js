var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
//console.log(today.format("dddd, MMMM Do"));

var textareaLst = $("textarea");
//console.log(textareaLst.length);
/*
for(var i =0;i<textareaLst.length;i++){
    console.log(textareaLst[i]);
}
*/

//9am to 5pm

//9,10,11,12,1,2,3,4,5
var currTime = moment().format("HH");
//console.log(parseInt(currTime));
var currHourM = parseInt(currTime);
//currHourM = 14;
    
var scheduleObj = JSON.parse(localStorage.getItem("scheduleList"));
if(scheduleObj === null){
    var scheduleObjList = [
        {id: "block-9",  military:9, hour:"9 am",text:"", state:""},
        {id: "block-10", military:10, hour:"10 am",text:"", state:""},
        {id: "block-11", military:11, hour:"11 am",text:"", state:""},
        {id: "block-12", military:12, hour:"12 pm",text:"", state:""},
        {id: "block-13", military:13, hour:"1 pm",text:"", state:""},
        {id: "block-14", military:14, hour:"2 pm",text:"", state:""},
        {id: "block-15", military:15, hour:"3 pm",text:"", state:""},
        {id: "block-16", military:16, hour:"4 pm",text:"", state:""},
        {id: "block-17", military:17, hour:"5 pm",text:"", state:""}
    ]
    localStorage.setItem("scheduleList",JSON.stringify(scheduleObjList));
}else{
    var scheduleObjList = scheduleObj;
}
//console.log(scheduleObjList);

for(var i=0;i<scheduleObjList.length;i++){
    if(currHourM === scheduleObjList[i]["military"]){
        scheduleObjList[i]["state"] = "present";
    }else if(currHourM > scheduleObjList[i]["military"]){
        scheduleObjList[i]["state"] = "past";
    }else{
        scheduleObjList[i]["state"] = "future";
    }

}
localStorage.setItem("scheduleList",JSON.stringify(scheduleObjList));

/*
console.log(scheduleObjList[0]["id"]);
console.log(`#${scheduleObjList[0]["id"]}`);
*/
var searchStr=`#${scheduleObjList[0]["id"]}`;
//console.log(searchStr);
var textareaBlock= $(searchStr);
//$(`#${scheduleObjList[0]["id"]}`);
//textareaBlock.css('background-color','red');
//console.log(textareaBlock.text());

/*
for(var i=0;i<scheduleObjList.length;i++){
    var textareaBlock = $(`#${scheduleObjList[i]["id"]}`);
    //gray is past
    //red is present
    //green is future

    var timeblockButton = $(`#button-${scheduleObjList[i]["military"]}`);

    timeblockButtonIcon = timeblockButton.children("i");
    //console.log(scheduleObjList[i]["state"]);
    //console.log(textareaBlock);

    //console.log(timeblockButton);

    //console.log(textareaBlock.parent().parent().siblings(".col-2").children());
    //.siblings(".col-2"));
    if(scheduleObjList[i]["state"]=="present"){
        textareaBlock.parent().css('background-color','red');
        textareaBlock.css('background-color','red');

        //textareaBlock.prop('disabled',true);
        timeblockButtonIcon.attr('class','fas fa-lock-open');
    }else if(scheduleObjList[i]["state"]=="past"){
        textareaBlock.parent().css('background-color','LightGray');
        textareaBlock.css('background-color','LightGray');

        textareaBlock.prop('disabled','true');
        timeblockButton.prop('disabled','true');

        timeblockButtonIcon.attr('class','fas fa-lock');
    }else if(scheduleObjList[i]["state"]=="future"){
        textareaBlock.parent().css('background-color','green');
        textareaBlock.css('background-color','green');

        timeblockButtonIcon.attr('class','fas fa-lock-open');
    }

    timeblockButton.on("click",function(){
        var txt = textareaBlock.val();
        //console.log(txt);
    })
}
*/

/*
$('#button-9').on("click",function(){
    var txt = $('#block-9').val();
    console.log(txt);
})
*/

/*
$('#button-9').prop('disabled',true);
$('#block-9').prop('disabled',true);
*/

scheduleObjList.forEach(element=>{
    //console.log(element);
    var textareaBlock = $(`#${element["id"]}`);
    var timeblockButton = $(`#button-${element["military"]}`);

    timeblockButtonIcon = timeblockButton.children("i");
    console.log(timeblockButtonIcon);

    textareaBlock.text(element["text"]);
    if(element["state"]=="present"){
        textareaBlock.parent().css('background-color','#FFA07A');
        textareaBlock.css('background-color','#FFA07A');

        //textareaBlock.prop('disabled',true);
        timeblockButtonIcon.attr('class','fas fa-lock-open');
    }else if(element["state"]=="past"){
        textareaBlock.parent().css('background-color','Gainsboro');
        textareaBlock.css('background-color','Gainsboro');

        textareaBlock.prop('disabled','true');
        timeblockButton.prop('disabled','true');

        timeblockButtonIcon.attr('class','fas fa-lock');
    }else if(element["state"]=="future"){
        textareaBlock.parent().css('background-color','#7FFF00');
        textareaBlock.css('background-color','#7FFF00');

        timeblockButtonIcon.attr('class','fas fa-lock-open');
    }
    
    timeblockButton.on("click",function(){
        var txt = textareaBlock.val();
        element["text"]=txt;
        localStorage.setItem("scheduleList",JSON.stringify(scheduleObjList));
        console.log(txt);
    })
})



