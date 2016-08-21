$(function() {

var $searcher = $('.searcher');

var $ajaxQuery = function(k){

    var $text = $('#query-search').val();
    var url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&start=' + k*8 + '&q='+ $text + '&callback=GoogleCallback&context=?';
    var $wrapper = $('.wrapper');
    $('.results').remove();

    $.ajax({
        url: url,
        dataType : "jsonp",
        success: function(data) {

            var results = document.createElement('div');
            results.classList.add('results');
            var ul = document.createElement('ul');

            var moreResults = document.createElement('div');
            moreResults.classList.add('more-results');
            var h3 = document.createElement('h3');
            h3.innerHTML = ('More results...');
            var p = document.createElement('p');
            p.classList.add('more-results-list');

            for (i = 0; i < 8; i++) {
                p.innerHTML += '<a href="http://more... :)" class="search-more">' + (i+1) + '</a>';
            }

            p.innerHTML += '<a href="http://next... :)" class="search-next">Next</a>';

            $.each(data.results, function(i, val) {

                var li = document.createElement('li');
                li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
                ul.appendChild(li);
            });

            results.appendChild(ul);
            $wrapper.append(results);
            moreResults.appendChild(h3);
            moreResults.appendChild(p);
            results.appendChild(moreResults);

            var setAnchors = function(k) {

                $anchors = $('.search-more');
                $.each($anchors, function(i) {
                    $anchors[i].addEventListener('click', function(e) {
                        e.preventDefault();
                        $ajaxQuery(i);
                    });
                });

                $('.search-next')[0].addEventListener('click', function(e) {
                    e.preventDefault();
                    $ajaxQuery(k+1);
                });

                $anchors[k].classList.add('active');
            };

            setAnchors(k);
        }
    });

};

$searcher.submit(function(e) {

    e.preventDefault();

    $ajaxQuery(0);
});

// second part

var human = {
    name: 'Humanoid',
    age: 18,
    sex: 'male',
    height: '180',
    weight: 70
};

var worker = {
    workPlace: 'Luxoft',
    salary: 5000,
    work: function() {
        alert('Скоро пятница!');
    }
};

var student = {
    studyPlace: 'GoIT',
    grants: 1000,
    watchTV: function() {
        alert('Давай ещё серию, забей на пары!');
    }
};

Object.setPrototypeOf(worker, human);
Object.setPrototypeOf(student, human);

var Vasiliy = Object.create(student);
Vasiliy.name = 'Vasiliy';
Vasiliy.age = 20;
Vasiliy.weight = 100;

var Pyotr = Object.create(worker, {
    name: {value: 'Pyotr'},
    salary: {value: 10000},
    age: {value: 45},
});

console.log('human', human);
console.log('student ', student);
console.log('worker ', worker);
console.log('Student ', Vasiliy.name + ' studying in ' + Vasiliy.studyPlace + ' and recieving ' + Vasiliy.grants + ' grants, his age ' + Vasiliy.age + ' and height is ' + Vasiliy.height);
console.log('Object Name = ', Pyotr.name + '  Age = ' + Pyotr.age + '  Working at = ' + Pyotr.workPlace + '  Salary = ' + Pyotr.salary + '  Height = ' + Pyotr.height);

});

function GoogleCallback (func, data) {
    window[func](data);
}