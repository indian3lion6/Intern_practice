// server.js
import express from 'express';

const app = express();
app.use(express.json()); // Parse JSON bodies

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
let books = [
  { id: 1, title: '1st Book', author: 'Author Swapna' },
  { id: 2, title: '2nd Book', author: 'Author Meghana' }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { id, title, author } = req.body;
  books.push({ id, title, author });
  res.status(201).json({ message: 'Book added' });
});

app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json({ message: 'Book updated successfully', book });
});


app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(bookIndex, 1);

  res.json({ message: `Book with id ${bookId} deleted successfully` });
});

