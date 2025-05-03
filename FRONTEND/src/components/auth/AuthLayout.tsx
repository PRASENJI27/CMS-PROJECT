
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="absolute inset-0 bg-auth-pattern opacity-50"></div>
      
      {/* Glass orbs for decorative effect */}
      <div className="fixed top-[-10%] -left-[5%] size-64 rounded-full bg-gradient-to-br from-purple-300/20 to-blue-300/20 blur-3xl"></div>
      <div className="fixed top-[20%] -right-[10%] size-72 rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 blur-3xl"></div>
      <div className="fixed -bottom-[10%] left-[30%] size-60 rounded-full bg-gradient-to-br from-blue-300/20 to-green-300/20 blur-3xl"></div>
      
      <div className="container relative z-10 flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center space-y-2 text-center mb-8">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">COURSE MANGEMENT SYSTEM </h1>
            <p className="text-sm text-muted-foreground">Secure auth </p>
          </div>
          
          {children}
          
          <p className="mt-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
