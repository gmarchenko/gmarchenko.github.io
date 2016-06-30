var arr = [];
var i = 0;

while (i < 5){
	arr[i] = prompt('введите имя', 'вася');
	i++;
};

var user = prompt('введите имя пользователя', 'митя');
var flag = false;

for (var i = 0; i < arr.length; i++){
	if (arr[i]===user){
	flag = true
	}
}

if (flag) {
	alert(user + ', вы успешно вошли');
} else {
	alert('error');
}
