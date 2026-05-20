import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  async function registerAction(formData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    console.log({
      name,
      email,
      password,
      confirmPassword,
    });
  }

  return (
    <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/6 p-8 shadow-2xl backdrop-blur-2xl">
      <h1 className="mb-8 text-3xl font-semibold text-white">
        Create Student Account
      </h1>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/8"
      >
        <FcGoogle className="h-5 w-5" />
        Continue with Google
      </button>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-xs uppercase tracking-wider text-zinc-500">
          or
        </span>

        <div className="h-px flex-1 bg-white/10" />
      </div>

      <form action={registerAction} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-400/40 focus:bg-white/6"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-400/40 focus:bg-white/6"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-400/40 focus:bg-white/6"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-400/40 focus:bg-white/6"
        />
        <p className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link className="text-blue-500 underline" href={"/login"}>
            Sign in
          </Link>
        </p>
        <button
          type="submit"
          className="w-full rounded-2xl bg-linear-to-r from-fuchsia-500 to-indigo-500 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
