
$( function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });


  function skillsSort() {

    var skills = [];

    for (var i = 0; i < data.length; i++) {
      skills.push( data[i].skills);
    }

    skills = _.flatten(skills);
    skills = _.uniq(skills);
    var sortedSkills = _.sortBy(skills);

    return sortedSkills;
  }


  function namesSort() {

    var names = _.cloneDeep(data);

    for (i = 0; i < names.length; i++) {
      names[i].friends = names[i].friends.length;
    }

    var Names = _.sortBy(names, ['friends', 'name']);

    var sortedNames = [];

    for (i = 0; i < Names.length; i++) {
      sortedNames.push( Names[i].name);
    }

    return sortedNames;
  }


  function friendsSort() {

    var allFriends = [];

    for (i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].friends.length; j++) {
        allFriends.push( data[i].friends[j].name);
      }
    }

    var allUniqSortedFriends = _.uniq(allFriends);
    var allSortedFriends = _.sortBy(allUniqSortedFriends);

    return allSortedFriends;
  }


  console.log('Sorted Skills are: ', skillsSort());
  console.log('Sorted Names are: ', namesSort());
  console.log('All Friends are: ', friendsSort());

} );