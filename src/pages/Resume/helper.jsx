export const getBoldHeading = (text) => {
  if (text.split(":").length < 2) {
    return text;
  }

  const [headings, rest] = text.split(":");
  return (
    <div>
      <strong className="text-white">{headings}</strong>:{rest}
    </div>
  );
};
