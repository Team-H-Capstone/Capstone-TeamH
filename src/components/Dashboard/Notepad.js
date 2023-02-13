import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"
import { db, auth } from "../../firebase/firebase-config";


import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import CharacterCount from '@tiptap/extension-character-count'
import "./Notepad.css"
import {
    FaBold,
    FaItalic,
    FaStrikethrough,
    FaListUl,
    FaListOl,
    FaIndent,
    FaUnderline
} from "react-icons/fa";
import { 
    MdHorizontalRule,
    MdUndo,
    MdRedo
 } from "react-icons/md";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }
  return (
    <div className="flex flex-row items-center">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <FaBold/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FaItalic/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <FaStrikethrough/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <FaIndent />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <MdHorizontalRule />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <MdUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <MdRedo />
      </button>
    </div>
  )
}

const limit = 280;

const Notepad = () => {
  const [textBox, setTextBox] = useState("");

  const editor = useEditor({
    extensions: [StarterKit, Underline, CharacterCount.configure({
        limit,
      })],
    content: ``,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setTextBox(html);
    },

  });

  if (!editor) {
    return null
  }

  const dateISO = new Date().toISOString();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addDoc(collection(db,"Notepad"),{
      textBox,
      name: auth.currentUser.displayName, 
      uid: auth.currentUser.uid,
      Timestamp: new Date(Date.now()).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}),
      dateISO: dateISO,
    })
  };


  return (
    <div 
    className="flex flex-col justify-center items-center border-solid border-2 border-[#A78A7F] py-2 bg-[#E7D7C1] rounded-3xl min-w-fit" 
    style={{ width:"43vw" }}
    >
      <h1 className="pb-2 px-10 text-[#344E41]" style={{ fontSize: "4.5vh" }}>Journal</h1>
      <MenuBar editor={editor} />
      <div>
        <EditorContent editor={editor}/>
        <div className="character-count">
            {editor.storage.characterCount.characters()}/{limit} characters
            <br />
            {editor.storage.characterCount.words()} words
            <button className="py-2 px-4 bg-[#343a40] border-2 hover:bg-[#6B9080] text-white hover:border-[#CCE3DE] hover:text-[#283618] rounded-full transition-colors duration-100" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Notepad;
