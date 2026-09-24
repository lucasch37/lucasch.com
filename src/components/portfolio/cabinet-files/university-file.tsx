import uw from "@/assets/images/portfolio/uw.jpg";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";

const UniversityFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle className="text-base">University of Washington</FileTitle>
                    <FileCaption>2026-present</FileCaption>
                </FileHeader>
                <FileText>
                    <p>
                        I'm currently a student at the University of Washington, pursuing a B.S. in
                        Computer Science as a direct admit to the Allen School.
                    </p>
                </FileText>
            </FileInfo>
            <FileImage>
                <img src={uw} alt="UW Campus" className="h-full object-cover" />
            </FileImage>
        </FileContent>
    );
};

export default UniversityFile;
