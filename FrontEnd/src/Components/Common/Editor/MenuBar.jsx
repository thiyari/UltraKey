export default function MenuBar({ editor }) {
  if (!editor) return null;

  const addLink = (e) => {
    e.preventDefault();
    const url = window.prompt("Enter URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = (e) => {
    e.preventDefault();
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="menu-bar">

      {/* Text styles */}
      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBold().run()}}>
        <i className="fa-solid fa-bold fa-sm"></i>
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleItalic().run()}}>
        <i className="fa-solid fa-italic fa-sm"></i>
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleUnderline().run()}}>
        <i className="fa-solid fa-underline fa-sm"></i>
      </button>

      {/* Headings 
      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleHeading({ level: 1 }).run()}}>
        H1
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run()}}>
        H2
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleHeading({ level: 3 }).run()}}>
        H3
      </button>
      */}
      {/* Lists */}
      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBulletList().run()}}>
        <i className="fa-solid fa-list-ul fa-sm"></i>
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleOrderedList().run()}}>
        <i className="fa-solid fa-list-ol fa-sm"></i>
      </button>

      {/* Block styles 
      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBlockquote().run()}}>
        <i className="fa-solid fa-quote-left fa-sm"></i>
      </button> */}

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleCodeBlock().run()}}>
        <i className="fa-solid fa-code fa-sm"></i>
      </button>

      {/* Alignment */}
      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().setTextAlign("left").run()}}>
        <i className="fa-solid fa-align-left fa-sm"></i>
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().setTextAlign("center").run()}}>
        <i className="fa-solid fa-align-center fa-sm"></i>
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().setTextAlign("right").run()}}>
        <i className="fa-solid fa-align-right fa-sm"></i>
      </button>

      {/* Link + Image */}
      <button onClick={addLink}><i className="fa-solid fa-link fa-sm"></i></button>
      <button onClick={addImage}><i className="fa-regular fa-image fa-sm"></i></button>

      {/* Undo / Redo */}
      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().undo().run()}}>
        <i className="fa-solid fa-rotate-left fa-sm"></i>
      </button>

      <button onClick={(e) => {e.preventDefault(); editor.chain().focus().redo().run()}}>
        <i className="fa-solid fa-rotate-right fa-sm"></i>
      </button>
    </div>
  );
}