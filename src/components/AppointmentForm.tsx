import { useState } from "react";

type Props = { doctorName: string };

export default function AppointmentForm({ doctorName }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    datetime: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.datetime) return;
    setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="text-green-600 text-center font-semibold">
        Appointment booked with {doctorName} on {form.datetime}
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      <input
        type="datetime-local"
        name="datetime"
        value={form.datetime}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Book Appointment
      </button>
    </form>
  );
}
