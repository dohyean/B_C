import React, { useState } from "react";
import "./TestModule.css";
import Menubar from "../Menubar";

// 완전히 생성된 카테고리
class Category {
  constructor(id, status, left, top, content, readonly, subcategories = []) {
    this.id = id;
    this.status = status;
    this.left = left;
    this.top = top;
    this.content = content;
    this.readonly = readonly;
    this.subcategories = subcategories;
  }

  addSubcategory(subcategory) {
    if (subcategory instanceof Category) {
      this.subcategories.push(subcategory);
    } else {
      console.error('Subcategory is not a Category');
    }
  }

  removeSubcategory(name) {
    this.subcategories = this.subcategories.filter(sub => sub.name !== name);
  }

  changeCategoryContent(content) {
    this.content = content;
  }

  changeReadonly() {
    this.readonly = !this.readonly;
  }
}

function TestModule() {
  // 초기 카테고리 설정
  const initialCategories = [
    new Category(1, "none", 10, 10, "first", true, 1),
    new Category(2, "none", 50, 50, "second", true),
    new Category(3, "none", 10, 90, "third", true),
    new Category(4, "none", 10, 130, "fourth", true)
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [maxTop, setMaxTop] = useState(categories.length * 40 + 10);
  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const addCategory = () => {
    setMaxTop(categories.length * 40 + 50);

    const newCategory = new Category(
      categories.length + 1,
      "new",
      10,
      maxTop, // 기존 텍스트박스의 가장 아래 위치 + 50px
      "",
      true
    );
    
    setCategories([...categories, newCategory]);
  };

  const handleEditClick = (id) => {
    const updatedCategories = categories.map(cat => {
      if (cat.id === id) {
        const updatedCat = { ...cat, readonly: !cat.readonly };
        return updatedCat;
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  const handleConfirmClick = (id) => {
    const updatedCategories = categories.map(cat => {
      if (cat.id === id) {
        const updatedCat = { ...cat, readonly: !cat.readonly };
        return updatedCat;
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  const handleMouseMove = (e) => {
    if (draggingId !== null) {
      const updatedCategories = categories.map((cat) => {
        if (cat.id === draggingId) {
          return { ...cat, left: e.clientX - dragOffset.x, top: e.clientY - dragOffset.y };
        }
        return cat;
      });
      setCategories(updatedCategories);
    }
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  const check = () => {
    var last = "";
    categories.map(cat => {
      last += (cat.id + " / " + cat.status + " / " + cat.left + " / " + cat.top + " / " + cat.content + " / " + cat.readonly + "\n");
    })
    alert(last);
  }

  return (
    <div className="App">
      <Menubar />
      <div className="App-content-TestModule">
        <div
          style={{
            position: "relative",
            left: "0%",
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
              <text
                style={{
                  fontSize: "30px",
                  color: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  justifyItems: "center",
                  display: "flex",
                  marginLeft: "20px",
                  marginRight: "10px",
                  marginTop: "-10px",
                  cursor: "move",
                  userSelect: "none"
                }}
              >
                ·
              </text>
                <input
                  type="text"
                  name={`Textbox${cat.id}`}
                  className="text password-input"
                  placeholder={`Textbox ${cat.id}`}
                  value={cat.content}
                  readOnly={cat.readonly}
                  onChange={(e) =>
                    !cat.readonly && setCategories(
                      categories.map((t) =>
                        t.id === cat.id
                          ? { ...t, content: e.target.value }
                          : t
                      )
                    )
                  }
                  style={{ position: "relative", border: "0" }} // 버튼 공간 확보
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
                    border: "0"
                  }}
                  onClick={() => {
                    if (cat.readonly) {
                      handleEditClick(cat.id);
                    } else {
                      handleConfirmClick(cat.id);
                    }
                  }}
                >
                  {cat.readonly ? '수정' : '확인'}
                </button>
            </div>
          ))}
        </div>
        <div style={{backgroundColor: "#dcdcdc",width:"100%", height: "30px", display: "flex", alignItems: "center", justifyContent:"left"}} onClick={addCategory}>
          <text style = {{marginLeft: "27px", marginRight: "10px"}}>+</text>
          <text>카테고리 추가</text>
        </div>
        <div style={{backgroundColor: "#dcdcdc",width:"100%", height: "30px", display: "flex", justifyContent:"right"}} onClick={addCategory}>
          <button onClick={check}>확인</button> 
        </div>
      </div>
    </div>
  );
}

export default TestModule;
