"use client";
import { useState } from "react";
import { account, ID } from "./appwrite";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email: string, password: string) => {
    const session = await account.createEmailPasswordSession(email, password);
    //@ts-ignore
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        {/* @ts-ignore */}
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center bg-slate-800 gap-3">
      <h1 className="text-white text-2xl">FeliDev Blog Log In</h1>
      <form className="flex flex-col gap-3 w-[300px] text-blue-950">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => login(email, password)}>
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
