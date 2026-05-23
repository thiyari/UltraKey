import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Blockquote from '@tiptap/extension-blockquote'

import MenuBar from "./MenuBar";
import EditorPreview from "./EditorPreview";
import { useEffect } from "react";

export default function RichTextEditor(props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: false,
        underline: false,
      }),
      Underline,
      Link.configure({
        openOnClick: true,
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start writing something powerful...",
      }),
    ],
    content: props.value || "",
    onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    props.onChangeHTML(html)
    },
  });

  // ✅ IMPORTANT: sync backend updates into editor
  useEffect(() => {
    if (!editor) return;

    const isSame = editor.getHTML() === props.value;
    if (!isSame) {
     editor.commands.setContent(props.value || "", {
        emitUpdate: false,
      });
    }
  }, [props.value, editor]);


  if (!editor) return null;

  return (
    <div className="editor-wrapper">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}