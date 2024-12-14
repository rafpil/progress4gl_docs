import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  
  useEffect(() => {
    getMenuItem();
    console.log(menuItems);
  }, []);

  async function getMenuItem() {
    console.log("Fetching articles..."); // Logowanie przed pobraniem
    const { data, error } = await supabase
      .from("menu_item")
      .select("*");

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      console.error("Error fetching articles:", error);
    } else {
      // setArticle(data);
      setMenuItems(data);
      console.log("dodaje dane"); // Teraz powinno działać
    }
  }


  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);
  const [menuItems, setMenuItems] = useState([
    { title: 'Item 1', level: 'main', subMenu: [] },
    { title: 'Parent 1', level: 'main', subMenu: [
        { title: 'Submenu 1', level: 'sub', subMenu: [] },
        { title: 'Submenu 2', level: 'sub', subMenu: [] },
      ]
    },
    { title: 'Item 2', level: 'main', subMenu: [] },
    { title: 'Item 3', level: 'main', subMenu: [] },
    { title: 'Parent 2', level: 'main', subMenu: [
        { title: 'Submenu 1', level: 'sub', subMenu: [] },
        { title: 'Submenu 2', level: 'sub', subMenu: [] },
      ]
    },
    { title: 'Item 4', level: 'main', subMenu: [] },
  ]);

  // Funkcja do rozpoczęcia przeciągania
  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.target.style.opacity = '0.5';
  };

  // Funkcja do zakończenia przeciągania
  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDragOverItem(null);
  };

  // Funkcja do obsługi przeciągania nad innymi elementami
  const handleDragOver = (e, item) => {
    e.preventDefault(); // Pozwól na upuszczenie

    const rect = e.target.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    // Zmieniliśmy tutaj warunek: jeśli kursor jest powyżej połowy wysokości elementu, to umieszczamy po nim
    const isBefore = offsetY < rect.height / 2;

    setDragOverItem(item);
  };

  // Funkcja do obsługi upuszczenia elementu
  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    const updatedMenuItems = [...menuItems];
    if (draggedItem.level === 'main' && targetItem.level === 'main') {
      const draggedIndex = updatedMenuItems.findIndex(item => item.title === draggedItem.title);
      const targetIndex = updatedMenuItems.findIndex(item => item.title === targetItem.title);

      updatedMenuItems.splice(draggedIndex, 1); // Usuwamy przeciągany element
      // Zawsze wstawiamy go **po** wskazanym elemencie
      updatedMenuItems.splice(targetIndex + 1, 0, draggedItem);

      setMenuItems(updatedMenuItems);
    }

    setDraggedItem(null);
    setDragOverItem(null);
  };

  // Funkcja renderująca linię wskazującą miejsce przeciągania
  const renderDragLine = (item, dragOverItem) => {
    if (!dragOverItem || dragOverItem.title !== item.title) return null;

    // Zawsze renderujemy linię "po" (bottom)
    const lineStyle = {
      bottom: '0px',
      position: 'absolute',
      width: '100%',
      height: '1px',
      padding: 0,
      backgroundColor: 'white',
      zIndex: 1
    };

    return <div style={lineStyle} />;
  };

  return (
    <ul className="menu w-full bg-transparent">
      {menuItems.map((item, index) => (
        <li
          key={index}
          // draggable
          // onDragStart={(e) => handleDragStart(e, item)}
          // onDragEnd={handleDragEnd}
          // onDragOver={(e) => handleDragOver(e, item)}
          // onDrop={(e) => handleDrop(e, item)}
          className="menu-item"
          style={{ position: 'relative' }}
        >
          {/* Dodajemy linię wskazującą miejsce przeciągania */}
          {/* {renderDragLine(item, dragOverItem)} */}
          <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#58c4dc] flex w-full bg-[#283541] p-3 rounded-r-2xl"
                    : "dark:text-gray-200 hover:text-text-[#58c4dc] p-3 flex w-full"
                }
              >
                
              <summary>{item.label}</summary>
              </NavLink>
          {/* {item.subMenu.length === 0 && <a>{item.title}</a>}
          {item.subMenu.length > 0 && (
            <details open>
              <summary>{item.title}</summary>
              <ul>
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    draggable
                    onDragStart={(e) => handleDragStart(e, subItem)}
                    onDragEnd={handleDragEnd}
                    onDragOver={(e) => handleDragOver(e, subItem)}
                    onDrop={(e) => handleDrop(e, subItem)}
                  >
                    <a>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          )} */}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
