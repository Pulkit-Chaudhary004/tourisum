import { useState } from "react";

const AdminPanel = () => {
  const [form, setForm] = useState({
    name: "",
    type: "hotel",
    location: "",
    price: "",
    description: "",
    image: "",
    Offer: "",
    ratings: "",
    taxes: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ id: "", password: "" });

  // Dummy login info
  const adminId = "admin123";
  const adminPassword = "securepass";

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.id === adminId && credentials.password === adminPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid ID or Password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isLoggedIn) {
      setCredentials((prev) => ({ ...prev, [name]: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ratingValue = parseFloat(form.ratings);
    if (ratingValue < 1 || ratingValue > 5) {
      alert("Ratings should be between 1 and 5");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/hotels/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Hotel added successfully!");
        setForm({
          name: "",
          type: "hotel",
          location: "",
          price: "",
          description: "",
          image: "",
          Offer: "",
          ratings: "",
          taxes: "",
        });
      } else {
        alert("Failed to add hotel: " + data.error);
      }
    } catch (err) {
      alert("Error submitting data.");
      console.error(err);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-sm mx-auto p-6 mt-10 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-sky-900">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            name="id"
            placeholder="Admin ID"
            value={credentials.id}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border p-2 rounded"
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-sky-800 text-white px-4 py-2 rounded hover:bg-sky-900"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-sky-900">
        Add Hotel / Houseboat
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <select
          className="w-full border p-2 rounded"
          name="type"
          value={form.type}
          onChange={handleChange}
        >
          <option value="hotel">Hotel</option>
          <option value="houseboat">Houseboat</option>
        </select>
        <input
          className="w-full border p-2 rounded"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <textarea
          className="w-full border p-2 rounded"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full border p-2 rounded"
          name="Offer"
          placeholder="Offer"
          value={form.Offer}
          onChange={handleChange}
        />
        <input
          className="w-full border p-2 rounded"
          name="ratings"
          type="number"
          placeholder="Ratings (1-5)"
          value={form.ratings}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="taxes"
          type="number"
          placeholder="Taxes"
          value={form.taxes}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-sky-800 text-white px-6 py-2 rounded hover:bg-sky-900"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
