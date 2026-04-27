import { Tabs } from "antd";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    { key: "1", label: "About Me" },
    { key: "2", label: "Education" },
    { key: "3", label: "Experience" },
    { key: "4", label: "Projects" },
    { key: "5", label: "Tech Stack" },
  ];

  const sectionMap: Record<string, string> = {
    "1": "home",
    "2": "education",
    "3": "experience",
    "4": "projects",
    "5": "techstack",
  };

  const onChange = (key: string) => {
  document.getElementById(sectionMap[key])?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  // remove focus from clicked tab
  setTimeout(() => {
    (document.activeElement as HTMLElement)?.blur();
  }, 50);
};

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "home") setActiveKey("1");
            if (entry.target.id === "education") setActiveKey("2");
            if (entry.target.id === "experience") setActiveKey("3");
            if (entry.target.id === "projects") setActiveKey("4");
            if (entry.target.id === "techstack") setActiveKey("5");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar">
      <Tabs activeKey={activeKey} items={items} onChange={onChange} centered />
    </div>
  );
}