import React, { useState } from "react";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

const App = () => {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("en"); // Default language is english

  return (
    <div>
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>

      <ReactTransliterate
        renderComponent={(props) => <input {...props} />}
        value={text}
        onChangeText={(text) => setText(text)}
        lang={lang}
      />
    </div>
  );
};

export default App;
