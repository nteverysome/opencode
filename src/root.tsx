import {
  Links,
  Meta,
  MetaFunction,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./tailwind.css";
import "./index.css";
import React from "react";
import { Toaster } from "react-hot-toast";

import Sidebar from "./components/Sidebar";
import ChatPanel from "./components/ChatPanel";
import ToolPanel from "./components/ToolPanel";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}

export const meta: MetaFunction = () => [
  { title: "OpenHands" },
  { name: "description", content: "Let's Start Building!" },
];

export default function App() {
  return (
    <div className="grid grid-cols-[80px_1fr_256px] h-screen">
      <Sidebar />
      <ChatPanel />
      <ToolPanel />
    </div>
  );
}
