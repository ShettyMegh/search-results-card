import { FileIcon, StackIcon } from "@radix-ui/react-icons";

const FolderFile = ({ isFolder = false }: { isFolder?: boolean }) => {
  return (
    <div className="row-container">
      <div className="row-icon">
        {isFolder ? (
          <FileIcon height={16} width={16} />
        ) : (
          <StackIcon height={16} width={16} />
        )}
      </div>
      <div className="content">
        <h4 className="content__title">Randall Johnsson</h4>
        <div className="content__desc">
          <p className="desc">in Photos</p>
          <div className="content__dot" />
          <p className="desc">Edited 12m ago</p>
        </div>
      </div>
    </div>
  );
};

export default FolderFile;
