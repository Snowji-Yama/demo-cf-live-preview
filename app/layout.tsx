import React from 'react'

import "./globals.css";
import Menu from '@/components/Menu';
import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Menu />
        {children}
        <div id="smoke" />
        <Script id="smokeCursor">
          {`
            let smoke = document.getElementById("smoke");

            function createSmoke(e) {
              let el = document.createElement("div");
              el.classList.add("el");
              el.style.left = e.clientX + "px";
              el.style.top = e.clientY + "px";
              smoke.appendChild(el);
  
              el.addEventListener("animationend", () => {
                el.remove();
              })
            }
  
            document.addEventListener("mousemove", createSmoke);
          `}
        </Script>
      </body>
    </html>
  );
}
