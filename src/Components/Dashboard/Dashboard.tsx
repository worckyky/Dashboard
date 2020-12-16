import React, { useEffect, useState } from "react";
import s from "./Dashboard.module.css";
import SimpleContent from "../Cards/SimpleContent/SimpleContent";
import ImageContent from "../Cards/ImageContent/ImageContent";
import VideoContent from "../Cards/VideoContent/VideoContent";
import GraphContent from "../Cards/GraphContent/GraphContent";

const Dashboard = () => {
  type compPositionType = {
    position: number
    order: number
  }
  const [compPosition, setCompPosition] = useState<Array<compPositionType>>([
    {
      position: 0,
      order: 0
    },
    {
      position: 1,
      order: 1
    },
    {
      position: 2,
      order: 2
    },
    {
      position: 3,
      order: 3
    }
  ]);
  const [currentCard, setCurrentCard] = useState<compPositionType>();
  useEffect(() => {
    let data = localStorage.getItem("DashboardPosition");
    if (data !== null) {
      setCompPosition(JSON.parse(data));
    }
  }, []);

  const components = [<SimpleContent/>, <ImageContent/>, <VideoContent/>, <GraphContent/>];

  const actionStyle = (e: React.DragEvent<HTMLDivElement>, action: "HOVER" | "END") => {
    if (action === "HOVER") {
      return (
        (e.currentTarget.style.background = "#f6f8fa"),
          (e.currentTarget.style.border = "1px dashed gray"),
          (e.currentTarget.style.borderRadius = "6px")
      );
    } else {
      return (
        (e.currentTarget.style.background = "#ffffff"),
          (e.currentTarget.style.border = "1px solid #ffffff"),
          (e.currentTarget.style.borderRadius = "0px")
      );
    }
  };

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: compPositionType) => {
    setCurrentCard(card);
  };
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    actionStyle(e, "END");
  };
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    actionStyle(e, "HOVER");
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: compPositionType) => {
    e.preventDefault();
    const newLocation = compPosition.map((c) => {
      if (c.position === card.position) {
        return { ...c, order: currentCard?.order || 0 };
      }
      if (c.position === currentCard?.position || 0) {
        return { ...c, order: card.order };
      }
      return c;
    });
    setCompPosition(newLocation);
    localStorage.setItem("DashboardPosition", JSON.stringify(newLocation));
    actionStyle(e, "END");
  };

  const sortCards = (a: compPositionType, b: compPositionType) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      <h1>Dashboard name</h1>
      <div style={{ display: "Flex", flexWrap: "wrap" }}>
        {compPosition.sort(sortCards).map((card, i) => {
          return (
            <div
              key={i}
              style={{ cursor: "Grab", padding: "8px" }}
              draggable={"true"}
              onDragStart={(e) => {
                dragStartHandler(e, card);
              }}
              onDragLeave={(e) => {
                onDragEnd(e);
              }}
              onDragEnd={(e) => {
                onDragEnd(e);
              }}
              onDragOver={(e) => {
                dragOverHandler(e);
              }}
              onDrop={(e) => {
                dropHandler(e, card);
              }}>
              {components[card.position]}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
