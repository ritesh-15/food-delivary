export const generateOrderId = (prefix: string = "OD") => {
  const id = `${prefix}_${Math.random().toString(16).slice(2)}`;
  return id;
};
