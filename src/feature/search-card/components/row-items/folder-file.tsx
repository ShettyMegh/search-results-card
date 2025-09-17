import { FileIcon, StackIcon } from "@radix-ui/react-icons";
import { ITEMS_TYPE } from "../../constants";
import { FolderFileType } from "../../types";

const FolderFile = ({ data }: { data: FolderFileType }) => {
  const isFolder = data.type === ITEMS_TYPE.FOLDER;
  return (
    <div className="row-container">
      <div className="row-icon">
        {isFolder ? (
          <StackIcon height={16} width={16} />
        ) : (
          <FileIcon height={16} width={16} />
        )}
      </div>
      <div className="content">
        <div className="content-header">
          <h4 className="content__title">{data.title}</h4>
          {isFolder && (
            <p className="content__files">{data.totalFiles} Files</p>
          )}
        </div>
        <div className="content__desc">
          <p className="desc">in {data.location}</p>
          <div className="content__dot" />
          <p className="desc">{data.updated}</p>
        </div>
      </div>
    </div>
  );
};

export default FolderFile;
