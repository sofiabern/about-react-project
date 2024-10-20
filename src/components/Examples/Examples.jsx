import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";
import TabButton from "../TabButton/TabButton";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [clickedTopic, setClickedTopic] = useState(null);

  function handleClick(clickedButton) {
    setClickedTopic(clickedButton);
  }

  const tabContent = !clickedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[clickedTopic].title}</h3>
      <p>{EXAMPLES[clickedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[clickedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={clickedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={clickedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={clickedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={clickedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
