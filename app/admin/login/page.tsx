import { LoginForm } from "../../../components/ui/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-joyya-blue/20 via-white to-joyya-blue/20 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-joyya-navy mb-8">Admin Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}

