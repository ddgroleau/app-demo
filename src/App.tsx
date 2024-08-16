import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => setModalOpen((x) => !x);
  return (
    <div className="w-[100vw] min-h-[100vh] h-full flex flex-col overflow-hidden">
      <main className="flex-grow flex min-w-fit">
        <Navbar />
        <div className="flex flex-col w-full">
          <TopBar onClick={handleClick} />
          <section className="bg-secondary flex-grow p-4 lg:p-8">
            <Dashboard onClick={handleClick} />
          </section>
        </div>
      </main>
      {modalOpen && (
        <>
          <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen blur bg-black opacity-15"></div>
          <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen">
            <Card className="max-w-[min(90vw,35rem)]">
              <CardHeader>
                <CardTitle className="flex justify-between gap-8 items-center">
                  <span className="font-medium opacity-70 leading-10">
                    I hope you are enjoying the demo!
                  </span>
                  <Button
                    className="px-4 m-0 w-min bg-danger hover:opacity-50 hover:bg-danger flex items-center gap-2"
                    onClick={handleClick}
                  >
                    <span className="mb-[0.3rem] text-2xl ">&times;</span>
                    <span className="uppercase text-sm tracking-tight font-bold">
                      Close
                    </span>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="pb-2">
                  <p className="leading-8">
                    Thank you for taking the time to visit this demo
                    application. If you are enjoying the app and want to find
                    out what I can do for you,&nbsp;
                    <a
                      href="tel:14017533691"
                      className="text-primary underline"
                    >
                      call me
                    </a>
                    &nbsp;or visit my&nbsp;
                    <a
                      href="https://dangroleauwebdevelopment.com"
                      target="_blank"
                      className="text-primary underline"
                    >
                      website
                    </a>
                    &nbsp;to learn more.
                  </p>
                  <p className="pt-4 italic">~ Dan Groleau</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
