import { LucideExternalLink } from "lucide-react";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import cartogram from "@/assets/images/portfolio/cartogram.jpeg";

const InternshipFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <a
                        href="https://cartogram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <FileTitle>Cartogram</FileTitle>
                        <LucideExternalLink size={18} strokeWidth={2.5} />
                    </a>
                    <FileCaption>2025</FileCaption>
                </FileHeader>
                <FileText>
                    As a Software Engineering Intern, I developed mapping software used by hospitals
                    across the country. I built accessibility and navigation features in Svelte,
                    including travel-time estimation and text-to-speech, and implemented a Redis
                    caching layer in PHP that improved server response times by 75%.
                </FileText>
            </FileInfo>
            <FileImage className="bg-white">
                <img src={cartogram} alt="Cartogram Logo" className="h-3/4" />
            </FileImage>
        </FileContent>
    );
};

export default InternshipFile;
