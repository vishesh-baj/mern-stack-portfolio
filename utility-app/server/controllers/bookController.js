import Book from "../schema/book.js";

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (!allBooks) {
      res.status(404).json({ message: "Unable to fetch books" });
    }
    res.status(200).json({ message: "Books fetched successfully", allBooks });
  } catch (error) {
    res.status(400).json({ message: "error occured", error: error.message });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, authors, description, rating, imageUrl } = req.body;
    const newBook = new Book({ title, authors, description, rating, imageUrl });
    const savedBook = await newBook.save();
    if (!savedBook) {
      res.status(404).json({ message: "Unable to add a book" });
    }
    res.status(201).json({ message: "Book addewd sucessfully", savedBook });
  } catch (error) {
    res.status(400).json({ message: "error occured", error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    if (!bookId) {
      res
        .status(404)
        .json({ message: "No book id is provided, unable to delete the book" });
    }
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      res.status(404).json({ message: "Error deleting book" });
    }
    res.status(200).json({ message: "Book deleted successfully", deleteBook });
  } catch (error) {
    res.status(400).json({ message: "error occured", error: error.message });
  }
};
