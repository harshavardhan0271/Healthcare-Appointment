import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AppointmentForm from "../components/AppointmentForm";

export default function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<any>(null);

  useEffect(() => {
    fetch("/doctors.json")
      .then(res => res.json())
      .then(data => {
        const doc = data.find((d: any) => d.id === Number(id));
        setDoctor(doc);
      });
  }, [id]);

  if (!doctor) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <img src={doctor.image} className="w-28 h-28 rounded-full mb-3" />
        <h2 className="text-xl font-bold">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialization}</p>
        <p className="text-sm mt-1">{doctor.bio}</p>
        <p className={`mt-1 ${doctor.available ? "text-green-600" : "text-red-600"}`}>
          {doctor.available ? "Available" : "Not Available"}
        </p>
      </div>
      {doctor.available ? (
        <AppointmentForm doctorName={doctor.name} />
      ) : (
        <p className="text-center text-red-500">Doctor is not available right now.</p>
      )}
    </div>
  );
}
