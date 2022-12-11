import styled from "styled-components";
const SidebarStyled = styled.div`
  /* background: #1e2939; */
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: auto;
  padding-top: 150px;
  padding-bottom: 40px;
  background: darkslateblue;
  .sidebar-container {
    margin-top: 48px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .sidebar-title {
    color: #fffacf;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
  }
  .contacts-link {
    display: flex;
    align-items: top;
    color: #f4f2da;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .contacts-link:hover,
  .contacts-link:focus {
    /* color: #ffffff; */
    color: #ff6b08;
  }
  .contacts-link-type {
    display: flex;
    align-items: center;
    /* color: #ffffff; */
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-right: 10px;
  }
  .sidebar-list-item {
    /* color: #ff6b08; */
    color: #1e2939;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-left: 15px;
  }
  .sidebar-list-item::marker {
    color: #f4f2da;
  }
  .sidebar-list-text {
    color: #f4f2da;
  }
`;
export default SidebarStyled;
