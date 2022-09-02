export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// Remove İtems
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// Remove idividual item

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};
