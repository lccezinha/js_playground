describe('Todo List', function(){
  var todo;

  beforeEach(function(){
    todo = new Todo();
  })

  it('Should have a empty task list when is a new object', function(){
    expect(todo.getTasks()).toEqual([]);
  });

  describe('Add new Task to Todo', function(){

    it('Should add a Task', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };

      todo.add(task);

      expect(todo.getTasksSize()).toEqual(1);
      expect(todo.getTasks()).toContain(task);
    });

  });

  describe('List all tasks', function(){

    it('Should list all tasks', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };
      var task_two = { title: 'Task', description: 'This is a Task', created_at: new Date() };

      todo.add(task);
      todo.add(task_two);

      expect(todo.getTasks()).toContain(task, task_two)
    });

  });

  xdescribe('Find a task', function() {

  });

  xdescribe('Destroy a Task', function() {
  });



});