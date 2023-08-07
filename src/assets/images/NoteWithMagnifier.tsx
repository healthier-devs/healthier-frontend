import type { TImage } from "src/interfaces/assets";

function NoteWithMagnifier(props: TImage) {
  return <img src="/images/note-with-magnifier.png" loading="eager" {...props} />;
}

export default NoteWithMagnifier;
