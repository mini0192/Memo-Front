'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect, useState } from 'react'

type ToolbarButtonType = 
  | { type: 'bold' | 'italic' | 'strike' | 'bulletList' | 'orderedList'; label: string }
  | { type: 'heading'; level: 1 | 2 | 3; label: string }

export default function SimpleEditor() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Placeholder.configure({
        placeholder: 'Type something amazing...',
        showOnlyWhenEditable: true,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'editor focus:outline-none p-4 bg-white',
      },
    },
    immediatelyRender: false,
  })

  if (!isClient || !editor) return null

  return (
    <div className="w-full flex flex-col space-y-4">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

function Toolbar({ editor }: { editor: Editor }) {
  if (!editor) return null

  const buttons = [
    { type: 'bold', label: 'B' },
    { type: 'italic', label: 'I' },
    { type: 'strike', label: 'S' },
    { type: 'heading', level: 1, label: 'H1' },
    { type: 'heading', level: 2, label: 'H2' },
    { type: 'bulletList', label: '•' },
    { type: 'orderedList', label: '1.' },
  ] as const

  const isActive = (btn: ToolbarButtonType) =>
    btn.type === 'heading'
      ? editor.isActive('heading', { level: btn.level })
      : editor.isActive(btn.type)

  const onClick = (btn: ToolbarButtonType) => {
    const chain = editor.chain().focus()
    switch (btn.type) {
      case 'bold': chain.toggleBold().run(); break
      case 'italic': chain.toggleItalic().run(); break
      case 'strike': chain.toggleStrike().run(); break
      case 'heading': chain.toggleHeading({ level: btn.level }).run(); break
      case 'bulletList': chain.toggleBulletList().run(); break
      case 'orderedList': chain.toggleOrderedList().run(); break
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-2 border-b pb-2">
      {buttons.map((btn, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onClick(btn)}
          className='px-3 py-1 rounded text-sm font-medium transition text-gray-700 hover:bg-gray-200'>
          {btn.label}
        </button>
      ))}
    </div>
  )
}