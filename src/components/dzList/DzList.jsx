import style from './dzList.module.css';
import { useState } from 'react';
import Links from '../../links/Links';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DzList = () => {
  // return (
  //   // <div className={style.select}>
  //   //   {dzPopap ? (
  //   //     <ul
  //   //       className={style.openPopap}
  //         //   onClick={() => setDzPopap((dzPopap = !dzPopap))}
  //       >
  //         {/* {hwDAta.map((hw) => (
  //           <li key={hw.id}>
  //             <Link
  //               to={hw.link}
  //               className={style.a}
  //               onClick={() => {
  //                 hendelThis(hw.id);
  //               }}
  //             >
  //               {hw.dz}
  //             </Link>
  //           </li>
  //         ))} */}
  //       </ul>
  //     ) : (
  //       <ul
  //         className={style.closePopap}
  //         onClick={() => setDzPopap((dzPopap = !dzPopap))}
  //       >
  //         <li>
  //           {/* {selectedDz.map((selected) => (
  //             <Link key={selected.id} className={style.a}>
  //               {selected.dz}
  //             </Link>
  //           ))} */}
  //         </li>
  //       </ul>
  //     )}
  //   </div>
  // );
};

export default DzList;
