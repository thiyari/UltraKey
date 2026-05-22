import React, {useState} from 'react'
import RichTextEditor from '../Common/Editor/RichTextEditor';
import EditorPreview from '../Common/Editor/EditorPreview';
import { Link } from "react-router-dom";

const Tabs = () => {

const [activeTab, setActiveTab] = useState("tab1");
const [description, setDescription] = useState("");
const [editor, setEditor] = useState("");

const styles = {
  container: {
    width: "auto",
    margin: "2px auto",
    fontFamily: "Arial",
  },
  tabHeader: {
    display: "flex",
    borderBottom: "2px solid #ccc",
  },
  tab: {
    flex: 1,
    padding: "2px",
    cursor: "pointer",
    background: "#f1f1f1",
    border: "none",
  },
  activeTab: {
    flex: 1,
    padding: "2px",
    cursor: "pointer",
    background: "#cdcdcd",
    color: "black",
    border: "none",
  },
  content: {
    paddingTop: "10px",
    border: "0px solid #ccc",
  },
};

  return (
    <div style={styles.container}>
      {/* Tab Buttons */}
      <div style={styles.tabHeader}>
        <Link to="#tab1"
          style={activeTab === "tab1" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("tab1")}
        >
          Visual
        </Link>

        <Link to="#tab2"
          style={activeTab === "tab2" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("tab2")}
        >
          Code
        </Link>
      </div>

      {/* Tab Content */}
      <div style={styles.content}>
        {activeTab === "tab1" && (
          <div>
                <RichTextEditor editor={(text)=>setEditor(text)} onChangeHTML={(html)=>{setDescription(html)}}/>
          </div>
        )}

        {activeTab === "tab2" && (
          <div>
            <EditorPreview editor={editor}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tabs
