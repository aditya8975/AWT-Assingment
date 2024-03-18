const ex=require('express')
const app=ex()
let todos = ["heloo","this","is","data"];
const url="https://catfact.ninja/fact"
app.get('url', (req, res) => {
  res.json(url);
});

app.post('url', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen('8080',()=>{
    console.log("Sucessful");
})