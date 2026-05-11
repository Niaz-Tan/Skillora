import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  async function loginAction(formData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({
      email,
      password,
    });
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070b14] px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_35%)]" />

      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-2xl">
        <h1 className="mb-8 text-3xl font-semibold text-white">
          Login to Skillora
        </h1>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08]"
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

        <form action={loginAction} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-400/40 focus:bg-white/[0.06]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-indigo-400/40 focus:bg-white/[0.06]"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
