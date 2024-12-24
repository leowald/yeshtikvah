import { useParams } from "react-router-dom";

export default function Stories() {
  const { topic } = useParams();
  return <h1>{topic ? topic : "Stories"} Page</h1>;
}
