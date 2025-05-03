import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Book,
  GraduationCap,
  Users,
  Calendar, 
  LayoutDashboard, 
  ArrowRight,
  Code,
  Database,
  Server
} from "lucide-react";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-brand" />
            <span className="text-lg font-semibold">GHOSHAL ACADEMY</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
              Testimonials
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-violet-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  GHOSHAL ACADEMY
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  A comprehensive platform designed to streamline the educational experience for students and instructors alike.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/register">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Course Dashboard Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                width="550"
                height="310"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers a comprehensive suite of tools designed to enhance the learning experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Book className="h-6 w-6 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Course Management</h3>
                <p className="text-gray-500">
                  Create, organize, and manage courses with ease, complete with materials, assignments, and grading tools.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Scheduling</h3>
                <p className="text-gray-500">
                  Plan and schedule classes, office hours, and assignment deadlines with our intuitive calendar interface.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <LayoutDashboard className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-gray-500">
                  Track student progress and course performance with comprehensive analytics and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="testimonials">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from educators and students who have transformed their teaching and learning experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <p className="text-gray-500">
                  "This platform has revolutionized how I manage my courses. The interface is intuitive and the features comprehensive."
                </p>
                <p className="font-semibold">- Professor Johnson, Computer Science</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <p className="text-gray-500">
                  "As a student, I love how organized all my courses are in one place. Submitting assignments and tracking grades is so simple!"
                </p>
                <p className="font-semibold">- Emma Parker, MBA Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Courses Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Tech Courses</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Master the latest technologies with our comprehensive courses
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
            {/* Web Development Course */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-4xl font-bold">₹12,999</p>
                <p className="text-sm text-gray-500">Complete Frontend & Backend</p>
                <ul className="my-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>React & Node.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>20+ Real Projects</span>
                  </li>
                </ul>
              </div>
              <Link to="/register">
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </div>
            
            {/* Data Science Course */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm ring-2 ring-blue-600">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Data Science</h3>
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-600">Popular</span>
                </div>
                <p className="text-4xl font-bold">₹15,999</p>
                <p className="text-sm text-gray-500">Advanced Analytics & ML</p>
                <ul className="my-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Python & R Programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Machine Learning & AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>15+ Industry Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Job Placement Assistance</span>
                  </li>
                </ul>
              </div>
              <Link to="/register">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
              </Link>
            </div>
            
            {/* Cloud Computing Course */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Server className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Cloud Computing</h3>
                <p className="text-4xl font-bold">₹14,999</p>
                <p className="text-sm text-gray-500">AWS & Azure Certification</p>
                <ul className="my-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>AWS & Azure Fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>DevOps Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Certification Preparation</span>
                  </li>
                </ul>
              </div>
              <Link to="/register">
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/courses">
              <Button variant="outline" size="lg">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-violet-100 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Education?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of educators and students already benefiting from our platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/register">
                <Button size="lg">Get Started Today</Button>
              </Link>
              <Button size="lg" variant="outline">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-brand" />
            <span className="text-lg font-semibold">GHOSHALACACDEMY</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Cookies
            </a>
          </nav>
          <p className="text-xs text-gray-500">© 2025 GHOSHAL ACADEMY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
