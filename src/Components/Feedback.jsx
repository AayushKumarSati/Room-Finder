import { useState } from "react";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const submitFeedback = () => {
    if (!rating) return alert("Please select rating!");
    const newReview = { rating, comment };
    setReviews([...reviews, newReview]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="font-bold mb-2">Rate this Room</h3>
      <div className="flex gap-2 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={
              star <= rating
                ? "text-yellow-400 text-2xl"
                : "text-gray-400 text-2xl"
            }
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your feedback..."
        className="w-full p-2 border rounded mb-3 dark:text-black"
      />

      <button
        onClick={submitFeedback}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>

      {/* Show Reviews */}
      <div className="mt-4">
        <h4 className="font-semibold">Student Reviews:</h4>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((rev, i) => (
            <div key={i} className="border-b py-2">
              <p>{"★".repeat(rev.rating)}</p>
              <p>{rev.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
