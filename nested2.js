const school = {
  name: "vnc",
  class: [10, 11, 12, 13],
  events: ["science fair", "bijoy dibosh", "21feb"],
  specialty: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

console.log(school.specialty.result.merit);
