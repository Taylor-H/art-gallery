import styled from 'styled-components';
import { MdHomeFilled } from 'react-icons/md';
export const HomeIcon = styled(MdHomeFilled)`
  color: #007b9d;
  font-size: 3rem;
  margin: 0.5rem;
  &:hover {
    color: #50e2f2;
  }
`;
// export const StyledPaginate = styled(ReactPaginate).attrs({
//   activeClassName: 'active',
// })`
//   margin-bottom: 2rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   list-style-type: none;
//   padding: 0 5rem;
//   li a {
//     border-radius: 7px;
//     padding: 0.1rem 1rem;
//     border: gray 1px solid;
//     cursor: pointer;
//   }
//   li.previous a,
//   li.next a,
//   li.break a {
//     border-color: transparent;
//   }
//   li.active a {
//     background-color: #0366d6;
//     border-color: transparent;
//     color: white;
//     min-width: 32px;
//   }
//   li.disabled a {
//     color: grey;
//   }
//   li.disable,
//   li.disabled a {
//     cursor: default;
//   }
// `;
