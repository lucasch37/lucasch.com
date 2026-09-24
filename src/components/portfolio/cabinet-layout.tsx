import type React from "react";
import DividerFile from "@/components/portfolio/cabinet-files/divider-file";
import InternshipFile from "@/components/portfolio/cabinet-files/internship-file";
import PlaceholderFile from "@/components/portfolio/cabinet-files/placeholder-file";
import UniversityFile from "@/components/portfolio/cabinet-files/university-file";
import CompetitionsFile from "@/components/portfolio/cabinet-files/competitions-file";
import SystemsFile from "@/components/portfolio/cabinet-files/systems-file";

export type File = {
    tabLocation: 0 | 1 | 2;
    isDivider?: boolean;
    title: string;
    content: React.ReactNode;
};

// placeholder text
export const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin nulla erat, sed iaculis nisi ornare vel. Curabitur efficitur, felis a ullamcorper dignissim, erat nulla dapibus mi, sed rutrum nisi felis sed lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin nulla erat, sed iaculis nisi ornare vel.";

const cabinetLayout: File[] = [
    {
        tabLocation: 0,
        isDivider: true,
        title: "Education",
        content: <DividerFile title="Education" />,
    },
    {
        tabLocation: 1,
        title: "University",
        content: <UniversityFile />,
    },
    {
        tabLocation: 2,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 0,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 1,
        isDivider: true,
        title: "Experience",
        content: <DividerFile title="Experience" />,
    },
    {
        tabLocation: 2,
        title: "Cartogram",
        content: <InternshipFile />,
    },
    {
        tabLocation: 0,
        title: "Competitions",
        content: <CompetitionsFile />,
    },
    {
        tabLocation: 1,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 0,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 2,
        isDivider: true,
        title: "Projects",
        content: <DividerFile title="Projects" />,
    },
    {
        tabLocation: 1,
        title: "Systems",
        content: <SystemsFile />,
    },
    {
        tabLocation: 2,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 0,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 1,
        title: "---",
        content: <PlaceholderFile />,
    },
    {
        tabLocation: 2,
        title: "---",
        content: <PlaceholderFile />,
    },
];

export default cabinetLayout;
