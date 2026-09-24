import { ExternalLinkIcon } from "lucide-react";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import competitions from "@/assets/images/portfolio/competitions.png";

const CompetitionsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Competitions</FileTitle>
                    <FileCaption>2024-present</FileCaption>
                </FileHeader>
                <FileText>
                    I have been a dedicated competitor at hackathons and other software development
                    competitions for the past 2 years.
                    <ul className="mt-1 list-disc">
                        <div className="flex items-center gap-1">
                            1st Place -
                            <a
                                className="flex items-center font-medium"
                                href="https://devpost.com/software/archibald-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GIA Hacks 2
                                <ExternalLinkIcon size={12} className="ml-1" />
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            1st Place -
                            <a
                                className="flex items-center font-medium"
                                href="https://devpost.com/software/envoyage-zmjsqg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                EMP SpaceHack
                                <ExternalLinkIcon size={12} className="ml-1" />
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            2nd Place -
                            <a
                                className="flex items-center font-medium"
                                href="https://github.com/lucasch37/TSA-Webmaster-2025"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WTSA Webmaster 2025
                                <ExternalLinkIcon size={12} className="ml-1" />
                            </a>
                        </div>
                    </ul>
                </FileText>
            </FileInfo>
            <FileImage className="bg-white">
                <img src={competitions} alt="Cartogram Logo" className="h-full" />
            </FileImage>
        </FileContent>
    );
};

export default CompetitionsFile;
