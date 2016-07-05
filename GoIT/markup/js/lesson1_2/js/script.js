var arr = [];
var user;

for (var i = 0; i < 5; i++) {

	while (true) {

		user = prompt('введите ' + (i + 1) + ' имя:');

		if ((user != null) && (user != '')) {

			break;

		}

		alert('введите имя!');

	}

	arr[i] = user;

}

var currentUser = prompt('введите имя пользователя:');
var flag = false;

for (var i = 0; i < arr.length; i++) {

	if (currentUser == arr[i]){

		flag = true;
		break;

	}
}

if (flag) {

	alert(currentUser + ', вы успешно вошли!');

} else {

	alert('ошибка');

}
