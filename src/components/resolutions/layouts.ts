export interface LayoutVariation {
  name: string;
  gridTemplateAreas: string;
}

export const layouts: { [key: number]: LayoutVariation[] } = {
  3: [
    {
      name: "Default",
      gridTemplateAreas: `
        "goal2 goal2 quote quote goal3 goal3"
        "goal2 goal2 quote quote goal3 goal3"
        "goal2 goal2 picture picture goal3 goal3"
        "goal2 goal2 picture picture goal3 goal3"
        "goal1 goal1 goal1 goal1 goal3 goal3"
        "goal1 goal1 goal1 goal1 goal3 goal3"
      `,
    },
  ],
  4: [
    {
      name: "Default",
      gridTemplateAreas: `
        "goal1 goal1 quote quote goal2 goal2"
        "goal1 goal1 quote quote goal2 goal2"
        "goal1 goal1 picture picture goal2 goal2"
        "goal4 goal4 picture picture goal2 goal2"
        "goal4 goal4 goal3 goal3 goal3 goal3"
        "goal4 goal4 goal3 goal3 goal3 goal3"
      `,
    },
  ],
  5: [
    {
      name: "Default",
      gridTemplateAreas: `
        "goal3 goal3 quote quote goal1 goal1"
        "goal3 goal3 quote quote goal1 goal1"
        "goal3 goal3 picture picture goal1 goal1"
        "goal3 goal3 picture picture goal2 goal2"
        "goal4 goal4 goal5 goal5 goal2 goal2"
        "goal4 goal4 goal5 goal5 goal2 goal2"
      `,
    },
  ],
};
