export const addNewLine = (str: string) => {
  return str.split("\n").map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  })
}