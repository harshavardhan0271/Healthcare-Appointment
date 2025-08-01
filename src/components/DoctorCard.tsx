import { Link } from "react-router-dom";

type Props = {
  doctor: {
    id: number;
    name: string;
    specialization: string;
    image: string;
    available: boolean;
  };
};

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-md flex flex-col items-center">
      <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full" />
      <h2 className="text-lg font-semibold mt-2">{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p className={`text-sm mt-1 ${doctor.available ? 'text-green-500' : 'text-red-500'}`}>
        {doctor.available ? "Available" : "Not Available"}
      </p>
      <Link to={`/doctor/${doctor.id}`}>
        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Profile</button>
      </Link>
    </div>
  );
}
