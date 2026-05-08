export default function EditorPreview({ editor }) {
  if (!editor) return null;

  return (
    <div className="preview">
      <h3>HTML Output</h3>
      <pre>{editor.getHTML()}</pre>
    </div>
  );
}