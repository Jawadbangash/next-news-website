import React from 'react';

const Navbar = ({ categories, activeCategory, onCategoryChange, onSearch }) => {
    return (
      <nav>
        <ul className="navbar-list">
          {categories.map((category) => (
            <li key={category} className="button-navbar">
              <button
                className={category === activeCategory ? 'active' : ''}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

// const Navbar = ({item}) => {
//     console.log(item, 'item')
//     return (<div className="navbar">
//         <button className="button-navbar">{item}</button>
//         {/* {
//             props.items && props.items.map((item) => {
//                 <button className="button-navbar">item</button>
//             })
//         } */}
//         <button>Nav2</button>
//         <button>Nav3</button>
//         <button>Nav4</button>
//     </div>)
// }

export default Navbar