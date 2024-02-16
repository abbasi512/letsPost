"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
// import { parseCookies, setCookie } from "nookies"; 

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const user = useSession();

//   const { email: savedEmail, password: savedPassword } = parseCookies();

  useEffect(() => {
    if (user.status === "authenticated") {
      router.push("/");
    }
  }, [user]);

//   const handleRememberMe = (email: any, password: any, rememberMe: any) => {
//     if (rememberMe) {
//       setCookie(null, "email", email, { maxAge: 30 * 24 * 60 * 60, path: "/" });
//       setCookie(null, "password", password, {
//         maxAge: 30 * 24 * 60 * 60,
//         path: "/",
//       });
//     } else {
//       setCookie(null, "email", "", { maxAge: 0, path: "/" });
//       setCookie(null, "password", "", { maxAge: 0, path: "/" });
//     }
//   };

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  create an account
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.currentTarget.email.value;
                    const password = e.currentTarget.password.value;
                    const rememberMe = e.currentTarget.rememberMe.checked;

                    toast.loading("Signing in...");
                    setLoading(true);
                    signIn("credentials", {
                      redirect: false,
                      email,
                      password,
                    }).then((error) => {
                      toast.dismiss();
                      if (error != undefined && error.error != null) {
                        setLoading(false);
                        toast.error("Signin failed, Please try again.");
                      } else {
                        setLoading(false);
                        toast.success("Signed in successfully");
                        router.refresh();
                        // router.push("/");
                      }
                    });

                    // handleRememberMe(email, password, rememberMe);
                  }}
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        // value={savedEmail}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        // value={savedPassword}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="rememberMe"
                        type="checkbox"
                        // defaultChecked={!!savedEmail} // Check the checkbox if email is saved
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        href="/forget-password"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
