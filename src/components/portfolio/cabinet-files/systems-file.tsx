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
import systems from "@/assets/images/portfolio/systems.png";

const SystemsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Systems Projects</FileTitle>
                    <FileCaption>2026</FileCaption>
                </FileHeader>
                <FileText>
                    <div>
                        <a
                            className="inline font-medium"
                            href="https://github.com/lucasch37/llcc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="inline-flex items-center">
                                llcc
                                <ExternalLinkIcon size={12} className="ml-1" />
                            </div>
                        </a>
                        : x86_64 C compiler written completely from scratch in C. Features type
                        schecking, semantic analysis, constant folding, register allocation, and
                        more.
                    </div>
                    <div className="mt-1">
                        <a
                            className="inline font-medium"
                            href="https://github.com/lucasch37/nsspi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="inline-flex items-center">
                                nsspi
                                <ExternalLinkIcon size={12} className="ml-1" />
                            </div>
                        </a>
                        : Pascal Interpreter written in Golang, covering a substantial subset of the
                        language.
                    </div>
                </FileText>
            </FileInfo>
            <FileImage className="bg-white">
                <img src={systems} alt="Cartogram Logo" className="h-4/5" />
            </FileImage>
        </FileContent>
    );
};

export default SystemsFile;
