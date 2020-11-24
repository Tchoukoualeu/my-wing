import React from "react";
import { act, create } from "react-test-renderer";
import GalleryFilter from "../components/GalleryFilter";

describe("GalleryFilter component", () => {
  test("Matches the snapshot for GalleryFilter Section Hot", () => {
    const galleryFilter = create(
      <GalleryFilter
        filters={{
          section: 'hot',
          sort: 'viral',
          window: 'day',
          showViral: true
        }}
      />
    );

    expect(galleryFilter.toJSON()).toMatchSnapshot();
  });

  test("Matches the snapshot for GalleryFilter Section Top and Sort Rising", () => {
    const galleryFilter = create(
      <GalleryFilter
        filters={{
          section: 'top',
          sort: 'rising',
          window: 'day',
          showViral: true
        }}
      />
    );

    expect(galleryFilter.toJSON()).toMatchSnapshot();
  });

  test("Matches the snapshot for GalleryFilter Section User", () => {
    const galleryFilter = create(
      <GalleryFilter
        filters={{
          section: 'user',
          sort: 'viral',
          window: 'day',
          showViral: true
        }}
      />
    );

    expect(galleryFilter.toJSON()).toMatchSnapshot();
  });

  test("It shows that Section select changes its value", () => {
    let galleryFilter;
    const setFilters = jest.fn();
    act(() => {
      galleryFilter = create(
        <GalleryFilter
          filters={{
            section: 'hot',
            sort: 'viral',
            window: 'day',
            showViral: true
          }}
          setFilters={setFilters}
        />
      );
    });
    expect(galleryFilter.toJSON()).toMatchSnapshot();

    const instance = galleryFilter.root;

    act(() => {
      instance
        .findAllByType("input")[0]
        .props
        .onChange({ target: {
          name: 'section',
          value: 'top'
        } })
    });

    expect(galleryFilter.toJSON()).toMatchSnapshot();
  });

  test("It shows that Viral swinch changes its value", () => {
    let galleryFilter;
    const setFilters = jest.fn();
    act(() => {
      galleryFilter = create(
        <GalleryFilter
          filters={{
            section: 'user',
            sort: 'viral',
            window: 'day',
            showViral: true
          }}
          setFilters={setFilters}
        />
      );
    });
    expect(galleryFilter.toJSON()).toMatchSnapshot();

    const instance = galleryFilter.root;

    act(() => {
      instance
        .findAllByType("input")[3]
        .props.onChange({ target: {
          name: 'showViral',
          checked: false
        } })
      });

    expect(galleryFilter.toJSON()).toMatchSnapshot();
  });
});