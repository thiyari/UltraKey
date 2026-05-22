import React, {useState} from 'react'
import RichTextEditor from '../../Common/Editor/RichTextEditor';
import EditorPreview from '../../Common/Editor/EditorPreview';

const Tabs = ({  content, onChangeHTML}) => {
  const [activeTab, setActiveTab] = useState("editor");
  
  return (
    <div>
      <div className="card text-center">
                              <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                  <li className="nav-item">
                                    <button
                                      className={`nav-link ${
                                        activeTab === "editor" ? "active" : ""
                                      }`}
                                      onClick={() => setActiveTab("editor")}
                                    >
                                      Visual
                                    </button>
                                  </li>

                                  <li className="nav-item">
                                    <button
                                      className={`nav-link ${
                                        activeTab === "preview" ? "active" : ""
                                      }`}
                                      onClick={() => setActiveTab("preview")}
                                    >
                                      Code
                                    </button>
                                  </li>
                                </ul>
                              </div>

                              <div className="card-body">
                                {activeTab === "editor" && (
                                  <RichTextEditor
                                    value={content}
                                    onChangeHTML={(html)=>onChangeHTML(html)}
                                  />
                                )}

                                {activeTab === "preview" && (
                                  <EditorPreview content={content} />
                                )}
                              </div>
                            </div>      
    </div>
  )
}

export default Tabs
