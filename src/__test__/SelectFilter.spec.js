import React from "react";
import { create } from "react-test-renderer";
import SelectFilter from "../components/SelectFilter";

describe("SelectFilter component", () => {
  const sectionItems = [
    {value: "hot", label: "Hot"},
    {value: "top", label: "Top"},
    {value: "user", label: "User"}
  ];
  const sortItems = [
    {value: "viral", label: "Viral"},
    {value: "top", label: "Top"},
    {value: "time", label: "Time"},
    {value: "rising", label: "Rising"}
  ];
  const windowItems = [
    {value: "day", label: "Day"},
    {value: "week", label: "Week"},
    {value: "month", label: "Month"},
    {value: "year", label: "Year"},
    {value: "all", label: "All"}
  ];

  test("Matches the snapshots for Section", () => {
    sectionItems.forEach(item => {
      const selectFilter = create(
        <SelectFilter
          name="section"
          label="Section"
          value={item.value}
          items={sectionItems}
        />
      );

      expect(selectFilter.toJSON()).toMatchSnapshot();
    });
  });

  test("Matches the snapshot for Sort", () => {
    sortItems.forEach(item => {
      const selectFilter = create(
        <SelectFilter
          name="sort"
          label="Sort"
          value={item.value}
          items={sortItems}
        />
      );

      expect(selectFilter.toJSON()).toMatchSnapshot();
    });
  });

  test("Matches the snapshot for Window", () => {
    windowItems.forEach(item => {
      const selectFilter = create(
        <SelectFilter
          name="window"
          label="Window"
          value={item.value}
          items={windowItems}
        />
      );

      expect(selectFilter.toJSON()).toMatchSnapshot();
    });
  });
});