import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { create } from "react-test-renderer";
import GalleryGrid from "../components/GalleryGrid";

describe("GalleryGrid component", () => {
  test("Matches the snapshots for GalleryGrid with empty images", () => {
    const galleryGrid = create(
      <GalleryGrid
        images={[]}
      />
    );

    expect(galleryGrid.toJSON()).toMatchSnapshot();
  });

  test("Matches the snapshots for GalleryGrid", () => {
    const images = [
      {
        title: 'title',
        description: 'desc',
        type: 'image/png',
        link: 'link',
        ups: 1,
        downs: 2,
        score: 3
      },
      {
        link: 'link',
        images: [
          {
            title: 'title1',
            description: 'desc1',
            type: 'video/mp4',
            link: 'link1_mp4',
            gifv: 'link1.gifv',
            ups: 1,
            downs: 2,
            score: 3
          }
        ]
      }, {
        title: 'title',
        description: 'desc',
        type: 'image/png',
        link: 'link',
        ups: 1,
        downs: 2,
        score: 3,
        images: [
          {
            title: 'title1',
            description: 'desc1',
            type: 'video/mp4',
            link: 'link1_mp4',
            gifv: 'link1.gifv',
            ups: 1,
            downs: 2,
            score: 3
          }
        ]
      },
      {
        title: 'title2',
        description: 'desc2',
        type: 'video/mp4',
        link: 'link2',
        gifv: 'link2.gifv'
      },
      {
        link: 'link',
        description: 'desc3',
        images: [
          {
            title: 'title1',
            type: 'image/jpeg',
            link: 'link1_mp4',
            gifv: 'link1.gifv',
            ups: 1,
            downs: 2,
            score: 3
          }
        ]
      }
    ];
    const galleryGrid = create(
      <GalleryGrid
        images={images}
        width='xs'
      />
    );

    expect(galleryGrid.toJSON()).toMatchSnapshot();
  });

  test("Matches the snapshots for GalleryGrid with different screen width", () => {
    const images = [
      {
        title: 'title',
        description: 'desc',
        type: 'image/png',
        link: 'link'
      }
    ];
    ['xs', 'sm', 'md', 'lg'].forEach(width => {
      const galleryGrid = create(
        <GalleryGrid
          images={images}
          width={width}
        />
      );

      expect(galleryGrid.toJSON()).toMatchSnapshot();
    });
  });

  test("It shows that GalleryGrid dimms and appears", () => {
    const images = [
      {
        title: 'title',
        description: 'desc',
        type: 'image/png',
        link: 'link'
      }
    ];
    const { container } = render(<GalleryGrid images={images} width='sm' />);

    userEvent.click(container.getElementsByTagName('img')[0]);

    expect(container.getElementsByTagName('img')).not.toBe();

    userEvent.click(screen.getByRole('button'));
  });

  test("It shows that GalleryGrid dimms and appears with another image", () => {
    const images = [
      {
        title: 'title',
        description: 'desc',
        type: 'video/mp4',
        link: 'link',
        gifv: 'link.difv',
        ups: 1,
        downs: 2,
        score: 3
      }
    ];
    const { container } = render(<GalleryGrid images={images} width='sm' />);

    userEvent.click(container.getElementsByTagName('img')[0]);

    expect(container.getElementsByTagName('img')).not.toBe();

    userEvent.click(screen.getByRole('button'));
  });
});