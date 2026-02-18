export const Cars = (props) => {
  const { items = [], addToOrder } = props;
  return (
    <div>
      {items.map((car) => (
        <Car key={car.id} addToOrder={addToOrder} {...car} />
      ))}
    </div>
  );
};

const Car = (props) => {
  const { id, title, price, addToOrder } = props;
  return (
    <div>
      <h2>{title}</h2>
      <span style={{ margin: "10px" }}>{price} $</span>
      <button onClick={() => addToOrder(id)}>buy</button>
    </div>
  );
};
