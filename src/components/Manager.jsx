import { useRef, useState, useEffect } from "react";

import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { v4 as uuid } from "uuid";

import saveIcon from "../images/save-icon.png";
import eye from "../images/eye.png";
import eyeCross from "../images/cross-eye.png";
import copy_img from "../images/copy.png";
import edit_img from "../images/edit.png";
import delete_img from "../images/delete.png";

const Manager = () => {
  const ref = useRef(null);

  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [passwordArray, setpasswordArray] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [visiblePasswordIds, setvisiblePasswordIds] = useState([]);

  useEffect(() => {
    try {
      const passwords = localStorage.getItem("passwords");

      if (passwords) {
        setpasswordArray(JSON.parse(passwords));
      }
    } catch (error) {
      console.error("Unable to load saved passwords:", error);
    }
  }, []);

  const showPassword = () => {
    setPasswordVisible((previous) => !previous);
  };

  const toggleSavedPassword = (id) => {
    setvisiblePasswordIds((previous) =>
      previous.includes(id)
        ? previous.filter((visibleId) => visibleId !== id)
        : [...previous, id],
    );
  };

  const savePassword = (e) => {
    e.preventDefault();

    const updatedPasswords = [...passwordArray, { ...form, id: uuid() }];

    setpasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    setform({
      site: "",
      username: "",
      password: "",
    });

    toast("Password saved successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    setPasswordVisible(false);
  };

  const deletePassword = (e, id) => {
    console.log(`Deleting password of ID : ${id}`);
    e.preventDefault();
    let cfm = confirm("Delete this password ?");
    if (cfm) {
      const updatedPasswords = passwordArray.filter((item) => item.id !== id);
      setpasswordArray(updatedPasswords);

      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    }
    toast("Password deleted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const editPassword = (e, id) => {
    console.log(`Editing password of ID : ${id}`);
    e.preventDefault();

    setform(passwordArray.filter((item) => item.id === id)[0]);

    const updatedPasswords = passwordArray.filter((item) => item.id !== id);

    setpasswordArray(updatedPasswords);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    // alert("Copied to clipboard");
    toast("copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-600/40 focus:ring-4 focus:ring-cyan-400/10 hover:border-white/20";

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="relative isolate min-h-screen overflow-hidden bg-[#060816] text-slate-100">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

          <div className="absolute -left-37.5 top-[35%] h-100 w-100 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -right-32 -bottom-25 h-100 w-100 rounded-full bg-orange-500/10 blur-[130px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[26px_26px]" />

          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#060816]/20 to-[#060816]" />
        </div>

        <main className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <header className="mb-10 text-center sm:mb-14">
            <div className="mb-3 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-violet-200 uppercase">
              Your personal vault
            </div>

            <h1 className="cursor-pointer text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-slate-200">&lt;</span>
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Drop
              </span>
              <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Pin
              </span>
              <span className="text-slate-400">/&gt;</span>
            </h1>

            <p className="mt-4 text-sm text-slate-400 sm:text-base">
              Your passwords, organized in one secure place.
            </p>

            <div className="mx-auto mt-7 h-px w-100 bg-linear-to-r from-transparent via-orange-500 to-transparent" />
          </header>

          <section className="relative rounded-3xl bg-white/4.5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-1/2 w-1/2 rounded-tl-3xl border-l border-t border-white/20"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 rounded-br-3xl border-b border-r border-white/20"
            />

            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-linear-to-br from-violet-500/20 to-cyan-400/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6 text-cyan-300"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  <path d="M12 14v3" />
                </svg>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Add a password
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Store your login details for quick access.
                </p>
              </div>
            </div>

            <form onSubmit={savePassword} className="space-y-5">
              <div>
                <label
                  htmlFor="site"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Website URL
                </label>

                <input
                  id="site"
                  placeholder="https://example.com"
                  value={form.site}
                  name="site"
                  onChange={handleChange}
                  type="text"
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Username
                  </label>

                  <input
                    id="username"
                    placeholder="Enter your username"
                    value={form.username}
                    name="username"
                    onChange={handleChange}
                    type="text"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      ref={ref}
                      placeholder="Enter your password"
                      value={form.password}
                      name="password"
                      onChange={handleChange}
                      type={passwordVisible ? "text" : "password"}
                      required
                      className={`${inputClass} pr-12`}
                    />

                    <button
                      type="button"
                      onClick={showPassword}
                      aria-label={
                        passwordVisible ? "Hide password" : "Show password"
                      }
                      title={
                        passwordVisible ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 transition hover:bg-white/10"
                    >
                      <img
                        src={passwordVisible ? eyeCross : eye}
                        alt=""
                        className="h-5 w-5 opacity-70 transition hover:opacity-100"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-3 sm:justify-end">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-800 via-blue-800 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-400/20 active:translate-y-0 sm:w-auto"
                >
                  <img
                    src={saveIcon}
                    alt=""
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  />
                  Save
                </button>
              </div>
            </form>
          </section>

          <section className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:mt-12 sm:p-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-1/2 w-1/2 rounded-tr-3xl border-r border-t border-white/10"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2 rounded-bl-3xl border-b border-l border-white/10"
            />
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Your passwords
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Manage your saved login details.
                </p>
              </div>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-300">
                {passwordArray.length}{" "}
                {passwordArray.length === 1 ? "entry" : "entries"}
              </span>
            </div>

            {passwordArray.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/30 px-4 py-12 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-linear-to-br from-violet-500/15 to-cyan-400/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-7 w-7 text-violet-300"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                </div>

                <p className="font-semibold text-slate-200">
                  Your vault is empty
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Add your first login above to get started.
                </p>
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-2">
                {passwordArray.map((item) => {
                  const isPasswordVisible = visiblePasswordIds.includes(
                    item.id,
                  );

                  return (
                    <article
                      key={item.id}
                      className="group rounded-2xl border border-white/8 bg-slate-950/45 p-4 transition duration-200 hover:border-cyan-300/20 hover:bg-slate-950/70 sm:p-5"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-sm font-bold uppercase text-cyan-100">
                          {item.site?.replace(/^https?:\/\//i, "")?.[0] || "S"}
                        </div>
                        <div className="min-w-0 flex-1">
                          <a
                            href={
                              /^https?:\/\//i.test(item.site)
                                ? item.site
                                : `https://${item.site}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block truncate text-sm font-semibold text-slate-100 transition hover:text-cyan-200"
                          >
                            {item.site}
                          </a>
                          <p className="mt-1 truncate text-xs text-slate-500">
                            Saved login
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyText(item.site)}
                          aria-label={`Copy website ${item.site}`}
                          title="Copy website"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/3 transition hover:border-cyan-300/20 hover:bg-cyan-300/10"
                        >
                          <img
                            src={copy_img}
                            alt=""
                            className="h-4 w-4 opacity-70"
                          />
                        </button>
                      </div>

                      <div className="mt-5 grid gap-4 border-t border-white/[0.07] pt-4 sm:grid-cols-2">
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
                            Username
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <p className="min-w-0 flex-1 truncate text-sm text-slate-300">
                              {item.username}
                            </p>
                            <button
                              type="button"
                              onClick={() => copyText(item.username)}
                              aria-label={`Copy username for ${item.site}`}
                              title="Copy username"
                              className="rounded-md p-1 text-slate-500 transition hover:bg-white/6 hover:text-cyan-200"
                            >
                              <img
                                src={copy_img}
                                alt=""
                                className="h-3.5 w-3.5 opacity-70"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
                            Password
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <p className="min-w-0 flex-1 truncate font-mono text-sm tracking-[0.12em] text-slate-300">
                              {isPasswordVisible
                                ? item.password
                                : "••••••••••••"}
                            </p>
                            <button
                              type="button"
                              onClick={() => toggleSavedPassword(item.id)}
                              aria-label={
                                isPasswordVisible
                                  ? `Hide password for ${item.site}`
                                  : `Show password for ${item.site}`
                              }
                              title={
                                isPasswordVisible
                                  ? "Hide password"
                                  : "Show password"
                              }
                              className="rounded-md p-1 text-slate-500 transition hover:bg-white/6 hover:text-cyan-200"
                            >
                              <img
                                src={isPasswordVisible ? eyeCross : eye}
                                alt=""
                                className="h-4 w-4 opacity-70"
                              />
                            </button>
                            <button
                              type="button"
                              onClick={() => copyText(item.password)}
                              aria-label={`Copy password for ${item.site}`}
                              title="Copy password"
                              className="rounded-md p-1 text-slate-500 transition hover:bg-white/6 hover:text-cyan-200"
                            >
                              <img
                                src={copy_img}
                                alt=""
                                className="h-3.5 w-3.5 opacity-70"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-end gap-2 border-t border-white/[0.07] pt-3">
                        <button
                          type="button"
                          onClick={(e) => editPassword(e, item.id)}
                          aria-label={`Edit password for ${item.site}`}
                          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/6 hover:text-white"
                        >
                          <img
                            src={edit_img}
                            alt=""
                            className="h-4 w-4 opacity-70"
                          />
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={(e) => deletePassword(e, item.id)}
                          aria-label={`Delete password for ${item.site}`}
                          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-rose-400/10 hover:text-rose-200"
                        >
                          <img
                            src={delete_img}
                            alt=""
                            className="h-4 w-4 opacity-70"
                          />
                          Delete
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              DropPin stores these entries in your browser's local storage.
              Avoid using it for real credentials until you implement encryption
              and appropriate security protections.
            </p>
          </section>

          <footer className="mt-10 pb-4 text-center text-xs text-slate-500">
            Crafted with{" "}
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
              DropPin
            </span>{" "}
            · Keep your digital life organized.
          </footer>
        </main>
      </div>
    </>
  );
};

export default Manager;
