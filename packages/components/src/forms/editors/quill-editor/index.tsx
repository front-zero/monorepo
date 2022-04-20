import { FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface IProps {
    /**
     * The value of the editor
     */
    value?: string;
    /**
     * The handler for the change event
     */
    onChange?: (val: string) => void;
}

const QuillEditor: FC<IProps> = ({ value, onChange }) => {
    return (
        <ReactQuill
            className="h-[200px] pb-[42px]"
            theme="snow"
            value={value}
            onChange={onChange}
            formats={[
                "header",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
            ]}
            modules={{
                toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [
                        "bold",
                        "italic",
                        "underline",
                        "strike",
                        "blockquote",
                        "code-block",
                    ],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                    ],
                    ["link", "image"],
                    ["clean"],
                    [{ color: [] }],
                ],
            }}
        />
    );
};

export default QuillEditor;
