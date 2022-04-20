import { FC } from "react";
import FileItem from "./item";
import { IFile } from "@ht/shared/types";

interface IProps {
    files: IFile[];
}

const FileGroup: FC<IProps> = ({ files }) => {
    return (
        <div className="file-group">
            {files.map((file) => (
                <FileItem
                    key={file.id}
                    title={file.title}
                    path={file.path}
                    type={file.type}
                    size={file.size}
                    createdAt={file.createdAt}
                />
            ))}
        </div>
    );
};

export default FileGroup;
