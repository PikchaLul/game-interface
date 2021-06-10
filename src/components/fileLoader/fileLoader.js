import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadCharacter } from "../../redux/actions";
import styles from "./fileLoader.module.css";

const FileLoader = ({ data, loadCharacter }) => {
  const [fileDownloadUrl, setFileDownloadUrl] = useState(null);
  const [dofileDownload, setDofileDownload] = useState(null);
  const [dofileUpload, setDofileUpload] = useState(null);

  useEffect(() => {
    if (dofileDownload && fileDownloadUrl) {
      dofileDownload.click();
      URL.revokeObjectURL(fileDownloadUrl);
      setFileDownloadUrl("");
    }
  }, [fileDownloadUrl]);

  const download = (event) => {
    event.preventDefault();
    const output = JSON.stringify({ ...data }, null, 4);
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);

    setFileDownloadUrl(fileDownloadUrl);
  };

  const upload = (event) => {
    event.preventDefault();
    dofileUpload.click();
  };

  const openFile = (event) => {
    const fileObj = event.target.files[0];
    const reader = new FileReader();

    let fileloaded = (e) => {
      const fileContent = e.target.result;

      loadCharacter(JSON.parse(fileContent));
    };

    if (fileObj) {
      fileloaded = fileloaded.bind(this);
      reader.onload = fileloaded;
      reader.readAsText(fileObj);
    }
  };

  return (
    <div className={styles.fileLoader}>
      <button className={styles.action} onClick={download}>
        Сохранить персонажа
      </button>
      <a
        className={styles.hidden}
        download="states.json"
        href={fileDownloadUrl}
        ref={(e) => setDofileDownload(e)}
      >
        Скачать
      </a>
      <button className={styles.action} onClick={upload}>
        Загрузить персонажа
      </button>
      <input
        type="file"
        className={styles.hidden}
        multiple={false}
        accept=".json,application/json"
        onChange={(event) => openFile(event)}
        ref={(e) => setDofileUpload(e)}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  data: state,
});

const mapDispatchToProps = (dispatch, props) => ({
  loadCharacter: (character) => dispatch(loadCharacter(character)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileLoader);
