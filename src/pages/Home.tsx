import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";

// Type for a single doctor
type Doctor = {
  id: number;
  name: string;
  specialization: string;
  image: string;
  available: boolean;
  bio: string;
};

export default function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load doctors.json");
        }
        return res.json();
      })
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
        setDoctors([]); // fallback to empty array
      });
  }, []);

  const filtered = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Available Doctors</h1>

      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-2 mb-6 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No doctors found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
