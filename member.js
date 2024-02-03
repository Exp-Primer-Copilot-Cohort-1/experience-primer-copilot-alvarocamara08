function skillsMember() {
  var member = {
    name: 'John',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  return member;
}