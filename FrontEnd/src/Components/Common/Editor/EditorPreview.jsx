import pretty from "pretty";

export default function EditorPreview({ content }) {

  const formattedHTML = pretty(content);

  return (
    <div className="preview-area text-start">
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <pre>{formattedHTML}</pre>
    </div>
  );
}