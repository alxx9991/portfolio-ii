const ssConfig = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
  5: "col-start-5",
  6: "col-start-6",
  7: "col-start-7",
};

const esConfig = {
  1: "col-end-1",
  2: "col-end-2",
  3: "col-end-3",
  4: "col-end-4",
  5: "col-end-5",
  6: "col-end-6",
  7: "col-end-7",
};

const smConfig = {
  1: "md:col-start-1",
  2: "md:col-start-2",
  3: "md:col-start-3",
  4: "md:col-start-4",
  5: "md:col-start-5",
  6: "md:col-start-6",
  7: "md:col-start-7",
  8: "md:col-start-8",
  9: "md:col-start-9",
  10: "md:col-start-10",
  11: "md:col-start-11",
};

const emConfig = {
  1: "md:col-end-1",
  2: "md:col-end-2",
  3: "md:col-end-3",
  4: "md:col-end-4",
  5: "md:col-end-5",
  6: "md:col-end-6",
  7: "md:col-end-7",
  8: "md:col-end-8",
  9: "md:col-end-9",
  10: "md:col-end-10",
  11: "md:col-end-11",
};

const slConfig = {
  1: "xl:col-start-1",
  2: "xl:col-start-2",
  3: "xl:col-start-3",
  4: "xl:col-start-4",
  5: "xl:col-start-5",
  6: "xl:col-start-6",
  7: "xl:col-start-7",
  8: "xl:col-start-8",
  9: "xl:col-start-9",
  10: "xl:col-start-10",
  11: "xl:col-start-11",
  12: "xl:col-start-12",
  13: "xl:col-start-[13]",
  14: "xl:col-start-[14]",
  15: "xl:col-start-[15]",
};

const elConfig = {
  1: "xl:col-end-1",
  2: "xl:col-end-2",
  3: "xl:col-end-3",
  4: "xl:col-end-4",
  5: "xl:col-end-5",
  6: "xl:col-end-6",
  7: "xl:col-end-7",
  8: "xl:col-end-8",
  9: "xl:col-end-9",
  10: "xl:col-end-10",
  11: "xl:col-end-11",
  12: "xl:col-end-12",
  13: "xl:col-end-[13]",
  14: "xl:col-end-[14]",
  15: "xl:col-end-[15]",
};

const smlConfig = {
  1: "lg:col-start-1",
  2: "lg:col-start-2",
  3: "lg:col-start-3",
  4: "lg:col-start-4",
  5: "lg:col-start-5",
  6: "lg:col-start-6",
  7: "lg:col-start-7",
  8: "lg:col-start-8",
  9: "lg:col-start-9",
  10: "lg:col-start-10",
  11: "lg:col-start-11",
  12: "lg:col-start-12",
  13: "lg:col-start-[13]",
  14: "lg:col-start-[14]",
  15: "lg:col-start-[15]",
};

const emlConfig = {
  1: "lg:col-end-1",
  2: "lg:col-end-2",
  3: "lg:col-end-3",
  4: "lg:col-end-4",
  5: "lg:col-end-5",
  6: "lg:col-end-6",
  7: "lg:col-end-7",
  8: "lg:col-end-8",
  9: "lg:col-end-9",
  10: "lg:col-end-10",
  11: "lg:col-end-11",
  12: "lg:col-end-12",
  13: "lg:col-end-[13]",
  14: "lg:col-end-[14]",
  15: "lg:col-end-[15]",
};

const Row = ({ ss, es, sm, em, sl, el, sml, eml, children, className }) => {
  const classes = `row-auto ${ssConfig[ss]} ${esConfig[es]} ${smConfig[sm]} ${
    emConfig[em]
  } ${sml ? smlConfig[sml] : slConfig[sl]} ${
    eml ? emlConfig[eml] : elConfig[el]
  } ${sml ? slConfig[sl] : ""} ${eml ? elConfig[el] : ""} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Row;
