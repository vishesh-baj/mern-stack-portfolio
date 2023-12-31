import Todo from "../schema/todo.js";
// create a todo
export const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({ ...req.body, user: req.user });
    console.log(newTodo);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all todos
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user });
    res.status(201).json(todos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get todo by id
export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = req.body;
    const todo = await Todo.findByIdAndUpdate(req.params.id, updatedTodo);
    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete todo by id
export const deleteTodoById = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      res.status(404).json({ error: "Todo not found" });
    }
    res.status(204).json({ deletedTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
