var users = [];
var user;

for (var i = 0; i < 5; i++) {

	while (true) {

		user = prompt('Введите ' + (i + 1) + ' имя:');

		if ((user != null) && (user != '')) {

			break;

		}

		alert('Введите имя!');

	}

	users[i] = user;

}

var currentUser = prompt('Введите имя пользователя:');
var flag = false;

for (var i = 0; i < users.length; i++) {

	if (currentUser == users[i]){

		flag = true;
		break;

	}
}

if (flag) {

	alert(currentUser + ', вы успешно вошли!');

} else {

	alert('Пользователь не зарегистрирован');

}
