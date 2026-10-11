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
  setActiveKey(key);

  document.getElementById(sectionMap[key])?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setTimeout(() => {
    (document.activeElement as HTMLElement)?.blur();
  }, 50);
};

    useEffect(() => {
    const sectionMap: Record<string, string> = {
      home: "1",
      education: "2",
      experience: "3",
      projects: "4",
      techstack: "5",
    };

    const updateActiveTab = () => {
      const sections = [
        "home",
        "education",
        "experience",
        "projects",
        "techstack",
      ];

      const activationPoint = window.innerHeight * 0.35;
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= activationPoint) {
          currentSection = id;
        }
      });

      setActiveKey(sectionMap[currentSection]);
    };

    window.addEventListener("scroll", updateActiveTab, { passive: true });
    window.addEventListener("resize", updateActiveTab);

    updateActiveTab();

    return () => {
      window.removeEventListener("scroll", updateActiveTab);
      window.removeEventListener("resize", updateActiveTab);
    };
  }, []);

  return (
    <div className="navbar">
      <Tabs activeKey={activeKey} items={items} onChange={onChange} centered />
    </div>
  );
}