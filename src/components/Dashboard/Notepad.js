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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addDoc(collection(db,"Notepad"),{
      textBox,
      name: auth.currentUser.displayName, 
      uid: auth.currentUser.uid,
      Timestamp: new Date(Date.now()).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
    })
  };


  return (
    <div 
    className="flex flex-col justify-center items-center border-solid border-2 py-4 bg-[#fefcfb] rounded-3xl" 
    style={{ width:"43vw" }}
    >
      <h1 className="text-3xl pb-2 px-10 text-[#344E41]">Journal</h1>
      <MenuBar editor={editor} />
      <div>
        <EditorContent editor={editor}/>
        <div className="character-count">
            {editor.storage.characterCount.characters()}/{limit} characters
            <br />
            {editor.storage.characterCount.words()} words
            <button className="px-2 border-solid border-2 hover:bg-[#3D405B] hover:text-[#F4F1DE] rounded-full" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Notepad;
