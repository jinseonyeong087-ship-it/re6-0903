import React, { useRef, useEffect } from "react";
import Editor from "@toast-ui/editor";              // 바닐라 에디터
import "@toast-ui/editor/dist/toastui-editor.css";  // CSS import

function App() {
  const editorRef = useRef(null);   // DOM을 붙일 div
  const instanceRef = useRef(null); // Editor 인스턴스 보관

  useEffect(() => {
    instanceRef.current = new Editor({
      el: editorRef.current,        // 여기 붙임
      initialValue: "여기에 내용을 작성하세요 ✨",
      previewStyle: "vertical",
      height: "400px",
      initialEditType: "markdown",
      useCommandShortcut: true,
    });

    return () => instanceRef.current?.destroy();
  }, []);

  const handleSave = () => {
    const markdown = instanceRef.current.getMarkdown();
    alert(markdown); // 👉 여기서 API 호출하면 서버 저장 가능
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">TUI 웹 에디터</h1>

        {/* 실제 Editor는 여기 div에 붙음 */}
        <div ref={editorRef} />

        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default App;
