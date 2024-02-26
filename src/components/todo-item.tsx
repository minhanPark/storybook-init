type Props = {
  title: string;
};

export default function TodoItem({ title }: Props) {
  return (
    <div className="item-wrapper">
      <input type="checkbox" className="item-checkbox" />
      <p className="item-text">{title}</p>
    </div>
  );
}
