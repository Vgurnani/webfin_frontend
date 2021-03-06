import React,{ useEffect, useState }from 'react';
import {Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap} from 'draft-js';
import 'draft-js/dist/Draft.css';
import Immutable from 'immutable'


const MyCustomBlock = (props) => {
return(<div className='customblock'>{props.children}</div>)
}
const blockRenderMap = Immutable.Map({
  'unstyled': {
    element: 'p',
    wrapper: <MyCustomBlock />,
  }
});
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const Draft = () =>  {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );
 
  const editor = React.useRef(null);
 
  function focusEditor() {
    editor.current.focus();
  }
  const onChange = editorState => {
    setEditorState(editorState)
  };
 
  useEffect(() => {
    focusEditor()
  }, []);

  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const onTab = e => {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, editorState, maxDepth));
  };

  const toggleBlockType = blockType => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };
  const toggleInlineStyle = inlineStyle => {
    onChange(
      RichUtils.toggleInlineStyle(editorState, inlineStyle)
    );
  };

  const setData = (editorState) => {
    setEditorState(editorState)
  }
 
  return (
    <div className='editor' onClick={focusEditor}>
         <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
    <Editor
        blockStyleFn={getBlockStyle}
        customStyleMap={styleMap}
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={editorState => setData(editorState)}
        onTab={onTab}
        placeholder="Tell a story..."
        ref={editor}
        spellCheck={true}
        userSelect="none"
        contentEditable={false}
        blockRenderMap={extendedBlockRenderMap}
        />
    </div>
  );
}
const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };
  function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';
      default:
        return null;
    }
  }
const StyleButton =(props) => {

  const onToggle = e => {
    e.preventDefault();
    props.onToggle(props.style);
  };

 
  let className = 'RichEditor-styleButton';
  if (props.active) {
    className += ' RichEditor-activeButton';
  }
    return (
      <span className={className} onMouseDown={onToggle}>
        {props.label}
      </span>
    );
  
}
const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];
const BlockStyleControls = props => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];
const InlineStyleControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};


export default Draft