import Quote from "../schema/quote.js";

export const addQuote = async (req, res) => {
  try {
    const { content, author } = req.body;
    if (!content || !author) {
      res.status(404).json({
        message: "error occured",
        error: "unable to find content or author",
      });
    }
    const newQuote = new Quote({ content, author });
    const savedQuote = await newQuote.save();
    if (!savedQuote) {
      res.status(404).json({ message: "unable to save quote" });
    }
    res.status(201).json({ message: "Quote added successfully", savedQuote });
  } catch (error) {
    res.status(400).json({ message: "error occured", error: error.message });
  }
};

export const getAllQuotes = async (req, res) => {
  try {
    const allQuotes = await Quote.find({});
    if (!allQuotes) {
      res.status(404).json({ message: "unable to get all quotes" });
    }
    res.status(200).json({ message: "Quotes fetched successfully", allQuotes });
  } catch (error) {
    res.status(400).json({ message: "error occured", error: error.message });
  }
};

export const deleteQuote = async (req, res) => {
  const quoteId = req.params.id;
  try {
    if (!quoteId) {
      res.status(404).json({ message: "Quote id not found" });
    }
    const deletedQuote = await Quote.findByIdAndDelete(quoteId);
    if (!deletedQuote) {
      res.status(400).json({ message: "unable to delete quote" });
    }
    res
      .status(200)
      .json({ message: "Quote deleted successfully", deletedQuote });
  } catch (error) {
    res.status(400).json({ message: "error occured", error: error.message });
  }
};
