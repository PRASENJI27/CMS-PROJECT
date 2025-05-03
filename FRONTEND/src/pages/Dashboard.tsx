
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/");
  };
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-zinc-200/30">
          <p className="text-lg text-gray-700">
            You've successfully logged in to the application!
          </p>
          <p className="mt-4 text-muted-foreground">
            This is a placeholder dashboard. In a real application, you would see your content here.
          </p>
        </div>
      </div>
    </div>
  );
}
