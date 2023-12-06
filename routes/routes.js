import { AsyncRouter } from "express-async-router";
import User from "../model/User.js";
// import User from "../controllers/todo";
// import { getTodos, createTodo, updateTodo, delTodo } from '../controllers/todo.js';

const router = AsyncRouter();

// router.get('/getTodos', getTodos)
// router.post('/createTodo', createTodo);
// router.put('/updateTodo/:id', updateTodo);
// router.delete('/deleteTodo/:id', delTodo);

router.post('/create-user', async (req, res) => {
    try {
      const { username, email } = req.body;
      const user = await User.create({ username, email });
      res.json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;
