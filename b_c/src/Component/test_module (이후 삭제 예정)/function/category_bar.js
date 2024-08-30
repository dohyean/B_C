import React, { useRef, useState, useEffect } from "react";
import Category from "../class/category.js";

function Category_bar() {
  const initialCategories = [
    new Category(1, "none", 10, 10, "first", true),
    new Category(2, "none", 50, 50, "second", true),
    new Category(3, "none", 10, 90, "third", true),
    new Category(4, "none", 10, 130, "fourth", true),
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [maxTop, setMaxTop] = useState(categories.length * 40 + 10);
  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const formRef = useRef(null);

  const addCategory = () => {
    setMaxTop(categories.length * 40 + 50);

    const newCategory = new Category(
      categories.length + 1,
      "new",
      10,
      maxTop,
      "",
      true
    );

    setCategories([...categories, newCategory]);
  };

  const handleEditClick = (id) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.id === id) {
        return { ...cat, readonly: !cat.readonly };
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  const handleConfirmClick = (id) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.id === id) {
        return { ...cat, readonly: !cat.readonly };
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  const check = () => {
    var last = "";
    categories.forEach((cat) => {
      last +=
        cat.id +
        " / " +
        cat.status +
        " / " +
        cat.left +
        " / " +
        cat.top +
        " / " +
        cat.content +
        " / " +
        cat.readonly +
        "\n";
    });
    alert(last);
  };

  const handleMouseDown = (id, e) => {
    e.cursor = "move";
    e.preventDefault();
    setDraggingId(id);
    const { top, left } = formRef.current.getBoundingClientRect();

    const targetRect = e.currentTarget.getBoundingClientRect();
    const offsetX = left + targetRect.width / 2;
    const offsetY = top + targetRect.height / 2;

    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (draggingId !== null) {
      const updatedCategories = categories.map((cat) => {
        if (cat.id === draggingId) {
          return {
            ...cat,
            left: e.clientX - dragOffset.x,
            top: e.clientY - dragOffset.y,
          };
        }
        return cat;
      });
      setCategories(updatedCategories);
    }
  };

  const handleMouseUp = (e) => {
    e.cursor = "default";
    setDraggingId(null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingId, dragOffset, categories]);

  return (
    <form ref={formRef}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: maxTop + 10,
          backgroundColor: "#EBFFEB",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="password-field"
            style={{
              position: "absolute",
              left: cat.left + "px",
              top: cat.top + "px",
              backgroundColor: "white",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                color: "black",
                display: "flex",
                marginLeft: "20px",
                marginRight: "10px",
                cursor: "default",
                userSelect: "none",
              }}
              onMouseDown={(e) => handleMouseDown(cat.id, e)}
            >
              ·
            </span>
            <input
              type="text"
              name={`Textbox${cat.id}`}
              className="text password-input"
              placeholder={`Textbox ${cat.id}`}
              value={cat.content}
              readOnly={cat.readonly}
              onChange={(e) =>
                !cat.readonly &&
                setCategories(
                  categories.map((t) =>
                    t.id === cat.id ? { ...t, content: e.target.value } : t
                  )
                )
              }
              style={{ position: "relative", border: "0" }}
              onMouseDown={(e) => e.stopPropagation()} // Prevent text box from capturing mouse events
            />
            <button
              style={{
                position: "relative",
                right: 0,
                top: 0,
                height: "100%",
                width: "50px",
                cursor: "pointer",
                backgroundColor: "white",
                border: "0",
              }}
              onClick={() => {
                if (cat.readonly) {
                  handleEditClick(cat.id);
                } else {
                  handleConfirmClick(cat.id);
                }
              }}
            >
              {cat.readonly ? "수정" : "확인"}
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#EBFFEB",
          width: "100%",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
        onClick={addCategory}
      >
        <span style={{ marginLeft: "27px", marginRight: "10px" }}>+</span>
        <span>카테고리 추가</span>
      </div>
      <div
        style={{
          backgroundColor: "#EBFFEB",
          width: "100%",
          height: "30px",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <button onClick={check}>확인</button>
      </div>
    </form>
  );
}

export default Category_bar;
