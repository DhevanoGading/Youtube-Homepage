import logo from "../assets/react.svg";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  
  return (
    <div className="flex gap-10 lg:gap-20 justify-between bg-red-500 py-2 px-4">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <form
        className={`flex-grow gap-4 justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary w-full py-1 px-4 text-lg focus:border-blue-500 outline-none"
          />
          <Button className="rounded-r-full border border-secondary-border border-l-0">
            <Search />
          </Button>
        </div>
        <Button variant="default" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}
