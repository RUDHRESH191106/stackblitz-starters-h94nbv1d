const express = require('express');

const app = express();
const port = 3010;

app.use(express.json()); // Middleware to parse JSON request body

// Sample student data
const students = [
  { name: "Alice Johnson", total: 433 },
  { name: "Bob Smith", total: 410 },
  { name: "Charlie Brown", total: 390 },
  { name: "David Williams", total: 380 },
  { name: "Eve Carter", total: 420 }
];

app.post('/students/above-threshold', (req, res) => {
  const { threshold } = req.body;


  if (typeof threshold !== 'number') {
    return res.status(400).json({ error: "Invalid input. Threshold must be a number." });
  }

  const filteredStudents = students.filter(student => student.total > threshold);

  res.json({
    count: filteredStudents.length,
    students: filteredStudents
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
