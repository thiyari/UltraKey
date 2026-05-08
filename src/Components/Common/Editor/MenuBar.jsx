export default function MenuBar({ editor }) {
  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="menu-bar">

      {/* Text styles */}
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </button>

      <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
        Underline
      </button>

      {/* Headings */}
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        H1
      </button>

      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        H2
      </button>

      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        H3
      </button>

      {/* Lists */}
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        Bullet List
      </button>

      <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        Numbered List
      </button>

      {/* Block styles */}
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        Quote
      </button>

      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        Code
      </button>

      {/* Alignment */}
      <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        Left
      </button>

      <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>
        Center
      </button>

      <button onClick={() => editor.chain().focus().setTextAlign("right").run()}>
        Right
      </button>

      {/* Link + Image */}
      <button onClick={addLink}>Link</button>
      <button onClick={addImage}>Image</button>

      {/* Undo / Redo */}
      <button onClick={() => editor.chain().focus().undo().run()}>
        Undo
      </button>

      <button onClick={() => editor.chain().focus().redo().run()}>
        Redo
      </button>
    </div>
  );
}