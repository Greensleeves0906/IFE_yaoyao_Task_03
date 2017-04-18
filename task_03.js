function isSTU(){
	document.getElementById('stuForm').style.display = "block";
	document.getElementById('notStuForm').style.display = "none";
}
function isNotSTU(){
	document.getElementById('stuForm').style.display = "none";
	document.getElementById('notStuForm').style.display = "block";
}
function selectBJ(){
	var school = document.getElementById('school');
	school.options.length = 0;//删除所有选项
	school.options.add(new Option("北京大学","BJ1"));
	school.options.add(new Option("清华大学","BJ2"));
	school.options.add(new Option("中国人民大学","BJ3"));
}
function selectSH(){
	var school = document.getElementById('school');
	school.options.length = 0;
	school.options.add(new Option("复旦大学","SH1"));
	school.options.add(new Option("同济大学","SH2"));
	school.options.add(new Option("上海交通大学","SH3"));
}
function selectTJ(){
	var school = document.getElementById('school');
	school.options.length = 0;
	school.options.add(new Option("天津大学","TJ1"));
	school.options.add(new Option("南开大学","TJ2"));
}
function selectDL(){
	var school = document.getElementById('school');
	school.options.length = 0;
	school.options.add(new Option("大连理工大学","DL1"));
	school.options.add(new Option("东北财经大学","DL2"));
}
function whichSelected(){
	var province = document.getElementById('province');
	for (var i = 0; i < province.options.length; i++) {
		if(province.options[i].selected){
			var proValue = province.options[i].value;
		}
	}
	return proValue;
}
function init(){
	var isStu = document.getElementById('isStu');
	var isNotStu = document.getElementById('isNotStu');
	var ifStu = document.getElementsByName('ifStu');
	isNotStu.onclick = isNotSTU;
	isStu.onclick = isSTU;
	var province = document.getElementById('province');
	province.onchange = function(){
		if(whichSelected() == "BJ"){
		selectBJ();
		}
		if(whichSelected() == "SH"){
		selectSH();
		}
		if(whichSelected() == "TJ"){
			selectTJ();
		}
	if(whichSelected() == "DL"){
		selectDL();
	}
	}
}
init();