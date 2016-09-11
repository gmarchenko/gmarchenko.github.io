define(
    'Model',
    [],
    function(){
        return function (data) {
            var self = this;

            var localData = localStorage.getItem('data');

            if(localData) {
                self.data = JSON.parse(localData);
            } else {
                self.data = data;

            }
            self.addItem = function (item) {
                if (item.length === 0) {
                    return;
                }

                self.data.push(item);

                return self.data;
            };

            self.removeItem = function (item) {
                var index = self.data.indexOf(item);
                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1);

                return self.data;
            };

            self.changeItem = function (item, changedItem) {
                var index = self.data.indexOf(item);
                self.data[index] = changedItem;

                return self.data;
            };

            self.saveData = function (data) {
                var localData = JSON.stringify(data);
                localStorage.setItem('data', localData);
            };

            self.resetData = function () {
                self.data = ['This ToDo list was resetted. Try it again!'];
                var localData = JSON.stringify(self.data);
                localStorage.setItem('data', localData);

                return self.data;
            };
        };
    }
);

